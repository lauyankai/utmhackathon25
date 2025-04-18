import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';

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
              Company Onboarding Assistant
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Wello! © {new Date().getFullYear()} All rights reserved.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};