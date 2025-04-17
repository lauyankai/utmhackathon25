import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  useTheme, 
  useMediaQuery,
  Paper
} from '@mui/material';
import { 
  ArrowForward as ArrowForwardIcon,
  Groups as GroupsIcon,
  Computer as ComputerIcon, 
  Devices as DevicesIcon,
  Lightbulb as LightbulbIcon,
  Code as CodeIcon
} from '@mui/icons-material';
import { useScrollCompletion } from '../../hooks/useScrollCompletion';

export const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Mark this section as completed when viewed
  useScrollCompletion('welcome');

  return (
    <Container maxWidth="lg" sx={{ height: '100%' }}>
      <Box 
        sx={{
          minHeight: 'calc(100vh - 200px)',
          display: 'flex',
          alignItems: 'center',
          py: 4
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography 
                variant="h3" 
                component="h1" 
                fontWeight="bold"
                sx={{ mb: 2 }}
              >
                Welcome to NexGen
              </Typography>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4, 
                  color: 'text.secondary',
                  fontWeight: 'medium'
                }}
              >
                Your journey begins here
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/company-culture')}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  background: 'linear-gradient(90deg, #2563eb 0%, #0ea5e9 100%)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #1d4ed8 0%, #0284c7 100%)',
                  }
                }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>
          
          {/* Right Side - Illustration */}
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                textAlign: 'center',
                display: isMobile ? 'none' : 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Paper elevation={4} sx={{ 
                p: 4, 
                borderRadius: 3, 
                background: 'linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 100%)',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 3,
                maxWidth: 400
              }}>
                {[
                  { icon: <ComputerIcon sx={{ fontSize: 50, color: '#2563eb' }} />, label: "Development" },
                  { icon: <GroupsIcon sx={{ fontSize: 50, color: '#0ea5e9' }} />, label: "Teamwork" },
                  { icon: <LightbulbIcon sx={{ fontSize: 50, color: '#3b82f6' }} />, label: "Innovation" },
                  { icon: <CodeIcon sx={{ fontSize: 50, color: '#0284c7' }} />, label: "Solutions" }
                ].map((item, index) => (
                  <Box key={index} sx={{ textAlign: 'center' }}>
                    {item.icon}
                    <Typography variant="body2" sx={{ mt: 1, fontWeight: 'medium' }}>
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};