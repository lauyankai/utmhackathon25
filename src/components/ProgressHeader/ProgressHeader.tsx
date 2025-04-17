import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

interface ProgressHeaderProps {
  title: string;
  completionPercentage: number;
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({ completionPercentage }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        right: 24,
        top: 88, // Adjusted to account for header height
        width: 120,
        p: 2,
        borderRadius: 2,
        backgroundColor: 'background.paper',
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        zIndex: 1000
      }}
    >
      <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
        Progress
      </Typography>
      <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
        {completionPercentage}%
      </Typography>
      <LinearProgress
        variant="determinate"
        value={completionPercentage}
        sx={{
          width: '100%',
          height: 4,
          borderRadius: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.03)',
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'primary.main'
          }
        }}
      />
    </Box>
  );
};
