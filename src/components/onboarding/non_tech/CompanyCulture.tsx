import React from 'react';
import { useScrollCompletion } from '../../../hooks/useScrollCompletion';
import { Box, Typography, Paper, Card, CardContent, Container } from '@mui/material';
import { Diversity3 as DiversityIcon, Lightbulb as InnovationIcon, HandshakeOutlined as IntegrityIcon } from '@mui/icons-material';

const values = [
  {
    title: 'Innovation',
    description: 'We embrace creative thinking and continuously strive for breakthrough solutions.',
    icon: <InnovationIcon sx={{ fontSize: 40 }} />
  },
  {
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical behavior.',
    icon: <IntegrityIcon sx={{ fontSize: 40 }} />
  },
  {
    title: 'Diversity',
    description: 'We celebrate differences and create an inclusive environment for all.',
    icon: <DiversityIcon sx={{ fontSize: 40 }} />
  }
];

export const CompanyCulture: React.FC = () => {
  useScrollCompletion('company-culture');

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Our Company Culture
        </Typography>
        
        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Mission Statement
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to revolutionize the industry through innovative solutions while fostering
            a culture of collaboration, growth, and excellence. We are committed to creating value
            for our customers, employees, and society.
          </Typography>
        </Paper>

        <Typography variant="h5" gutterBottom>
          Our Core Values
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, mb: 4, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
          {values.map((value) => (
            <Card key={value.title} sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {value.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {value.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {value.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Culture Highlights
          </Typography>
          <Typography variant="body1" paragraph>
            We believe in creating an environment where every team member can thrive and grow.
            Our culture is built on the foundations of open communication, continuous learning,
            and mutual respect.
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            {[
              'Flexible work arrangements that promote work-life balance',
              'Regular team building and social events',
              'Continuous learning and development opportunities',
              'Recognition and rewards for exceptional contributions',
              'Open-door policy and transparent communication'
            ].map((point, index) => (
              <Typography
                key={index}
                component="li"
                variant="body1"
                sx={{ mb: 1 }}
              >
                {point}
              </Typography>
            ))}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};