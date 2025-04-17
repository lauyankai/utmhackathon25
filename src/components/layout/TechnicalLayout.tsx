import React from 'react';
import { Drawer, Box, Typography, Button } from '@mui/material';
import {
  Assignment as AssignmentIcon,
  Code as CodeIcon,
  Assessment as AssessmentIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 280;

const technicalSections = [
  { path: '/technical-section/projects', label: 'Available Projects', icon: <AssignmentIcon /> },
  { path: '/technical-section/my-tasks', label: 'My Tasks', icon: <CodeIcon /> },
  { path: '/technical-section/performance', label: 'Performance', icon: <AssessmentIcon /> },
];

export const TechnicalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/faq', {
      replace: true,
      state: { from: location.pathname }
    });
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#ffffff',
            borderRight: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '4px 0 8px rgba(0, 0, 0, 0.02)',
          }
        }}
      >
        <Box sx={{ 
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100% - 64px)'
        }}>
          <Box sx={{ p: 2, borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={handleBackClick}
              sx={{ mb: 2 }}
            >
              Back to Onboarding
            </Button>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: '0.5px'
              }}
            >
              Technical Assessment
            </Typography>
          </Box>

          <Box sx={{ p: 2, flex: 1 }}>
            {technicalSections.map((item) => {
              const isSelected = location.pathname === item.path;
              return (
                <Button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  fullWidth
                  startIcon={
                    <Box
                      component="span"
                      sx={{
                        color: isSelected ? 'white' : 'primary.main',
                        display: 'flex',
                        minWidth: 40
                      }}
                    >
                      {item.icon}
                    </Box>
                  }
                  sx={{
                    mb: 1,
                    py: 1.5,
                    borderRadius: 2,
                    justifyContent: 'flex-start',
                    color: isSelected ? 'white' : 'text.primary',
                    backgroundColor: isSelected ? 'primary.main' : 'transparent',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: isSelected ? 'primary.dark' : 'rgba(0, 0, 0, 0.04)',
                      transform: 'scale(1.02)'
                    }
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3, md: 4 },
          mt: 8,
          bgcolor: 'background.default'
        }}
      >
        {children}
      </Box>
    </Box>
  );
}; 