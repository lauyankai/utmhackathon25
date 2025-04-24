import React, { useState } from 'react';
import { Box, Paper, TextField, IconButton, Typography, List, ListItem, ListItemText, Avatar, CircularProgress } from '@mui/material';
import { Send as SendIcon, SmartToy as BotIcon, Person as PersonIcon } from '@mui/icons-material';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const API_URL = 'https://utmhackathon25.vercel.app/';

export const ChatbotWithAPI: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

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
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.text,
        }),
        // Set a timeout that's longer than the server's timeout
        signal: AbortSignal.timeout(20000), // 20 seconds
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to get a response from the chatbot');
      }

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat API Error:', error);
      
      // Add error message as bot message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: error instanceof Error 
          ? `Sorry, I'm having trouble responding right now: ${error.message}` 
          : 'Sorry, I\'m having trouble responding right now. Please try again later.',
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

  // Auto-scroll to bottom when messages change
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Paper elevation={3} sx={{ height: '500px', width: '350px', display: 'flex', flexDirection: 'column', position: 'fixed', bottom: 90, right: 24, zIndex: 1000, borderRadius: 2, overflow: 'hidden' }}>
      <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
        <Typography variant="h6">Onboarding Assistant</Typography>
      </Box>

      <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
        {messages.length === 0 ? (
          <Box sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>
            <BotIcon sx={{ fontSize: 40, mb: 1, opacity: 0.7 }} />
            <Typography>
              Hello! I'm your onboarding assistant. Ask me anything about the company, policies, or tools.
            </Typography>
          </Box>
        ) : (
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
                    sx={{
                      '& .MuiListItemText-primary': {
                        wordBreak: 'break-word',
                      }
                    }}
                  />
                </Paper>
              </ListItem>
            ))}
            {isLoading && (
              <ListItem
                sx={{
                  flexDirection: 'row',
                  gap: 1,
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
                    p: 2,
                    bgcolor: 'grey.100',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <CircularProgress size={20} />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    Thinking...
                  </Typography>
                </Paper>
              </ListItem>
            )}
            <div ref={messagesEndRef} />
          </List>
        )}
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
            disabled={isLoading}
          />
          <IconButton
            color="primary"
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : <SendIcon />}
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
}; 
