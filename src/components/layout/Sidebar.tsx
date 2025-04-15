import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
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
          backgroundColor: '#f5f5f5',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)'
        }
      }}
    >
      <Box sx={{ overflow: 'auto', mt: 8 }}>
        <Typography variant="h6" sx={{ px: 3, py: 2, color: 'primary.main' }}>
          Onboarding Guide
        </Typography>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              selected={location.pathname === item.path}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.dark'
                  },
                  '& .MuiListItemIcon-root': {
                    color: 'white'
                  }
                },
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                },
                mx: 1,
                borderRadius: 1
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: location.pathname === item.path ? 'white' : 'primary.main'
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};