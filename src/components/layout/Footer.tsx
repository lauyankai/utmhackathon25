import React from 'react';
import { Box, Container, Typography, Link, Stack, Divider } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        backgroundColor: 'white'
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 600, mb: 1 }}>
              Company Onboarding Portal
            </Typography>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </Typography>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              variant="body2"
              sx={{ fontWeight: 500 }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              variant="body2"
              sx={{ fontWeight: 500 }}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              variant="body2"
              sx={{ fontWeight: 500 }}
            >
              Contact Support
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};