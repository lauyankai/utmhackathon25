import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  LinearProgress,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Rating,
  Paper
} from '@mui/material';
import {
  Code as CodeIcon,
  Assignment as TaskIcon,
  Assessment as AssessmentIcon,
  Timer as TimerIcon
} from '@mui/icons-material';

interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  difficulty: number;
  estimatedTime: string;
  tasks: Task[];
}

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  timeEstimate: string;
}

export const TechnicalSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openTaskDialog, setOpenTaskDialog] = useState(false);

  // Mock data - in a real app, this would come from an API
  const projects: Project[] = [
    {
      id: 1,
      title: 'Customer Dashboard Enhancement',
      description: 'Improve the existing customer dashboard with new analytics features and better performance',
      skills: ['React', 'TypeScript', 'Material-UI', 'Data Visualization'],
      difficulty: 3,
      estimatedTime: '2-3 weeks',
      tasks: [
        {
          id: 1,
          title: 'Implement Real-time Charts',
          description: 'Add real-time data visualization using Chart.js or similar library',
          status: 'pending',
          timeEstimate: '3-4 days'
        },
        {
          id: 2,
          title: 'Optimize Dashboard Loading',
          description: 'Implement lazy loading and optimize API calls',
          status: 'pending',
          timeEstimate: '2-3 days'
        }
      ]
    },
    {
      id: 2,
      title: 'API Integration Module',
      description: 'Create a new module for third-party API integrations',
      skills: ['Node.js', 'REST APIs', 'Authentication', 'Testing'],
      difficulty: 4,
      estimatedTime: '3-4 weeks',
      tasks: [
        {
          id: 3,
          title: 'Design API Architecture',
          description: 'Create architecture documentation and API endpoints design',
          status: 'pending',
          timeEstimate: '4-5 days'
        },
        {
          id: 4,
          title: 'Implement Authentication',
          description: 'Set up OAuth2 authentication for third-party APIs',
          status: 'pending',
          timeEstimate: '3-4 days'
        }
      ]
    }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setOpenTaskDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenTaskDialog(false);
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Technical Projects
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Based on your skills and experience, we've matched you with the following projects.
        Choose a project to view detailed tasks and begin your technical assessment.
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <Card 
              sx={{ 
                height: '100%',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
              onClick={() => handleProjectClick(project)}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CodeIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6">{project.title}</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {project.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AssessmentIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">
                      Difficulty: {Array(project.difficulty).fill('★').join('')}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TimerIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">
                      {project.estimatedTime}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={openTaskDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedProject && (
          <>
            <DialogTitle>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TaskIcon sx={{ mr: 1 }} />
                {selectedProject.title} - Tasks
              </Box>
            </DialogTitle>
            <DialogContent>
              <List>
                {selectedProject.tasks.map((task) => (
                  <ListItem key={task.id}>
                    <Paper elevation={1} sx={{ p: 2, width: '100%' }}>
                      <Typography variant="subtitle1" gutterBottom>
                        {task.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {task.description}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Chip
                          label={task.status.replace('_', ' ')}
                          color={task.status === 'completed' ? 'success' : 'default'}
                          size="small"
                        />
                        <Typography variant="body2" color="text.secondary">
                          Estimated time: {task.timeEstimate}
                        </Typography>
                      </Box>
                    </Paper>
                  </ListItem>
                ))}
              </List>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCloseDialog}
              >
                Start Project
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}; 