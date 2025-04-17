import React from 'react';
import { Box, Typography, LinearProgress, Paper } from '@mui/material';

interface ProgressHeaderProps {
  title: string;
  completionPercentage: number;
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({ title, completionPercentage }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        mb: 3,
        p: 3,
        borderRadius: 2,
        backgroundColor: 'white',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
          {Math.round(completionPercentage)}% Complete
        </Typography>
      </Box>
      
      <LinearProgress
        variant="determinate"
        value={completionPercentage}
        sx={{
          width: '100%',
          height: 8,
          borderRadius: 4,
          backgroundColor: 'rgba(0, 0, 0, 0.03)',
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'primary.main',
            borderRadius: 4
          }
        }}
      />
    </Paper>
  );
};
