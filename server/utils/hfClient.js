const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

// Try to load API key from multiple sources
function loadApiKey() {
  try {
    // Try loading from .env directly
    const envPath = path.join(__dirname, '..', '.env');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8');
      const match = envContent.match(/HF_API_KEY=([^\s]+)/);
      if (match && match[1]) {
        return match[1].trim();
      }
    }
    
    // Fallback to environment variable
    return process.env.HF_API_KEY;
  } catch (error) {
    console.error('Error loading API key:', error);
    return null;
  }
}

/**
 * Client for interacting with Hugging Face Inference API
 */
class HuggingFaceClient {
  constructor() {
    // Get API key using our custom loader
    this.apiKey = loadApiKey();
    console.log('API Key status:', this.apiKey ? 'Set (not empty)' : 'Not set or empty');
    
    this.baseUrl = 'https://api-inference.huggingface.co/models';
    
    // Restore the original model as requested
    this.model = 'HuggingFaceH4/zephyr-7b-alpha';
    
    // Keep fallback models
    this.fallbackModels = [
      'google/flan-t5-xl',
      'microsoft/DialoGPT-medium'
    ];
  }

  /**
   * Generate a chat response using the specified model
   * @param {string} userMessage - The user's message
   * @returns {Promise<string>} The generated response
   */
  async generateChatResponse(userMessage) {
    if (!this.apiKey || this.apiKey === "YOUR_API_KEY") {
      console.error('API Key Error: API key is not correctly set');
      throw new Error('Hugging Face API key is not set. Please set HF_API_KEY environment variable.');
    }

    // Try all models in sequence until one works
    const allModels = [this.model, ...this.fallbackModels];
    let lastError = null;

    for (const model of allModels) {
      try {
        console.log(`Trying model: ${model}`);
        const response = await this.tryModelWithRetries(model, userMessage);
        console.log(`Successfully got response from model: ${model}`);
        return response;
      } catch (error) {
        console.warn(`Model ${model} failed:`, error.message);
        lastError = error;
        // Continue to next model
      }
    }
    
    // If all models failed, throw the last error
    console.error('All models failed. Last error:', lastError);
    throw lastError || new Error('All AI models failed to generate a response');
  }
  
  /**
   * Try a model with retries
   * @param {string} model - Model to use
   * @param {string} userMessage - User message
   * @returns {Promise<string>} Generated response
   */
  async tryModelWithRetries(model, userMessage) {
    // Log the model we're using
    console.log(`Using Hugging Face model: ${model}`);
    
    const prompt = this.formatPrompt(userMessage);
    console.log('Formatted prompt:', JSON.stringify(prompt).substring(0, 200) + '...');
    
    // Maximum number of retries
    const maxRetries = 2;
    
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        console.log(`API Request attempt ${attempt + 1}/${maxRetries + 1}`);
        
        // Create request body based on model type
        let requestBody;
        
        if (model.includes('zephyr')) {
          // Zephyr expects a text field, not inputs field
          requestBody = {
            ...prompt, // Use the object returned by formatPrompt
            parameters: {
              max_new_tokens: 250,
              temperature: 0.7,
              top_p: 0.95,
              do_sample: true,
              return_full_text: false
            }
          };
        } else {
          // Standard format for most other models
          requestBody = {
            inputs: prompt,
            parameters: {
              max_new_tokens: 250,
              temperature: 0.7,
              top_p: 0.95,
              do_sample: true
            }
          };
        }
        
        console.log('API Request payload:', JSON.stringify(requestBody).substring(0, 200) + '...');
        console.log('API Request URL:', `${this.baseUrl}/${model}`);
        console.log('API Key first/last chars:', this.apiKey ? `${this.apiKey.substring(0, 3)}...${this.apiKey.substring(this.apiKey.length - 3)}` : 'None');
        
        const response = await fetch(`${this.baseUrl}/${model}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
          timeout: 30000, // 30 second timeout - increasing to handle larger models
        });

        // Log the response status
        console.log(`API Response status: ${response.status}`);
        
        if (!response.ok) {
          const errorBody = await response.text();
          console.error(`API Error Response (${response.status}):`, errorBody);
          
          // If we haven't exceeded our retries and it's a 429 or 5xx error, retry
          if (attempt < maxRetries && (response.status === 429 || response.status >= 500)) {
            const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
            console.log(`Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }
          
          throw new Error(`Hugging Face API error: ${response.status} - ${errorBody || response.statusText}`);
        }

