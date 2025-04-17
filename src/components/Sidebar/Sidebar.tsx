import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { CheckCircle, Lock } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useOnboardingProgress } from '../../store/onboardingProgress';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const canAccessSection = useOnboardingProgress(state => state.canAccessSection);
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

  const handleNavigation = (path: string, isAccessible: boolean) => {
    if (!isAccessible) {
      // Don't navigate if section is not accessible
      return;
    }
    const sectionId = path.substring(1);
    const currentSectionId = location.pathname.substring(1);
    
    // Only allow navigation to the next section if current section is completed
    const currentSection = useOnboardingProgress.getState().sections[currentSectionId];
    const targetSection = useOnboardingProgress.getState().sections[sectionId];
    
    if (currentSection && targetSection && targetSection.order > currentSection.order && !currentSection.completed) {
      return;
    }
    
    navigate(path);
  };

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
        {sections.map(({ path, label }) => {
          const sectionId = path.substring(1);
          const isAccessible = canAccessSection(sectionId);
          const isActive = location.pathname === path;

          return (
            <ListItem key={path} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(path, isAccessible)}
                disabled={!isAccessible}
                selected={isActive}
                sx={{
                  '&.Mui-disabled': {
                    opacity: 0.6,
                    color: 'text.disabled',
                    pointerEvents: 'none',
                  },
                }}
              >
                <ListItemText primary={label} />
                {!isAccessible ? (
                  <ListItemIcon sx={{ minWidth: 'auto' }}>
                    <Lock fontSize="small" color="disabled" />
                  </ListItemIcon>
                ) : isActive && (
                  <ListItemIcon sx={{ minWidth: 'auto' }}>
                    <CheckCircle fontSize="small" color="success" />
                  </ListItemIcon>
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};