import React from 'react';
import { Drawer, Box, Typography, Button } from '@mui/material';
import {
  PlayCircle as VideoIcon,
  Business as CultureIcon,
  Today as DailyLifeIcon,
  AccountTree as RoleIcon,
  Code as TechStackIcon,
  Build as ToolsIcon,
  Security as SecurityIcon,
  Group as TeamIcon,
  Domain as DepartmentIcon,
  QuestionAnswer as FAQIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useOnboardingProgress } from '../../store/onboardingProgress';

const drawerWidth = 280;

const sections = [
  { path: '/welcome-video', label: 'Welcome Video', icon: <VideoIcon /> },
  { path: '/company-culture', label: 'Company Culture', icon: <CultureIcon /> },
  { path: '/daily-life', label: 'Daily Life', icon: <DailyLifeIcon /> },
  { path: '/role-overview', label: 'Role Overview', icon: <RoleIcon /> },
  { path: '/tech-stack', label: 'Tech Stack', icon: <TechStackIcon /> },
  { path: '/tools', label: 'Tools', icon: <ToolsIcon /> },
  { path: '/security', label: 'Security', icon: <SecurityIcon /> },
  { path: '/team', label: 'Team', icon: <TeamIcon /> },
  { path: '/department', label: 'Department', icon: <DepartmentIcon /> },
  { path: '/faq', label: 'FAQ', icon: <FAQIcon /> }
];

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const completionPercentage = useOnboardingProgress(state => state.getCompletionPercentage());

  const handleNextClick = () => {
    navigate('/technical-section/projects');
  };

  return (
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
        height: 'calc(100% - 64px)' // Subtract header height
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
          Onboarding Guide
        </Typography>
        
        <Box sx={{ px: 1, flex: 1, overflowY: 'auto' }}>
          {sections.map((item) => {
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
                  mb: 0.5,
                  py: 1.5,
                  borderRadius: 2,
                  justifyContent: 'flex-start',
                  color: isSelected ? 'white' : 'text.primary',
                  backgroundColor: isSelected ? 'primary.main' : 'transparent',
                  transition: 'all 0.2s ease-in-out',
                  transform: isSelected ? 'scale(1.02)' : 'none',
                  boxShadow: isSelected ? '0 2px 8px rgba(0, 0, 0, 0.15)' : 'none',
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

        {/* Next button at the bottom */}
        <Box sx={{ p: 2, borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={handleNextClick}
            sx={{
              py: 1.5,
              borderRadius: 2,
              boxShadow: 'none',
              '&:hover': {
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
              }
            }}
          >
            Start Technical Assessment
          </Button>
          {completionPercentage < 100 && (
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: 'block', textAlign: 'center', mt: 1 }}
            >
              Progress: {Math.round(completionPercentage)}% completed
            </Typography>
          )}
        </Box>
      </Box>
    </Drawer>
  );
};