        // Get the response body
        const responseText = await response.text();
        console.log('API Raw Response:', responseText.substring(0, 200) + '...');
        
        // Parse the response
        let result;
        try {
          result = JSON.parse(responseText);
        } catch (e) {
          console.log('Response is not JSON, treating as plain text');
          result = responseText;
        }
        
        console.log('API Response received successfully');
        return this.extractReply(result, model);
      } catch (error) {
        // Log detailed error information
        console.error(`API Request error (attempt ${attempt + 1}):`, error);
        
        // If we haven't exceeded retries and it's a network error, retry
        if (attempt < maxRetries && (error.code === 'ECONNRESET' || error.type === 'request-timeout')) {
          const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
          console.log(`Network error, retrying in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }
        
        // Throw appropriate error
        if (error.type === 'request-timeout') {
          throw new Error('Request to Hugging Face API timed out');
        }
        throw error;
      }
    }
  }

  /**
   * Format the prompt for the model
   * @param {string} userMessage - The user's message
   * @returns {string} The formatted prompt
   */
  formatPrompt(userMessage) {
    // Special case for Zephyr model - it requires a specific format
    if (this.model.includes('zephyr')) {
      // Correct format for Zephyr models
      return {
        text: `<|system|>
You are a helpful onboarding assistant for a tech company. 
You answer questions about the company, its policies, tools, culture, and help new employees get oriented.
Please respond in a friendly, concise, and helpful way.
<|user|>
${userMessage}
<|assistant|>`
      };
    } else if (this.model.includes('mistral')) {
      // Format for Mistral models
      return `<s>[INST] You are a helpful onboarding assistant for a tech company. 
You answer questions about the company, its policies, tools, culture, and help new employees get oriented.
Please respond in a friendly, concise, and helpful way.

User question: ${userMessage} [/INST]</s>`;
    } else {
      // Default format for other models
      return `You are a helpful assistant answering: ${userMessage}`;
    }
  }

  /**
   * Extract the reply from the model's response
   * @param {Object} response - The raw API response
   * @param {string} model - The model used
   * @returns {string} The cleaned up reply
   */
  extractReply(response, model = this.model) {
    // Log a sample of the response for debugging
    console.log('Processing API response:', 
      typeof response === 'string' 
        ? response.substring(0, 100) + '...' 
        : JSON.stringify(response).substring(0, 100) + '...'
    );
    
    try {
      // Handle string responses (common for some models)
      if (typeof response === 'string') {
        return response.trim();
      }
      
      // Handle array responses (common HF format)
      if (Array.isArray(response)) {
        if (response[0]?.generated_text) {
          const text = response[0].generated_text;
          
          // Extract based on model
          if (model.includes('mistral')) {
            const pattern = /\[\/INST\](.*?)(?:<\/s>|$)/s;
            const match = text.match(pattern);
            return match && match[1] ? match[1].trim() : text.trim();
          }
          
          return text.trim();
        }
        
        // Simple array of strings
        if (typeof response[0] === 'string') {
          return response[0].trim();
        }
      }
      
      // Handle object with generated_text (another common format)
      if (response?.generated_text) {
        return response.generated_text.trim();
      }
      
      // Handle ChatGPT-like response format
      if (response?.choices && response.choices[0]) {
        if (response.choices[0].text) {
          return response.choices[0].text.trim();
        }
        if (response.choices[0].message?.content) {
          return response.choices[0].message.content.trim();
        }
      }
      
      // Last resort: convert to string and return
      if (response !== null && response !== undefined) {
        return JSON.stringify(response);
      }
      
      throw new Error('Could not extract reply from AI response');
    } catch (error) {
      console.error('Error extracting reply:', error);
      return "I apologize, but I'm having trouble generating a response. Please try asking in a different way.";
    }
  }
}

module.exports = new HuggingFaceClient(); 