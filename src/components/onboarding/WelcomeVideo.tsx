import React, { useState } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { PlayArrow as PlayIcon, CheckCircle as CheckIcon } from '@mui/icons-material';

export const WelcomeVideo: React.FC = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoComplete = () => {
    setIsCompleted(true);
    setIsPlaying(false);
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Our Company
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
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
          justifyContent: 'center'
        }}
      >
        {!isPlaying && (
          <Button
            variant="contained"
            size="large"
            startIcon={<PlayIcon />}
            onClick={() => setIsPlaying(true)}
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
          >
            <source src="/welcome-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </Paper>

      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
        {isCompleted ? (
          <>
            <CheckIcon color="success" />
            <Typography color="success.main">
              Great job! You've completed the welcome video.
            </Typography>
          </>
        ) : (
          <Typography color="text.secondary">
            Please watch the complete video to proceed with your onboarding.
          </Typography>
        )}
      </Box>
    </Box>
  );
};