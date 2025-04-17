import React, { useState } from 'react';
import { Drawer, Box, Typography, List, ListItem, Button } from '@mui/material';
import { 
  PlayArrow as PlayIcon,
  Business as CompanyIcon,
  WbSunny as DailyLifeIcon,
  Work as RoleIcon,
  Terminal as TechStackIcon,
  Build as ToolsIcon,
  Security as SecurityIcon,
  Group as TeamIcon,
  Domain as DepartmentIcon,
  QuestionAnswer as FAQIcon,
  Code as TechnicalIcon,
  CheckCircle
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useOnboardingProgress } from '../../store/onboardingProgress';

const drawerWidth = 280;

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const canAccessSection = useOnboardingProgress(state => state.canAccessSection);

  const sections = [
    { path: '/welcome-video', label: 'Welcome Video', icon: <PlayIcon /> },
    { path: '/company-culture', label: 'Company Culture', icon: <CompanyIcon /> },
    { path: '/daily-life', label: 'Daily Life', icon: <DailyLifeIcon /> },
    { path: '/role-overview', label: 'Role Overview', icon: <RoleIcon /> },
    { path: '/tech-stack', label: 'Tech Stack', icon: <TechStackIcon /> },
    { path: '/tools', label: 'Tools', icon: <ToolsIcon /> },
    { path: '/security', label: 'Security', icon: <SecurityIcon /> },
    { path: '/team', label: 'Team', icon: <TeamIcon /> },
    { path: '/department', label: 'Department', icon: <DepartmentIcon /> },
    { path: '/faq', label: 'FAQ', icon: <FAQIcon /> },
    { path: '/technical-section', label: 'Technical Section', icon: <TechnicalIcon /> },
  ];

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
          Onboarding Journey
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
      </Box>
    </Drawer>
  );
};