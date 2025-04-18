# Integrating the Chatbot API with the React Frontend

This guide explains how to integrate the Node.js Express chatbot API with the React frontend.

## Step 1: Set Up the Server

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on the example:
   ```bash
   cp .env.example .env
   ```

4. Add your Hugging Face API key to the `.env` file. You can obtain a key from [Hugging Face](https://huggingface.co/settings/tokens).

5. Start the server:
   ```bash
   npm run dev
   ```

The server should now be running on http://localhost:3001, with the chat endpoint available at http://localhost:3001/api/chat.

## Step 2: Use the Enhanced Chatbot Component

Instead of using the original `Chatbot` component, use the `ChatbotWithAPI` component which is already configured to communicate with the server.

1. Import the enhanced chatbot component in your React component:
   ```jsx
   import { ChatbotWithAPI } from './components/common/ChatbotWithAPI';
   ```

2. Use the component in your JSX:
   ```jsx
   <ChatbotWithAPI />
   ```

3. (Optional) If you need to customize the API URL, modify the `API_URL` constant at the top of the `ChatbotWithAPI.tsx` file.

## Step 3: Testing the Integration

1. Make sure both the server and your React application are running.
2. Open your React app in the browser.
3. Click on the chatbot button to open the chatbot interface.
4. Type a message and send it to see the AI-powered response.

## Customizing the Chatbot

### Modifying the Prompt Template

To change how the AI responds, you can modify the prompt template in `server/utils/hfClient.js`. Look for the `formatPrompt` method:

```js
formatPrompt(userMessage) {
  return `<s>[INST] You are a helpful onboarding assistant for a tech company. 
You answer questions about the company, its policies, tools, culture, and help new employees get oriented.
Please respond in a friendly, concise, and helpful way.

User question: ${userMessage} [/INST]</s>`;
}
```

### Adjusting Model Parameters

You can tune the AI model's behavior by modifying the parameters in the `generateChatResponse` method in `server/utils/hfClient.js`:

```js
parameters: {
  max_new_tokens: 250,  // Maximum length of the response
  temperature: 0.7,     // Higher values = more creative, lower = more deterministic
  top_p: 0.95,          // Controls diversity of outputs
  do_sample: true,      // Whether to use sampling (vs. greedy decoding)
}
```

### Changing the AI Model

If you want to use a different Hugging Face model, update the `model` property in the `HuggingFaceClient` constructor:

```js
constructor() {
  this.apiKey = process.env.HF_API_KEY;
  this.baseUrl = 'https://api-inference.huggingface.co/models';
  this.model = 'mistralai/Mistral-7B-Instruct'; // Change this to use a different model
}
```

## Troubleshooting

### CORS Issues

If you encounter CORS errors, make sure the server's CORS configuration allows requests from your frontend domain. Modify the CORS options in `server/server.js` if needed:

```js
app.use(cors({
  origin: 'http://your-frontend-domain.com',
  methods: ['GET', 'POST'],
  credentials: true
}));
```

### API Key Not Working

If you get errors about authentication, double-check your Hugging Face API key in the `.env` file. Make sure it has the proper permissions to access the model.

### Timeout Errors

If requests are timing out, you might need to adjust the timeout values:

1. In `server/utils/hfClient.js`, increase the timeout for the fetch request.
2. In `src/components/common/ChatbotWithAPI.tsx`, increase the timeout for the AbortSignal.

## Production Deployment

For production deployment:

1. Set environment variables securely in your hosting environment instead of using a `.env` file.
2. Update the API URL in `ChatbotWithAPI.tsx` to point to your production API endpoint.
3. Consider implementing rate limiting and authentication for the API endpoint to prevent abuse. 