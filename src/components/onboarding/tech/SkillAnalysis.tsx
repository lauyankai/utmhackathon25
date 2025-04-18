import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText,
  Divider, Rating, Stack, CircularProgress } from '@mui/material';
import { TrendingUp as TrendingUpIcon, Lightbulb as LightbulbIcon, Analytics as AnalyticsIcon,
  Timeline as TimelineIcon, Star as StarIcon, Insights as InsightsIcon, AutoGraph as AutoGraphIcon } from '@mui/icons-material';

interface SkillAnalysisProps {
  onContinue: () => void;
}

export const SkillAnalysis: React.FC<SkillAnalysisProps> = ({}) => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  const skillCategories = [
    {
      category: 'Technical Skills',
      skills: [
        { name: 'React', level: 4 },
        { name: 'TypeScript', level: 4 },
        { name: 'Node.js', level: 3 },
        { name: 'Python', level: 4 },
        { name: 'System Design', level: 3 },
      ],
    },
    {
      category: 'Software Architecture',
      skills: [
        { name: 'Microservices', level: 3 },
        { name: 'API Design', level: 4 },
        { name: 'Cloud Architecture', level: 3 },
        { name: 'Database Design', level: 4 },
      ],
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 3 },
        { name: 'Kubernetes', level: 2 },
        { name: 'CI/CD', level: 3 },
        { name: 'Git', level: 4 },
      ],
    },
  ];

  const aiInsights = [
    {
      title: 'Resume Analysis Insights',
      insights: [
        'Your experience aligns well with our company\'s tech stack and culture',
        'Notable strengths in collaborative development and agile methodologies',
        'Demonstrated history of successful project deliveries in similar environments',
      ],
      icon: <AnalyticsIcon />,
    },
    {
      title: 'Technical Competency Analysis',
      insights: [
        'Advanced proficiency in modern web development frameworks',
        'Strong foundation in software architecture and system design',
        'Proven ability to implement scalable solutions',
      ],
      icon: <TimelineIcon />,
    },
    {
      title: 'Role-Specific Recommendations',
      insights: [
        'Well-suited for our platform development team based on your React expertise',
        'Strong potential for technical leadership roles in cloud infrastructure',
        'Recommended for cross-functional projects requiring full-stack knowledge',
      ],
      icon: <LightbulbIcon />,
    },
    {
      title: 'Learning & Development Path',
      insights: [
        'Suggested focus on advanced cloud architecture patterns',
        'Recommended participation in our microservices optimization projects',
        'Opportunity to mentor junior developers while expanding system design skills',
      ],
      icon: <InsightsIcon />,
    }
  ];

  // Simulate AI analysis completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: 'primary.main', fontWeight: 600 }}>
        Skill Analysis
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }} elevation={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LightbulbIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
          <Typography variant="h6" color="primary.main">
            AI-Powered Skill Assessment
          </Typography>
        </Box>
        
        {isAnalyzing ? (
          <Box sx={{ textAlign: 'center', py: 3 }}>
            <CircularProgress size={40} />
            <Typography variant="body1" sx={{ mt: 2 }}>
              Our AI is analyzing your resume and professional background...
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Evaluating skills, experience, and potential matches with company roles
            </Typography>
          </Box>
        ) : (
          <>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
              Our advanced AI system has analyzed your resume and professional background using:
            </Typography>
            <List dense sx={{ mb: 3 }}>
              <ListItem>
                <ListItemIcon>
                  <AutoGraphIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Natural Language Processing"
                  secondary="Extracted and understood your skills and experiences"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TimelineIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Pattern Recognition"
                  secondary="Identified skill patterns and career progression"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TrendingUpIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Predictive Analytics"
                  secondary="Evaluated potential success in different roles"
                />
              </ListItem>
            </List>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
              Based on this analysis, we've created a personalized development roadmap and identified optimal project matches.
            </Typography>
          </>
        )}
      </Paper>

      {!isAnalyzing && (
        <Stack spacing={4}>
          <Paper sx={{ p: 3 }} elevation={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <StarIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">Professional Skill Analysis</Typography>
            </Box>
            
            {skillCategories.map((category, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 500, color: 'text.primary' }}>
                  {category.category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {category.skills.map((skill, skillIndex) => (
                    <Box 
                      key={skillIndex}
                      sx={{ 
                        minWidth: 250,
                        bgcolor: 'background.paper',
                        p: 2,
                        borderRadius: 1,
                        border: '1px solid',
                        borderColor: 'divider'
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography variant="body2" sx={{ minWidth: 100, fontWeight: 500 }}>
                          {skill.name}
                        </Typography>
                        <Rating
                          value={skill.level}
                          readOnly
                          max={5}
                          size="small"
                          sx={{ ml: 1 }}
                        />
                      </Box>
                    </Box>
                  ))}
                </Box>
                {index < skillCategories.length - 1 && <Divider sx={{ my: 3 }} />}
              </Box>
            ))}
          </Paper>

          <Paper sx={{ p: 3 }} elevation={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <InsightsIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">AI-Powered Career Insights</Typography>
            </Box>
            
            {aiInsights.map((section, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ mr: 1, color: 'primary.main' }}>{section.icon}</Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500, color: 'text.primary' }}>
                    {section.title}
                  </Typography>
                </Box>
                <List dense sx={{ bgcolor: 'background.paper', borderRadius: 1 }}>
                  {section.insights.map((insight, insightIndex) => (
                    <ListItem key={insightIndex}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <TrendingUpIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={insight}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
                {index < aiInsights.length - 1 && <Divider sx={{ my: 2 }} />}
              </Box>
            ))}
          </Paper>
        </Stack>
      )}
    </Box>
  );
};