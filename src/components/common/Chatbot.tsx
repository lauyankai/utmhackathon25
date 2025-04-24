import React, { useState, useEffect } from 'react';
import { Box, Paper, TextField, IconButton, Typography, List, ListItem, ListItemText, Avatar } from '@mui/material';
import { Send as SendIcon, SmartToy as BotIcon, Person as PersonIcon } from '@mui/icons-material';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const API_URL = 'https://utmhackathon25.vercel.app/';
// Alternative with CORS proxy if needed
// const API_URL = 'https://cors-anywhere.herokuapp.com/http://localhost:8080/api/chat';

export const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState<'unknown' | 'online' | 'offline'>('unknown');

  // Check server status on component mount
  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await fetch(API_URL, {
          method: 'GET',
        });
        
        if (response.ok) {
          setServerStatus('online');
          console.log('Server is online and reachable');
          
          // Add welcome message
          const welcomeMessage: Message = {
            id: Date.now().toString(),
            text: "Welcome to the onboarding assistant! How can I help you today?",
            sender: 'bot',
            timestamp: new Date()
          };
          
          setMessages([welcomeMessage]);
        } else {
          console.error('Server returned an error:', response.status);
          setServerStatus('offline');
        }
      } catch (error) {
        console.error('Error connecting to server:', error);
        setServerStatus('offline');
      }
    };
    
    checkServerStatus();
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      console.log('Sending request to:', API_URL);
      
      // Connect to the actual API
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      console.log('Response status:', response.status);
      
      const data = await response.json();
      console.log('Response data:', data);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply || data.error || "Sorry, I couldn't process your request.",
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error details:', error);
      
      // Show error message to user
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: serverStatus === 'offline' 
          ? 'The server appears to be offline. Please make sure the Node.js server is running at http://localhost:8080' 
          : 'Sorry, there was an error connecting to the server. Please try again later.',
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <Paper elevation={3} sx={{ height: '500px', width: '350px', display: 'flex', flexDirection: 'column', position: 'fixed', bottom: 90, right: 24, zIndex: 1000, borderRadius: 2, overflow: 'hidden' }}>
      <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Onboarding Assistant</Typography>
        <Typography variant="caption" sx={{ 
          bgcolor: serverStatus === 'online' ? 'success.main' : serverStatus === 'offline' ? 'error.main' : 'warning.main',
          px: 1,
          py: 0.5,
          borderRadius: 1
        }}>
          {serverStatus === 'online' ? 'Online' : serverStatus === 'offline' ? 'Offline' : 'Connecting...'}
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
        <List>
          {messages.map((message) => (
            <ListItem
              key={message.id}
              sx={{
                flexDirection: message.sender === 'user' ? 'row-reverse' : 'row',
                gap: 1,
                mb: 1
              }}
            >
              <Avatar
                sx={{
                  bgcolor: message.sender === 'user' ? 'primary.main' : 'secondary.main'
                }}
              >
                {message.sender === 'user' ? <PersonIcon /> : <BotIcon />}
              </Avatar>
              <Paper
                elevation={1}
                sx={{
                  p: 1,
                  maxWidth: '70%',
                  bgcolor: message.sender === 'user' ? 'primary.light' : 'grey.100'
                }}
              >
                <ListItemText
                  primary={message.text}
                  secondary={message.timestamp.toLocaleTimeString()}
                />
              </Paper>
            </ListItem>
          ))}
          {isLoading && (
            <ListItem
              sx={{
                mb: 1
              }}
            >
              <Avatar
                sx={{
                  bgcolor: 'secondary.main'
                }}
              >
                <BotIcon />
              </Avatar>
              <Paper
                elevation={1}
                sx={{
                  p: 1,
                  ml: 1,
                  bgcolor: 'grey.100'
                }}
              >
                <Typography variant="body2">Thinking...</Typography>
              </Paper>
            </ListItem>
          )}
        </List>
      </Box>

      <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            multiline
            maxRows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            variant="outlined"
            size="small"
            disabled={isLoading || serverStatus === 'offline'}
          />
          <IconButton
            color="primary"
            onClick={handleSend}
            disabled={!input.trim() || isLoading || serverStatus === 'offline'}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};
