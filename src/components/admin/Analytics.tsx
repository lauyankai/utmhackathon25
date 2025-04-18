import React from 'react';
import { Box, Typography, Grid, Paper, Card, CardContent } from '@mui/material';
import { Assessment as AssessmentIcon, Speed as SpeedIcon, Group as GroupIcon, Schedule as ScheduleIcon } from '@mui/icons-material';

export const Analytics: React.FC = () => {
  const analyticsData = {
    onboardingMetrics: [
      { label: 'Average Completion Time', value: '5.2 days', icon: <ScheduleIcon /> },
      { label: 'Completion Rate', value: '92%', icon: <AssessmentIcon /> },
      { label: 'Active Users', value: '156', icon: <GroupIcon /> },
      { label: 'Satisfaction Score', value: '4.8/5', icon: <SpeedIcon /> }
    ],
    topModules: [
      { name: 'Security Training', completion: 98 },
      { name: 'Company Culture', completion: 95 },
      { name: 'Role Overview', completion: 92 },
      { name: 'Tech Stack', completion: 88 }
    ],
    departmentProgress: [
      { name: 'Engineering', completed: 45, total: 50 },
      { name: 'Marketing', completed: 28, total: 30 },
      { name: 'Sales', completed: 35, total: 40 },
      { name: 'HR', completed: 15, total: 15 }
    ]
  };

  return (
    <Box sx={{ 
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Onboarding Analytics
      </Typography>

      <Grid container spacing={3} sx={{ width: '100%', m: 0 }}>
        {analyticsData.onboardingMetrics.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper 
              elevation={2}
              sx={{
                height: '100%',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) => theme.shadows[4]
                }
              }}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ color: 'primary.main' }}>
                    {metric.icon}
                  </Box>
                  <Typography variant="h6">
                    {metric.label}
                  </Typography>
                  <Typography variant="h4" color="primary.main">
                    {metric.value}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ width: '100%', m: 0, flex: 1 }}>
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={2} 
            sx={{ 
              p: 3,
              height: '100%',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: (theme) => theme.shadows[4]
              }
            }}
          >
            <Typography variant="h6" gutterBottom>
              Top Performing Modules
            </Typography>
            {analyticsData.topModules.map((module, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle1">{module.name}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      flexGrow: 1,
                      height: 8,
                      bgcolor: 'background.default',
                      borderRadius: 1,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <Box
                      sx={{
                        width: `${module.completion}%`,
                        height: '100%',
                        bgcolor: 'primary.main',
                        position: 'absolute'
                      }}
                    />
                  </Box>
                  <Typography variant="body2">{`${module.completion}%`}</Typography>
                </Box>
              </Box>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={2} 
            sx={{ 
              p: 3,
              height: '100%',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: (theme) => theme.shadows[4]
              }
            }}
          >
            <Typography variant="h6" gutterBottom>
              Department Progress
            </Typography>
            {analyticsData.departmentProgress.map((dept, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle1">
                  {dept.name} ({dept.completed}/{dept.total})
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      flexGrow: 1,
                      height: 8,
                      bgcolor: 'background.default',
                      borderRadius: 1,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <Box
                      sx={{
                        width: `${(dept.completed / dept.total) * 100}%`,
                        height: '100%',
                        bgcolor: 'primary.main',
                        position: 'absolute'
                      }}
                    />
                  </Box>
                  <Typography variant="body2">
                    {`${Math.round((dept.completed / dept.total) * 100)}%`}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};