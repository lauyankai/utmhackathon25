import React, { useState } from 'react';
import { Box, Drawer } from '@mui/material';
import { SkillAnalysis } from './tech/SkillAnalysis';
import { TechnicalSection } from './tech/TechnicalSection';

const DRAWER_WIDTH = 400;

export const OnboardingLayout: React.FC = () => {
  const [showProjects, setShowProjects] = useState(false);

  const handleContinue = () => {
    setShowProjects(true);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
          },
        }}
      >
        <SkillAnalysis onContinue={handleContinue} />
      </Drawer>
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
          display: showProjects ? 'block' : 'none'
        }}
      >
        <TechnicalSection />
      </Box>
    </Box>
  );
}; 