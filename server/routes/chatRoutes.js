const express = require('express');
const router = express.Router();
const hfClient = require('../utils/hfClient');

/**
 * Chat endpoint to handle user messages and generate AI responses
 */
router.post('/chat', async (req, res) => {
  try {
    // Validate request body
    const { message } = req.body;
    
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ 
        error: 'Invalid request. Message is required and must be a string.' 
      });
    }

    // Generate AI response
    const reply = await hfClient.generateChatResponse(message);
    
    // Return the response
    res.json({ reply });
    
  } catch (error) {
    console.error('Chat API error:', error);
    
    // Determine appropriate error response
    if (error.message.includes('API key is not set')) {
      return res.status(500).json({ 
        error: 'Server configuration error. Please contact an administrator.' 
      });
    } else if (error.message.includes('timed out')) {
      return res.status(504).json({ 
        error: 'Request timed out. Please try again later.' 
      });
    } else if (error.message.includes('Hugging Face API error')) {
      // For debugging - include the actual error in development environments
      const errorDetails = process.env.NODE_ENV === 'production' 
        ? 'Please try again later.' 
        : error.message;
        
      return res.status(502).json({ 
        error: `Error communicating with AI service. ${errorDetails}` 
      });
    }
    
    // Generic error response
    res.status(500).json({ 
      error: 'An unexpected error occurred. Please try again later.' 
    });
  }
});

/**
 * GET handler for the chat endpoint
 * Provides helpful information on how to use the API
 */
router.get('/chat', (req, res) => {
  res.json({
    message: 'This endpoint requires a POST request with a JSON body containing a message field',
    example: {
      method: 'POST',
      contentType: 'application/json',
      body: {
        message: 'What are the company work from home policies?'
      }
    },
    response: {
      reply: 'This will contain the AI-generated response to your question'
    }
  });
});

module.exports = router; 