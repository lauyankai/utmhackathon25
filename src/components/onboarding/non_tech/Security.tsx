import React from 'react';
import { Box, Typography, Paper, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Alert } from '@mui/material';
import { Security as SecurityIcon, Lock as LockIcon, Shield as ShieldIcon, VerifiedUser as VerifiedUserIcon } from '@mui/icons-material';
import { useScrollCompletion } from '../../../hooks/useScrollCompletion';

export const Security: React.FC = () => {
  useScrollCompletion('security');

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
        Security is a top priority at our company. Please familiarise yourself with these guidelines and policies.
      </Alert>

      <Box sx={{ display: 'flex', gap: 3, mb: 4, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
        <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: 'primary.main' }}>
              <SecurityIcon sx={{ mr: 1, fontSize: 40 }} />
              <Typography variant="h6">Security Policies</Typography>
            </Box>
            <List>
              {securityPolicies.map((policy, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemIcon>
                    <LockIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={policy} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: 'primary.main' }}>
              <ShieldIcon sx={{ mr: 1, fontSize: 40 }} />
              <Typography variant="h6">Data Protection</Typography>
            </Box>
            <List>
              {dataProtection.map((item, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemIcon>
                    <ShieldIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: 'primary.main' }}>
              <VerifiedUserIcon sx={{ mr: 1, fontSize: 40 }} />
              <Typography variant="h6">Compliance</Typography>
            </Box>
            <List>
              {compliance.map((item, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemIcon>
                    <VerifiedUserIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>

      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Important Security Resources
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Card variant="outlined" sx={{ flex: '1 1 250px' }}>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Security Documentation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Access detailed security guidelines and best practices
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ flex: '1 1 250px' }}>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Incident Response
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn about our security incident response procedures
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ flex: '1 1 250px' }}>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Security Training
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Access security awareness training materials
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ flex: '1 1 250px' }}>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Compliance Certificates
              </Typography>
              <Typography variant="body2" color="text.secondary">
                View our current compliance certifications
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Paper>
    </Box>
  );
};