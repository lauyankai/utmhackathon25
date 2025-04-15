import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Alert } from '@mui/material';
import { Security as SecurityIcon, Lock as LockIcon, Shield as ShieldIcon, VerifiedUser as VerifiedUserIcon } from '@mui/icons-material';

export const Security: React.FC = () => {
  const securityPolicies = [
    'All code must go through security review before deployment',
    'Use approved encryption methods for sensitive data',
    'Regular security training and updates are mandatory',
    'Follow the principle of least privilege'
  ];

  const dataProtection = [
    'Never store sensitive data in plaintext',
    'Use environment variables for credentials',
    'Implement proper input validation',
    'Regular security audits and penetration testing'
  ];

  const compliance = [
    'GDPR compliance for handling user data',
    'SOC 2 Type II certification',
    'Regular compliance training',
    'Documentation of all security processes'
  ];

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Security & Compliance
      </Typography>

      <Alert severity="info" sx={{ mb: 4 }}>
        Security is a top priority at our company. Please familiarize yourself with these guidelines and policies.
      </Alert>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ height: '100%', p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <SecurityIcon sx={{ mr: 1 }} />
              Security Policies
            </Typography>
            <List>
              {securityPolicies.map((policy, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <LockIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={policy} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ height: '100%', p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <ShieldIcon sx={{ mr: 1 }} />
              Data Protection
            </Typography>
            <List>
              {dataProtection.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <ShieldIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ height: '100%', p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedUserIcon sx={{ mr: 1 }} />
              Compliance
            </Typography>
            <List>
              {compliance.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <VerifiedUserIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Important Security Resources
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      Security Documentation
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Access detailed security guidelines and best practices
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      Incident Response
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Learn about our security incident response procedures
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      Security Training
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Access security awareness training materials
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      Compliance Certificates
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      View our current compliance certifications
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};