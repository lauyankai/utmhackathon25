import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

interface ProgressHeaderProps {
  title: string;
  completionPercentage: number;
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({ title, completionPercentage }) => {
  return (
    <Box sx={{ 
      width: '100%', 
      bgcolor: '#0a1929',
      color: 'white',
      p: 4,
      mb: 3,
      borderRadius: 1,
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/hexagon-pattern.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
        <LinearProgress 
          variant="determinate" 
          value={completionPercentage} 
          sx={{ 
            flexGrow: 1,
            height: 8,
            borderRadius: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#1976d2'
            }
          }}
        />
        <Typography variant="body1" sx={{ minWidth: 65 }}>
          {completionPercentage}% COMPLETE
        </Typography>
      </Box>
    </Box>
  );
};
