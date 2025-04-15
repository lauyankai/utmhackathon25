import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, Avatar, Chip, IconButton, Stack } from '@mui/material';
import { Email as EmailIcon, LinkedIn as LinkedInIcon, GitHub as GitHubIcon } from '@mui/icons-material';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Engineering Director',
      expertise: ['Technical Leadership', 'System Architecture', 'Team Management'],
      email: 'sarah.j@company.com',
      linkedin: 'linkedin.com/in/sarahj',
      github: 'github.com/sarahj',
      avatar: '🎯'
    },
    {
      name: 'Michael Chen',
      role: 'Senior Software Engineer',
      expertise: ['Frontend Development', 'UI/UX Design', 'Performance Optimization'],
      email: 'michael.c@company.com',
      linkedin: 'linkedin.com/in/michaelc',
      github: 'github.com/michaelc',
      avatar: '💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Backend Team Lead',
      expertise: ['API Design', 'Database Architecture', 'Cloud Infrastructure'],
      email: 'emily.r@company.com',
      linkedin: 'linkedin.com/in/emilyr',
      github: 'github.com/emilyr',
      avatar: '🔧'
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      expertise: ['CI/CD', 'Infrastructure Automation', 'Security'],
      email: 'david.k@company.com',
      linkedin: 'linkedin.com/in/davidk',
      github: 'github.com/davidk',
      avatar: '🛠️'
    }
  ];

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Meet Your Team
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Get to know the key members of our engineering team who will be working with you
        and supporting your journey.
      </Typography>

      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card elevation={2}>
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      fontSize: '2rem',
                      bgcolor: 'primary.main',
                      margin: '0 auto'
                    }}
                  >
                    {member.avatar}
                  </Avatar>
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {member.role}
                  </Typography>
                </Box>

                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                  {member.expertise.map((skill, skillIndex) => (
                    <Chip
                      key={skillIndex}
                      label={skill}
                      size="small"
                      variant="outlined"
                      sx={{ margin: '2px' }}
                    />
                  ))}
                </Stack>

                <Stack direction="row" spacing={1} justifyContent="center">
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => window.open(`mailto:${member.email}`)}
                  >
                    <EmailIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => window.open(`https://${member.linkedin}`, '_blank')}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => window.open(`https://${member.github}`, '_blank')}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};