import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Container, Grid } from '@mui/material';
import { SocialLogin } from './SocialLogin';

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
      minHeight: '100vh' 
    }}>
      <Paper elevation={3} sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <Typography component="h1" variant="h5">
          Welcome Back
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Company Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error}
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
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="body2" color="text.secondary" align="center">
                Or continue with
              </Typography>
            </Grid>
          </Grid>
          <SocialLogin />
        </Box>
      </Paper>
    </Container>
  );
};