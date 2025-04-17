import React, { useState } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { PlayArrow as PlayIcon, CheckCircle as CheckIcon } from '@mui/icons-material';
import { useOnboardingProgress } from '../../store/onboardingProgress';

export const WelcomeVideo: React.FC = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const completeSection = useOnboardingProgress(state => state.completeSection);

  const handleVideoComplete = () => {
    setIsCompleted(true);
    setIsPlaying(false);
    completeSection('welcome-video');
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
        Welcome to Our Company
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph sx={{ opacity: 0.8 }}>
        Watch this short video to learn about our company's mission, values, and what you can expect during your onboarding journey.
      </Typography>

      <Paper 
        elevation={3} 
        sx={{
          mt: 4,
          position: 'relative',
          backgroundColor: 'grey.900',
          height: 450,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 2,
          overflow: 'hidden',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.01)'
          }
        }}
      >
        {!isPlaying && (
          <Button
            variant="contained"
            size="large"
            startIcon={<PlayIcon />}
            onClick={() => setIsPlaying(true)}
            sx={{
              px: 4,
              py: 2,
              borderRadius: 3,
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
                transform: 'scale(1.05)'
              },
              transition: 'all 0.2s ease-in-out'
            }}
          >
            Play Welcome Video
          </Button>
        )}
        {isPlaying && (
          <video
            width="100%"
            height="100%"
            controls
            autoPlay
            onEnded={handleVideoComplete}
            style={{ objectFit: 'cover' }}
          >
            <source src="/videos/onboarding.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </Paper>

      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
        {isCompleted ? (
          <>
            <CheckIcon color="success" sx={{ fontSize: 24 }} />
            <Typography color="success.main" sx={{ fontWeight: 500 }}>
              Great job! You've completed the welcome video.
            </Typography>
          </>
        ) : (
          <Typography color="text.secondary" sx={{ opacity: 0.8 }}>
            Please watch the complete video to proceed with your onboarding.
          </Typography>
        )}
      </Box>
    </Box>
  );
};