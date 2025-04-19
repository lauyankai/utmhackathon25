import React from 'react';
import { Box, Typography, Paper, Stack, Chip, LinearProgress, Rating, Divider } from '@mui/material';
import {
  Analytics as AnalyticsIcon,
  Group as GroupIcon,
  TrendingUp as TrendingUpIcon,
  Psychology as PsychologyIcon,
  WorkOutline as WorkOutlineIcon,
  Architecture as ArchitectureIcon,
  Speed as SpeedIcon,
} from '@mui/icons-material';

export const Performance: React.FC = () => {
  const examplePerformance = {
    projectDetails: {
      title: 'Product Catalog Service',
      projectTitle: 'Enterprise E-Commerce Platform',
      department: 'Platform Engineering',
      submittedAt: '2024-03-15T10:30:00Z',
      status: 'Analyzed',
    },
    technicalAnalysis: {
      overallScore: 92,
      categories: [
        {
          name: 'Code Quality',
          score: 95,
          feedback: [
            'Excellent code organization and modularity',
            'Consistent coding style and naming conventions',
            'Good use of design patterns',
            'Comprehensive error handling',
          ],
        },
        {
          name: 'Architecture',
          score: 90,
          feedback: [
            'Well-structured microservice architecture',
            'Effective use of MongoDB for data modeling',
            'Good API design following REST principles',
            'Room for improvement in caching strategy',
          ],
        },
        {
          name: 'Testing',
          score: 88,
          feedback: [
            'Good test coverage for core functionality',
            'Well-organized test cases',
            'Could include more integration tests',
            'Edge cases well considered',
          ],
        },
      ],
    },
    skillAssessment: {
      technicalSkills: [
        { name: 'Node.js', level: 4.5 },
        { name: 'REST APIs', level: 4.5 },
        { name: 'MongoDB', level: 4 },
        { name: 'System Design', level: 4 },
        { name: 'Testing', level: 4 },
      ],
      softSkills: [
        { name: 'Problem Solving', level: 4.5 },
        { name: 'Attention to Detail', level: 4.5 },
        { name: 'Code Organization', level: 4 },
      ],
    },
    teamRecommendations: {
      primaryRecommendation: {
        team: 'Platform Services Team',
        role: 'Backend Developer',
        confidence: 95,
        reasons: [
          'Strong backend development skills demonstrated in the assessment',
          'Excellent understanding of microservices architecture',
          'Proven ability to design and implement scalable APIs',
          'Good grasp of database design and optimization',
        ],
      },
      alternativeOptions: [
        {
          team: 'API Integration Team',
          role: 'Integration Specialist',
          confidence: 88,
          reasons: [
            'Strong API design skills',
            'Good understanding of system integration patterns',
            'Experience with RESTful services',
          ],
        },
        {
          team: 'Core Services Team',
          role: 'Service Developer',
          confidence: 85,
          reasons: [
            'Strong backend development capabilities',
            'Good understanding of service architecture',
            'Solid testing practices',
          ],
        },
      ],
    },
    growthAreas: [
      'Advanced caching strategies',
      'Service mesh implementation',
      'Performance optimization techniques',
      'Advanced monitoring and observability',
    ],
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: 'primary.main', fontWeight: 600 }}>
        Performance Analysis
      </Typography>

      {/* Project Overview */}
      <Paper sx={{ p: 3, mb: 3 }} elevation={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <AnalyticsIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6">Project Assessment</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" gutterBottom>
              {examplePerformance.projectDetails.projectTitle}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {examplePerformance.projectDetails.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Department: {examplePerformance.projectDetails.department}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Submitted: {new Date(examplePerformance.projectDetails.submittedAt).toLocaleDateString()}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" color="primary" gutterBottom>
                {examplePerformance.technicalAnalysis.overallScore}%
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Overall Score
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>

      {/* Technical Analysis */}
      <Paper sx={{ p: 3, mb: 3 }} elevation={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <PsychologyIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6">Technical Analysis</Typography>
        </Box>

        <Stack spacing={3}>
          {examplePerformance.technicalAnalysis.categories.map((category, index) => (
            <Box key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="subtitle1">{category.name}</Typography>
                <Typography variant="h6" color="primary">{category.score}%</Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={category.score} 
                sx={{ mb: 2, height: 8, borderRadius: 4 }}
              />
              <Box sx={{ pl: 2 }}>
                {category.feedback.map((feedback, idx) => (
                  <Typography key={idx} variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    • {feedback}
                  </Typography>
                ))}
              </Box>
              {index < examplePerformance.technicalAnalysis.categories.length - 1 && (
                <Divider sx={{ mt: 2 }} />
              )}
            </Box>
          ))}
        </Stack>
      </Paper>

      {/* Skill Assessment */}
      <Paper sx={{ p: 3, mb: 3 }} elevation={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <TrendingUpIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6">Skill Assessment</Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" gutterBottom>Technical Skills</Typography>
            <Stack spacing={2}>
              {examplePerformance.skillAssessment.technicalSkills.map((skill, index) => (
                <Box key={index}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2">{skill.name}</Typography>
                    <Rating value={skill.level} precision={0.5} readOnly size="small" />
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" gutterBottom>Soft Skills</Typography>
            <Stack spacing={2}>
              {examplePerformance.skillAssessment.softSkills.map((skill, index) => (
                <Box key={index}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2">{skill.name}</Typography>
                    <Rating value={skill.level} precision={0.5} readOnly size="small" />
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Paper>

      {/* Team Recommendations */}
      <Paper sx={{ p: 3, mb: 3 }} elevation={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <GroupIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6">Team Recommendations</Typography>
        </Box>

        {/* Primary Recommendation */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <WorkOutlineIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="subtitle1">Primary Recommendation</Typography>
          </Box>
          
          <Paper sx={{ p: 2, bgcolor: 'primary.light', color: 'primary.contrastText' }} elevation={0}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box>
                <Typography variant="h6">{examplePerformance.teamRecommendations.primaryRecommendation.team}</Typography>
                <Typography variant="subtitle2">{examplePerformance.teamRecommendations.primaryRecommendation.role}</Typography>
              </Box>
              <Chip 
                label={`${examplePerformance.teamRecommendations.primaryRecommendation.confidence}% Match`}
                color="success"
                sx={{ 
                  bgcolor: 'white',
                  '& .MuiChip-label': {
                    color: 'success.main',
                    fontWeight: 500
                  }
                }}
              />
            </Box>
            <Box sx={{ pl: 2 }}>
              {examplePerformance.teamRecommendations.primaryRecommendation.reasons.map((reason, index) => (
                <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                  • {reason}
                </Typography>
              ))}
            </Box>
          </Paper>
        </Box>

        {/* Alternative Options */}
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <ArchitectureIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="subtitle1">Alternative Options</Typography>
          </Box>
          
          <Stack spacing={2}>
            {examplePerformance.teamRecommendations.alternativeOptions.map((option, index) => (
              <Paper key={index} sx={{ p: 2 }} variant="outlined">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Box>
                    <Typography variant="subtitle1">{option.team}</Typography>
                    <Typography variant="body2" color="text.secondary">{option.role}</Typography>
                  </Box>
                  <Chip 
                    label={`${option.confidence}% Match`}
                    color="primary"
                    size="small"
                  />
                </Box>
                <Box sx={{ pl: 2 }}>
                  {option.reasons.map((reason, idx) => (
                    <Typography key={idx} variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      • {reason}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Paper>

      {/* Growth Areas */}
      <Paper sx={{ p: 3, mb: 3 }} elevation={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <SpeedIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6">Recommended Growth Areas</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {examplePerformance.growthAreas.map((area, index) => (
            <Chip
              key={index}
              label={area}
              color="primary"
              variant="outlined"
            />
          ))}
        </Box>
      </Paper>

      {/* Completion Message */}
      <Paper 
        sx={{ 
          p: 4, 
          textAlign: 'center',
          bgcolor: 'success.light',
          color: 'success.contrastText'
        }} 
        elevation={2}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
          🎉 Performance Analysis Complete!
        </Typography>
        <Typography variant="body1" paragraph>
          Your performance analysis has been successfully completed and will be sent to the company for review.
        </Typography>
        <Typography variant="body1" paragraph>
          You will receive an official email shortly with information about your assigned team and role.
          Thank you for completing the technical assessment process!
        </Typography>
        <Box sx={{ mt: 4, p: 3, bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
            🌟 Welcome to Our Growing Team!
          </Typography>
          <Typography variant="body1" paragraph>
            We're excited about the prospect of having you join our team! Your skills and dedication shown throughout 
            the assessment process have been impressive.
          </Typography>
          <Typography variant="body1">
            Get ready for an amazing journey where you'll have the opportunity to work on challenging projects, 
            grow your skills, and make a real impact alongside talented colleagues.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}; 