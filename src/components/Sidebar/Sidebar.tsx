import React from 'react';
import { Drawer, Box, Typography, Button, Tooltip } from '@mui/material';
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
  Lock as LockIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Analytics as AnalyticsIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useOnboardingProgress } from '../../store/onboardingProgress';

const drawerWidth = 280;

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const canAccessSection = useOnboardingProgress(state => state.canAccessSection);
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  const adminSections = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { path: '/admin/users', label: 'User Management', icon: <PeopleIcon /> },
    { path: '/admin/analytics', label: 'Analytics', icon: <AnalyticsIcon /> }
  ];

  const onboardingSections = [
    { path: '/welcome-video', label: 'Welcome Video', icon: <PlayIcon /> },
    { path: '/company-culture', label: 'Company Culture', icon: <CompanyIcon /> },
    { path: '/daily-life', label: 'Daily Life', icon: <DailyLifeIcon /> },
    { path: '/role-overview', label: 'Role Overview', icon: <RoleIcon /> },
    { path: '/tech-stack', label: 'Tech Stack', icon: <TechStackIcon /> },
    { path: '/tools', label: 'Tools', icon: <ToolsIcon /> },
    { path: '/security', label: 'Security', icon: <SecurityIcon /> },
    { path: '/team', label: 'Team', icon: <TeamIcon /> },
    { path: '/department', label: 'Department', icon: <DepartmentIcon /> },
    { path: '/faq', label: 'FAQ', icon: <FAQIcon /> }
  ];

  const sections = isAdmin ? adminSections : onboardingSections;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: 'background.paper',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        },
      }}
    >
      <Box sx={{ overflow: 'auto', mt: 8 }}>
        <Box sx={{ px: 2, py: 2 }}>
          <Typography variant="h6" color="primary">
            {isAdmin ? 'Admin Panel' : 'Onboarding Progress'}
          </Typography>
        </Box>
        <Box sx={{ px: 2 }}>
          {sections.map((item) => {
            const isSelected = location.pathname === item.path;
            const canAccess = isAdmin ? true : canAccessSection(item.path.substring(1));

            return (
              <Tooltip 
                key={item.label}
                title={!canAccess && !isAdmin ? "Complete previous sections first" : ""}
                placement="right"
              >
                <span>
                  <Button
                    onClick={() => canAccess && navigate(item.path)}
                    fullWidth
                    disabled={!canAccess && !isAdmin}
                    startIcon={
                      <Box
                        component="span"
                        sx={{
                          color: isSelected ? 'white' : canAccess ? 'primary.main' : 'text.disabled',
                          display: 'flex',
                          minWidth: 32
                        }}
                      >
                        {!canAccess && !isAdmin ? <LockIcon /> : item.icon}
                      </Box>
                    }
                    sx={{
                      justifyContent: 'flex-start',
                      px: 2,
                      py: 1,
                      mb: 1,
                      borderRadius: 2,
                      backgroundColor: isSelected ? 'primary.main' : 'transparent',
                      color: isSelected ? 'white' : 'text.primary',
                      '&:hover': {
                        backgroundColor: isSelected ? 'primary.dark' : 'action.hover',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </span>
              </Tooltip>
            );
          })}
        </Box>
      </Box>
    </Drawer>
  );
};