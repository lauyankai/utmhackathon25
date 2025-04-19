import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  useTheme, 
  useMediaQuery,
  Paper,
  CssBaseline
} from '@mui/material';

import { 
  ArrowForward as ArrowForwardIcon,
  Code as CodeIcon,
  Assessment as AssessmentIcon, 
  WorkOutline as ProjectIcon,
  Dashboard as DashboardIcon
} from '@mui/icons-material';

// Import background image
import techBackground from '../../../assets/tech2.jpeg';

export const TechnicalIntro: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Add effect to ensure body takes full height
  useEffect(() => {
    // Store original styles to restore later
    const originalStyles = {
      html: document.documentElement.style.cssText,
      body: document.body.style.cssText
    };
    
    // Set html and body to full height
    document.documentElement.style.cssText = 'height: 100%; margin: 0; padding: 0; overflow-x: hidden;';
    document.body.style.cssText = 'height: 100%; margin: 0; padding: 0; overflow-x: hidden;';
    
    return () => {
      // Restore original styles on unmount
      document.documentElement.style.cssText = originalStyles.html;
      document.body.style.cssText = originalStyles.body;
    };
  }, []);
  
  return (
    <Box sx={{ 
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      overflow: 'auto',
      background: 'black' // Fallback color while image loads
    }}>
      {/* Background image and overlay */}
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0
      }}>
        {/* Background image */}
        <Box
          component="img"
          src={techBackground}
          alt="Technical background"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        
        {/* Dark overlay */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 30, 0.75)', // Dark blue overlay for better readability
          backdropFilter: 'blur(2px)'
        }} />
      </Box>
      
      <CssBaseline />
      <Container maxWidth="lg" sx={{ 
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1, // Position above background
        py: 4
      }}>
        <Box 
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 4
          }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              width: '100%',
              gap: 4,
              alignItems: 'center'
            }}
          >
            {/* Left Side - Content */}
            <Box 
              sx={{ 
                flex: 1, 
                textAlign: { xs: 'center', md: 'left' },
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(8px)',
                p: 4,
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
              }}
            >
              <Typography 
                variant="h3" 
                component="h1" 
                fontWeight="bold"
                sx={{ mb: 2, color: 'white' }}
              >
                Technical Assessment
              </Typography>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4, 
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: 'medium'
                }}
              >
                Showcase your skills and find your perfect project
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)' }}
              >
                In this section, you'll have the opportunity to assess your technical skills, 
                explore available projects, and track your progress. Our goal is to match you 
                with projects that align with your expertise and interests.
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => {
                  // Mark the technical section as started
                  localStorage.setItem('technicalSectionStarted', 'true');
                  // We need to manually trigger the storage event for the same window
                  window.dispatchEvent(new Event('storage'));
                  navigate('/technical-section/skill-analysis');
                }}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  background: 'linear-gradient(90deg, #2563eb 0%, #0ea5e9 100%)',
                  boxShadow: '0 4px 12px rgba(2, 132, 199, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #1d4ed8 0%, #0284c7 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(2, 132, 199, 0.6)',
                  }
                }}
              >
                Start Assessment
              </Button>
            </Box>
            
            {/* Right Side - Illustration */}
            <Box 
              sx={{ 
                flex: 1,
                display: isMobile ? 'none' : 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Paper elevation={4} sx={{ 
                p: 4, 
                borderRadius: 3, 
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(12px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 3,
                maxWidth: 400,
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.25)'
              }}>
                {[
                  { icon: <AssessmentIcon sx={{ fontSize: 50, color: '#38bdf8' }} />, label: "Skill Analysis" },
                  { icon: <ProjectIcon sx={{ fontSize: 50, color: '#818cf8' }} />, label: "Projects" },
                  { icon: <CodeIcon sx={{ fontSize: 50, color: '#60a5fa' }} />, label: "Coding Tasks" },
                  { icon: <DashboardIcon sx={{ fontSize: 50, color: '#a78bfa' }} />, label: "Performance" }
                ].map((item, index) => (
                  <Box key={index} sx={{ textAlign: 'center' }}>
                    {item.icon}
                    <Typography variant="body2" sx={{ mt: 1, fontWeight: 'medium', color: 'white' }}>
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Paper>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}; 