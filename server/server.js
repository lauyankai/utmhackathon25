require('dotenv').config();
const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chatRoutes');

// Initialize Express app
const app = express();
const PORT = 8080; // Use a common port that's usually accessible

// Middleware
app.use(cors({
  origin: '*', // Allow all origins in development
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Simple health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Routes
app.use('/api', chatRoutes);

// Basic error handling
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Something went wrong on the server' });
});

// Start server - listen on all interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Chat endpoint available at: http://localhost:${PORT}/api/chat`);
}); 