import React from 'react';
import { Box, Typography, Paper, Card, CardContent, Chip } from '@mui/material';
import { Code as CodeIcon, Storage as StorageIcon, Cloud as CloudIcon } from '@mui/icons-material';
import { useScrollCompletion } from '../../../hooks/useScrollCompletion';

export const TechStack: React.FC = () => {
  useScrollCompletion('tech-stack');

  const frontendTech = [
    { name: 'React', description: 'UI Library for building user interfaces', category: 'Core' },
    { name: 'TypeScript', description: 'Typed superset of JavaScript', category: 'Language' },
    { name: 'Material-UI', description: 'React UI Framework', category: 'UI' },
    { name: 'Redux', description: 'State Management', category: 'State' }
  ];

  const backendTech = [
    { name: 'Node.js', description: 'JavaScript runtime', category: 'Runtime' },
    { name: 'Express', description: 'Web application framework', category: 'Framework' },
    { name: 'PostgreSQL', description: 'Relational database', category: 'Database' },
    { name: 'Redis', description: 'In-memory data store', category: 'Cache' }
  ];

  const devOpsTech = [
    { name: 'Docker', description: 'Containerization platform', category: 'Container' },
    { name: 'Kubernetes', description: 'Container orchestration', category: 'Orchestration' },
    { name: 'AWS', description: 'Cloud platform', category: 'Cloud' },
    { name: 'Jenkins', description: 'CI/CD platform', category: 'CI/CD' }
  ];

  interface Technology {
    name: string;
    description: string;
    category: string;
  }

  interface TechSectionProps {
    title: string;
    icon: React.ElementType;
    technologies: Technology[];
  }

  const TechSection: React.FC<TechSectionProps> = ({ title, icon: Icon, technologies }) => (
    <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Icon sx={{ mr: 1 }} />
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {technologies.map((tech, index) => (
          <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)' } }}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {tech.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {tech.description}
                </Typography>
                <Chip
                  label={tech.category}
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ mt: 1 }}
                />
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Paper>
  );

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Our Technology Stack
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        We use modern technologies to build scalable and maintainable applications.
        Here's an overview of our primary technology stack:
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <TechSection title="Frontend Technologies" icon={CodeIcon} technologies={frontendTech} />
        <TechSection title="Backend Technologies" icon={StorageIcon} technologies={backendTech} />
        <TechSection title="DevOps & Infrastructure" icon={CloudIcon} technologies={devOpsTech} />
      </Box>
    </Box>
  );
};