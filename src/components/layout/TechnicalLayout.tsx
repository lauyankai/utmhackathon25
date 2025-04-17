import React from 'react';
import { Drawer, Box, Typography, Button, CssBaseline, Fab } from '@mui/material';
import {
  Assignment as AssignmentIcon,
  Code as CodeIcon,
  Assessment as AssessmentIcon,
  ArrowBack as ArrowBackIcon,
  Chat as ChatIcon,
  Analytics as AnalyticsIcon,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header, Footer, Chatbot, ProgressHeader } from '../../components';
import { useOnboardingProgress } from '../../store/onboardingProgress';

const drawerWidth = 280;

const technicalSections = [
  { path: '/technical-section/skill-analysis', label: 'Skill Analysis', icon: <AnalyticsIcon /> },
  { path: '/technical-section/projects', label: 'Available Projects', icon: <AssignmentIcon /> },
  { path: '/technical-section/my-tasks', label: 'My Tasks', icon: <CodeIcon /> },
  { path: '/technical-section/performance', label: 'Performance', icon: <AssessmentIcon /> },
];

export const TechnicalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const completionPercentage = useOnboardingProgress(state => state.getCompletionPercentage());

  const handleBackClick = () => {
    const currentSection = useOnboardingProgress.getState().getCurrentSection();
    const targetSection = currentSection === 'technical-section' ? 'welcome-video' : currentSection;
    
    navigate(`/${targetSection}`, {
      replace: true,
      state: { from: location.pathname }
    });
  };

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: 'linear-gradient(145deg, #f6f8fc 0%, #ffffff 100%)' }}>
      <CssBaseline />
      <Header onLogout={handleLogout} />
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
            transition: 'all 0.3s ease-in-out'
          }
        }}
      >
        <Box sx={{ 
          overflow: 'auto',
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100% - 64px)'
        }}>
          <Typography 
            variant="h6" 
            sx={{ 
              px: 3, 
              py: 2, 
              color: 'primary.main',
              fontWeight: 600,
              letterSpacing: '0.5px'
            }}
          >
            Technical Assessment
          </Typography>
          
          <Box sx={{ flex: 1 }}>
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
                        minWidth: 32
                      }}
                    >
                      {item.icon}
                    </Box>
                  }
                  sx={{
                    mb: 0.5,
                    py: 1,
                    px: 1.5,
                    borderRadius: 1.5,
                    justifyContent: 'flex-start',
                    fontSize: '0.875rem',
                    color: isSelected ? 'white' : 'text.primary',
                    backgroundColor: isSelected ? 'primary.main' : 'transparent',
                    transition: 'all 0.2s ease-in-out',
                    transform: isSelected ? 'scale(1.01)' : 'none',
                    boxShadow: isSelected ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
                    '&:hover': {
                      backgroundColor: isSelected ? 'primary.dark' : 'rgba(0, 0, 0, 0.04)',
                      transform: 'scale(1.01)'
                    }
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          <Box sx={{ p: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              startIcon={<ArrowBackIcon />}
              onClick={handleBackClick}
              sx={{
                py: 1,
                borderRadius: 1.5,
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              Back to Onboarding
            </Button>
          </Box>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3, md: 4 },
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '200px',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)',
            pointerEvents: 'none'
          }
        }}
      >
        <ProgressHeader title="Technical Assessment Progress" completionPercentage={completionPercentage} />
        {children}
        <Footer />
      </Box>
      {isChatOpen && <Chatbot />}
      <Fab
        color="primary"
        aria-label="chat"
        onClick={() => setIsChatOpen(!isChatOpen)}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24
        }}
      >
        <ChatIcon />
      </Fab>
    </Box>
  );
}; 