import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Avatar, Divider } from '@mui/material';
import { Business as BusinessIcon, Group as GroupIcon, Code as CodeIcon, Support as SupportIcon } from '@mui/icons-material';

export const Department: React.FC = () => {
  const departments = [
    {
      name: 'Engineering',
      icon: <CodeIcon />,
      description: 'Responsible for product development and technical innovation',
      teams: [
        'Frontend Development',
        'Backend Development',
        'DevOps',
        'Quality Assurance'
      ],
      responsibilities: [
        'Product development and maintenance',
        'Technical architecture design',
        'Code quality and best practices',
        'Performance optimization'
      ]
    },
    {
      name: 'Product Management',
      icon: <BusinessIcon />,
      description: 'Drives product strategy and roadmap',
      teams: [
        'Product Strategy',
        'User Experience',
        'Market Research',
        'Product Analytics'
      ],
      responsibilities: [
        'Product vision and strategy',
        'Feature prioritization',
        'User research and feedback',
        'Market analysis'
      ]
    },
    {
      name: 'Customer Success',
      icon: <SupportIcon />,
      description: 'Ensures customer satisfaction and support',
      teams: [
        'Customer Support',
        'Account Management',
        'Training',
        'Documentation'
      ],
      responsibilities: [
        'Customer onboarding',
        'Technical support',
        'Customer feedback collection',
        'Documentation maintenance'
      ]
    },
    {
      name: 'Operations',
      icon: <GroupIcon />,
      description: 'Manages internal processes and resources',
      teams: [
        'Human Resources',
        'Finance',
        'Legal',
        'Office Management'
      ],
      responsibilities: [
        'Resource allocation',
        'Budget management',
        'Compliance oversight',
        'Facility management'
      ]
    }
  ];

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Department Overview
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Understanding our organizational structure helps you collaborate effectively across teams.
        Here's an overview of our key departments and their responsibilities.
      </Typography>

      <Grid container spacing={4}>
        {departments.map((dept, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={2} sx={{ height: '100%' }}>
              <Box sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      width: 48,
                      height: 48,
                      mr: 2
                    }}
                  >
                    {dept.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{dept.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {dept.description}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>
                          Teams
                        </Typography>
                        {dept.teams.map((team, teamIndex) => (
                          <Typography
                            key={teamIndex}
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 0.5 }}
                          >
                            • {team}
                          </Typography>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>
                          Key Responsibilities
                        </Typography>
                        {dept.responsibilities.map((resp, respIndex) => (
                          <Typography
                            key={respIndex}
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 0.5 }}
                          >
                            • {resp}
                          </Typography>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};