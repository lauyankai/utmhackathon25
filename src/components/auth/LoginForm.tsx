import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Container, Divider, IconButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../../assets/logo.png';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    onLogin(email, password);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #f6f8fc 0%, #ffffff 100%)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto'
    }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          width: '100%',
          borderRadius: 2,
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.01)'
          }
        }}
      >
        <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ width: '120px', height: 'auto', marginBottom: '24px' }} />
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 500,
              color: '#2f3542',
              textAlign: 'center',
              maxWidth: '320px',
              lineHeight: 1.5,
              letterSpacing: '0.3px'
            }}
          >
            Accelerating Employee Success Through Smart Onboarding
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          mb: 3,
          width: '100%',
          justifyContent: 'center'
        }}>
          <IconButton 
            sx={{ 
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              p: 1,
              '&:hover': { backgroundColor: '#f5f5f5' }
            }}
          >
            <GoogleIcon />
          </IconButton>
          <IconButton 
            sx={{ 
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              p: 1,
              '&:hover': { backgroundColor: '#f5f5f5' }
            }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton 
            sx={{ 
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              p: 1,
              '&:hover': { backgroundColor: '#f5f5f5' }
            }}
          >
            <GitHubIcon />
          </IconButton>
        </Box>

        <Divider sx={{ width: '100%', mb: 3 }}>
          <Typography variant="body2" color="text.secondary" sx={{ px: 2 }}>
            or continue with email
          </Typography>
        </Divider>

        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          sx={{ 
            width: '100%'
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error}
            sx={{
              '& .MuiOutlinedInput-root': {
                transition: 'all 0.2s ease-in-out',
                '&:hover fieldset': {
                  borderColor: 'primary.main'
                }
              }
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error}
            sx={{
              '& .MuiOutlinedInput-root': {
                transition: 'all 0.2s ease-in-out',
                '&:hover fieldset': {
                  borderColor: 'primary.main'
                }
              }
            }}
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              mt: 3,
              mb: 2,
              py: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              '&:hover': {
                boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
              }
            }}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};