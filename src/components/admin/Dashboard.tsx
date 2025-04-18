import React from 'react';
import { Box, Typography, Grid, Paper, Card, CardContent, LinearProgress } from '@mui/material';
import { People as PeopleIcon, Timeline as TimelineIcon, CheckCircle as CheckCircleIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';

export const Dashboard: React.FC = () => {
  const metrics = [
    {
      title: 'Active Onboarding',
      value: '24',
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      progress: 65
    },
    {
      title: 'Completion Rate',
      value: '78%',
      icon: <CheckCircleIcon sx={{ fontSize: 40 }} />,
      progress: 78
    },
    {
      title: 'Avg. Time to Complete',
      value: '5.2 days',
      icon: <TimelineIcon sx={{ fontSize: 40 }} />,
      progress: 82
    },
    {
      title: 'Engagement Score',
      value: '4.5/5',
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      progress: 90
    }
  ];

  return (
    <Box sx={{ 
      width: '100%',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      flex: 1
    }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>
      
      <Grid container spacing={3} sx={{ width: '100%', m: 0 }}>
        {metrics.map((metric, index) => (
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
                    {metric.title}
                  </Typography>
                  <Typography variant="h4" color="primary.main">
                    {metric.value}
                  </Typography>
                  <Box sx={{ mt: 'auto' }}>
                    <LinearProgress 
                      variant="determinate" 
                      value={metric.progress}
                      sx={{ 
                        height: 8, 
                        borderRadius: 4,
                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 4
                        }
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ width: '100%', m: 0 }}>
        <Grid item xs={12} md={8}>
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
              Recent Activity
            </Typography>
            {/* TODO: Add activity timeline component */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
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
              Quick Stats
            </Typography>
            {/* TODO: Add quick stats component */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};