import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText,
  Divider, Rating, Stack } from '@mui/material';
import { TrendingUp as TrendingUpIcon, Lightbulb as LightbulbIcon, Analytics as AnalyticsIcon,
  Timeline as TimelineIcon, Star as StarIcon, Insights as InsightsIcon } from '@mui/icons-material';

interface SkillAnalysisProps {
  onContinue: () => void;
}

export const SkillAnalysis: React.FC<SkillAnalysisProps> = ({ onContinue }) => {
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
      title: 'Skill Profile Analysis',
      insights: [
        'Strong foundation in modern web development with React and TypeScript',
        'Excellent grasp of software architecture principles',
        'Growing expertise in cloud-native technologies',
      ],
      icon: <AnalyticsIcon />,
    },
    {
      title: 'Growth Opportunities',
      insights: [
        'Consider deepening knowledge in cloud orchestration (Kubernetes)',
        'Explore advanced system design patterns',
        'Focus on distributed systems architecture',
      ],
      icon: <TimelineIcon />,
    },
    {
      title: 'AI Career Recommendations',
      insights: [
        'Well-suited for Senior Full Stack Developer roles',
        'Potential for Technical Architecture positions',
        'Strong candidate for Lead Developer roles',
      ],
      icon: <LightbulbIcon />,
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: 'primary.main', fontWeight: 600 }}>
        Skill Analysis
      </Typography>

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
    </Box>
  );
}; 