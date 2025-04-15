import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Schedule as ScheduleIcon,
  Group as TeamIcon,
  Coffee as BreakIcon,
  Laptop as WorkspaceIcon
} from '@mui/icons-material';

export const DailyLife: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        A Day in the Life
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Get to know what it's like to work with us on a daily basis
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card>
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
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
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
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};