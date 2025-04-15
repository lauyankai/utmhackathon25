import React from 'react';
import { Button, Stack } from '@mui/material';
import { Google as GoogleIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material';

export const SocialLogin: React.FC = () => {
  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth login
    console.log('Google login clicked');
  };

  const handleLinkedInLogin = () => {
    // TODO: Implement LinkedIn OAuth login
    console.log('LinkedIn login clicked');
  };

  return (
    <Stack spacing={2} sx={{ mt: 2, width: '100%' }}>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<GoogleIcon />}
        onClick={handleGoogleLogin}
        sx={{
          borderColor: '#4285f4',
          color: '#4285f4',
          '&:hover': {
            borderColor: '#4285f4',
            backgroundColor: 'rgba(66, 133, 244, 0.04)'
          }
        }}
      >
        Continue with Google
      </Button>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<LinkedInIcon />}
        onClick={handleLinkedInLogin}
        sx={{
          borderColor: '#0077b5',
          color: '#0077b5',
          '&:hover': {
            borderColor: '#0077b5',
            backgroundColor: 'rgba(0, 119, 181, 0.04)'
          }
        }}
      >
        Continue with LinkedIn
      </Button>
    </Stack>
  );
};