import React from 'react';
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

export const TechnicalIntro: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: 'background.default',
      background: 'linear-gradient(145deg, #f6f8fc 0%, #ffffff 100%)'
    }}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ height: '100%' }}>
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
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <Typography 
                variant="h3" 
                component="h1" 
                fontWeight="bold"
                sx={{ mb: 2 }}
              >
                Technical Assessment
              </Typography>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4, 
                  color: 'text.secondary',
                  fontWeight: 'medium'
                }}
              >
                Showcase your skills and find your perfect project
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ mb: 4 }}
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
                  '&:hover': {
                    background: 'linear-gradient(90deg, #1d4ed8 0%, #0284c7 100%)',
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
                background: 'linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 100%)',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 3,
                maxWidth: 400
              }}>
                {[
                  { icon: <AssessmentIcon sx={{ fontSize: 50, color: '#2563eb' }} />, label: "Skill Analysis" },
                  { icon: <ProjectIcon sx={{ fontSize: 50, color: '#0ea5e9' }} />, label: "Projects" },
                  { icon: <CodeIcon sx={{ fontSize: 50, color: '#3b82f6' }} />, label: "Coding Tasks" },
                  { icon: <DashboardIcon sx={{ fontSize: 50, color: '#0284c7' }} />, label: "Performance" }
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
          </Box>
        </Box>
      </Container>
    </Box>
  );
}; 