# Onboarding Chatbot Server

A Node.js Express server that uses Hugging Face's Mistral-7B-Instruct model to power an onboarding chatbot assistant.

## Features

- REST API endpoint for chatbot interactions
- Integration with Hugging Face Inference API
- Error handling and timeouts
- Environment-based configuration

## Prerequisites

- Node.js 14 or higher
- Hugging Face API key

## Installation

1. Clone this repository
2. Navigate to the server directory
3. Install dependencies:

```bash
npm install
```

4. Copy the example environment file and add your Hugging Face API key:

```bash
cp .env.example .env
```

5. Edit the `.env` file and add your Hugging Face API key.

## Running the Server

To start the server in development mode with auto-reload:

```bash
npm run dev
```

For production:

```bash
npm start
```

The server will run on port 3001 by default (configurable via the PORT environment variable).

## API Endpoints

### POST /api/chat

Generates a chatbot response based on a user message.

**Request Body:**

```json
{
  "message": "What are the company's work from home policies?"
}
```

**Success Response:**

```json
{
  "reply": "Our company offers a flexible work-from-home policy. Most employees can work remotely up to 3 days per week, with in-office presence required for team meetings and collaborative sessions. Some roles may have different requirements based on department needs. All remote work arrangements should be coordinated with your direct manager."
}
```

**Error Response:**

```json
{
  "error": "Error message describing what went wrong"
}
```

## Using with the React Frontend

You can integrate this server with the React chatbot component by updating the `handleSend` function in `src/components/common/Chatbot.tsx` to make an API call to this server.

## Environment Variables

- `PORT`: Server port (default: 3001)
- `HF_API_KEY`: Hugging Face API key (required) 