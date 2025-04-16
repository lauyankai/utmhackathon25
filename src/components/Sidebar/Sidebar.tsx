import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

interface SidebarProps {
  completedSections: Set<string>;
}

export const Sidebar: React.FC<SidebarProps> = ({ completedSections }) => {
  const sections = [
    { path: '/welcome-video', label: 'Welcome Video' },
    { path: '/company-culture', label: 'Company Culture' },
    { path: '/daily-life', label: 'Daily Life' },
    { path: '/role-overview', label: 'Role Overview' },
    { path: '/tech-stack', label: 'Tech Stack' },
    { path: '/tools', label: 'Tools' },
    { path: '/security', label: 'Security' },
    { path: '/team', label: 'Team' },
    { path: '/department', label: 'Department' },
    { path: '/faq', label: 'FAQ' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          mt: 8,
        },
      }}
    >
      <List>
        {sections.map(({ path, label }) => (
          <ListItem key={path}>
            <ListItemText primary={label} />
            {completedSections.has(path) && (
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
            )}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}; 