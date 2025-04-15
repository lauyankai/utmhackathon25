import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, CardHeader, IconButton, Tooltip } from '@mui/material';
import { Code as CodeIcon, Build as BuildIcon, Terminal as TerminalIcon, BugReport as BugIcon, Cloud as CloudIcon, Storage as StorageIcon } from '@mui/icons-material';

export const Tools: React.FC = () => {
  const developmentTools = [
    {
      category: 'IDEs & Editors',
      icon: <CodeIcon />,
      tools: [
        { name: 'Visual Studio Code', description: 'Primary code editor with extensive plugin support' },
        { name: 'IntelliJ IDEA', description: 'Java development environment' },
        { name: 'WebStorm', description: 'Specialized JavaScript IDE' }
      ]
    },
    {
      category: 'Version Control',
      icon: <BuildIcon />,
      tools: [
        { name: 'Git', description: 'Distributed version control system' },
        { name: 'GitHub', description: 'Code hosting and collaboration platform' },
        { name: 'GitLab', description: 'DevOps lifecycle tool' }
      ]
    },
    {
      category: 'CLI Tools',
      icon: <TerminalIcon />,
      tools: [
        { name: 'npm/yarn', description: 'Package managers for JavaScript' },
        { name: 'Docker CLI', description: 'Container management' },
        { name: 'AWS CLI', description: 'Amazon Web Services command-line tool' }
      ]
    },
    {
      category: 'Testing & Debugging',
      icon: <BugIcon />,
      tools: [
        { name: 'Jest', description: 'JavaScript testing framework' },
        { name: 'Chrome DevTools', description: 'Browser debugging tools' },
        { name: 'Postman', description: 'API development and testing' }
      ]
    },
    {
      category: 'Cloud Services',
      icon: <CloudIcon />,
      tools: [
        { name: 'AWS Console', description: 'Cloud infrastructure management' },
        { name: 'Cloudflare', description: 'CDN and security services' },
        { name: 'Vercel', description: 'Frontend deployment platform' }
      ]
    },
    {
      category: 'Monitoring & Analytics',
      icon: <StorageIcon />,
      tools: [
        { name: 'Grafana', description: 'Metrics visualization and monitoring' },
        { name: 'Sentry', description: 'Error tracking and performance monitoring' },
        { name: 'Google Analytics', description: 'User behavior analytics' }
      ]
    }
  ];

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Development Tools & Resources
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        We use a variety of tools to streamline our development process and ensure high-quality deliverables.
        Here's an overview of the key tools you'll be working with:
      </Typography>

      <Grid container spacing={3}>
        {developmentTools.map((section, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={2} sx={{ height: '100%' }}>
              <CardHeader
                avatar={
                  <IconButton size="large" color="primary" sx={{ bgcolor: 'primary.light', color: 'white' }}>
                    {section.icon}
                  </IconButton>
                }
                title={
                  <Typography variant="h6" component="h2">
                    {section.category}
                  </Typography>
                }
              />
              <CardContent>
                <Grid container spacing={2}>
                  {section.tools.map((tool, toolIndex) => (
                    <Grid item xs={12} key={toolIndex}>
                      <Card variant="outlined">
                        <CardContent>
                          <Typography variant="subtitle1" gutterBottom>
                            {tool.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {tool.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};