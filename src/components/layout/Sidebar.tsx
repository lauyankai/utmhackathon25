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
  QuestionAnswer as FAQIcon
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 280;

const menuItems = [
  { text: 'Welcome Video', icon: <VideoIcon />, path: '/welcome-video' },
  { text: 'Company Culture', icon: <CultureIcon />, path: '/company-culture' },
  { text: 'Daily Life', icon: <DailyLifeIcon />, path: '/daily-life' },
  { text: 'Your Role', icon: <RoleIcon />, path: '/role-overview' },
  { text: 'Tech Stack', icon: <TechStackIcon />, path: '/tech-stack' },
  { text: 'Tools Overview', icon: <ToolsIcon />, path: '/tools' },
  { text: 'Security & Compliance', icon: <SecurityIcon />, path: '/security' },
  { text: 'Meet the Team', icon: <TeamIcon />, path: '/team' },
  { text: 'Department Overview', icon: <DepartmentIcon />, path: '/department' },
  { text: 'FAQ', icon: <FAQIcon />, path: '/faq' }
];

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
      <Box sx={{ overflow: 'auto', mt: 8 }}>
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
        <Box sx={{ px: 1 }}>
          {menuItems.map((item) => {
            const isSelected = location.pathname === item.path;
            return (
              <Button
                key={item.text}
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
                {item.text}
              </Button>
            );
          })}
        </Box>
      </Box>
    </Drawer>
  );
};