import React from 'react';
import { useScrollCompletion } from '../../hooks/useScrollCompletion';
import { Box, Typography, Card, CardContent, Paper, List, ListItem, ListItemIcon,
  ListItemText, Divider } from '@mui/material';
import {
  Schedule as ScheduleIcon, Group as TeamIcon,
  Coffee as BreakIcon, Laptop as WorkspaceIcon
} from '@mui/icons-material';

export const DailyLife: React.FC = () => {
  useScrollCompletion('daily-life');

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        A Day in the Life
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Get to know what it's like to work with us on a daily basis
      </Typography>

      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box sx={{ display: 'flex', gap: 3, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
          <Card sx={{ flex: 1, minWidth: { xs: '100%', md: '0' } }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Work Schedule
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <ScheduleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Flexible Hours"
                    secondary="Core hours 10 AM - 4 PM with flexible start/end times"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <TeamIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Team Meetings"
                    secondary="Daily stand-ups and weekly team sync-ups"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card sx={{ flex: 1, minWidth: { xs: '100%', md: '0' } }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Workspace
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <WorkspaceIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Modern Office"
                    secondary="Open workspace with quiet zones and meeting rooms"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <BreakIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Break Areas"
                    secondary="Well-stocked kitchen and comfortable lounge spaces"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Box>

        <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Work-Life Balance
            </Typography>
            <Typography paragraph>
              We believe in maintaining a healthy work-life balance. Our flexible work arrangements, 
              generous time-off policy, and focus on results over hours help ensure you can perform 
              your best while maintaining personal commitments.
            </Typography>
            <Typography>
              Regular team social events, wellness programs, and professional development 
              opportunities are just some of the ways we support our employees' growth and well-being.
            </Typography>
          </Paper>
      </Box>
    </Box>
  );
};