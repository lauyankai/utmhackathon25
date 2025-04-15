import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Work as WorkIcon, Timeline as TimelineIcon, School as SchoolIcon, Star as StarIcon } from '@mui/icons-material';

export const RoleOverview: React.FC = () => {
  const responsibilities = [
    'Develop and maintain high-quality software solutions',
    'Collaborate with cross-functional teams',
    'Participate in code reviews and technical discussions',
    'Write clean, maintainable, and efficient code'
  ];

  const growthPath = [
    'Junior Developer → Mid-level Developer',
    'Mid-level Developer → Senior Developer',
    'Senior Developer → Tech Lead',
    'Tech Lead → Engineering Manager'
  ];

  const expectations = [
    'Meet project deadlines and quality standards',
    'Stay updated with latest technologies',
    'Mentor junior team members',
    'Contribute to team technical decisions'
  ];

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Your Role at Our Company
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <WorkIcon sx={{ mr: 1 }} />
              Key Responsibilities
            </Typography>
            <List>
              {responsibilities.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <StarIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <TimelineIcon sx={{ mr: 1 }} />
              Career Growth Path
            </Typography>
            <List>
              {growthPath.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <TimelineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <SchoolIcon sx={{ mr: 1 }} />
              Performance Expectations
            </Typography>
            <Grid container spacing={2}>
              {expectations.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="body1">{item}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};