import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Stack,
  Card,
  CardContent,
  Chip,
  Button,
  Divider,
  Alert,
  AlertTitle,
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText
} from '@mui/material';
import {
  Schedule as ScheduleIcon,
  Business as BusinessIcon,
  AutoGraph as AutoGraphIcon,
  AccountTree as AccountTreeIcon,
  Analytics,
  Timeline,
  TrendingUp
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const AvailableProjects: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState<{ projectId: number, taskIndex: number } | null>(null);
  const [isGenerating, setIsGenerating] = useState(true);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const navigate = useNavigate();

  const companyProjects = [
    {
      id: 1,
      title: 'Enterprise E-Commerce Platform',
      description: 'Our flagship e-commerce platform serving enterprise clients with high-volume transactions.',
      department: 'Platform Engineering',
      complexity: 'High',
      assessmentTasks: [
        {
          level: 'Entry',
          title: 'Product Catalog Service',
          description: 'Build a basic product catalog microservice with CRUD operations.',
          skills: ['Node.js', 'REST APIs', 'MongoDB'],
          duration: '2-3 days',
          matchScore: 95,
          instructions: [
            'Set up a Node.js project with Express and MongoDB',
            'Create REST endpoints for product CRUD operations',
            'Implement basic data validation and error handling',
            'Write unit tests for your endpoints',
            'Document your API using Swagger/OpenAPI',
          ],
          learningFocus: [
            'RESTful API design principles',
            'Basic microservice architecture',
            'Data modeling with MongoDB',
          ],
          expectedOutcomes: [
            'Working CRUD API for products',
            'Basic error handling',
            'Unit tests coverage',
          ],
        },
        {
          level: 'Intermediate',
          title: 'Order Processing System',
          description: 'Implement a simplified order processing service with basic payment validation.',
          skills: ['Node.js', 'Event-Driven', 'Redis'],
          duration: '3-4 days',
          matchScore: 88,
          instructions: [
            'Create an order processing service with basic validation',
            'Implement a simple payment validation mechanism (mock external API)',
            'Use Redis for caching order states',
            'Add error handling and retry mechanisms',
            'Create a basic dashboard to view order status',
          ],
          learningFocus: [
            'Event-driven architecture',
            'State management',
            'Distributed caching',
          ],
          expectedOutcomes: [
            'Working order flow',
            'Basic payment validation',
            'Order status tracking',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Migration',
      description: 'Strategic initiative to migrate our infrastructure to a cloud-native architecture.',
      department: 'Cloud Infrastructure',
      complexity: 'High',
      assessmentTasks: [
        {
          level: 'Entry',
          title: 'Container Configuration',
          description: 'Containerize a simple web application using Docker.',
          skills: ['Docker', 'YAML', 'Linux'],
          duration: '1-2 days',
          matchScore: 90,
          instructions: [
            'Create a Dockerfile for a basic web application',
            'Set up a docker-compose file with necessary services',
            'Implement health checks and logging',
            'Create a basic CI workflow using GitHub Actions',
            'Document your container setup and deployment process',
          ],
          learningFocus: [
            'Docker fundamentals',
            'Container best practices',
            'Basic DevOps workflows',
          ],
          expectedOutcomes: [
            'Dockerized application',
            'Working docker-compose setup',
            'Basic CI pipeline',
          ],
        },
        {
          level: 'Advanced',
          title: 'Basic Kubernetes Setup',
          description: 'Create a basic Kubernetes deployment for a web application.',
          skills: ['Kubernetes', 'YAML', 'Container Orchestration'],
          duration: '4-5 days',
          matchScore: 82,
          instructions: [
            'Create Kubernetes manifests for a web application',
            'Set up a local Kubernetes cluster using minikube',
            'Implement basic service discovery and networking',
            'Configure resource limits and health probes',
            'Create a horizontal pod autoscaling configuration',
          ],
          learningFocus: [
            'Kubernetes basics',
            'Container orchestration',
            'Service configuration',
          ],
          expectedOutcomes: [
            'Working K8s deployment',
            'Basic service configuration',
            'Resource management setup',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Real-time Analytics Platform',
      description: 'Next-generation analytics platform for processing real-time customer data.',
      department: 'Data Engineering',
      complexity: 'Medium',
      assessmentTasks: [
        {
          level: 'Intermediate',
          title: 'Event Processing Pipeline',
          description: 'Build a simplified real-time event processing pipeline.',
          skills: ['Node.js/Python', 'Redis', 'WebSocket'],
          duration: '3-4 days',
          matchScore: 85,
          instructions: [
            'Create a real-time event ingestion API',
            'Implement event processing using Redis pub/sub',
            'Build a WebSocket server for real-time updates',
            'Add basic data aggregation and filtering',
            'Create a simple dashboard to visualize events',
          ],
          learningFocus: [
            'Real-time data processing',
            'Event-driven architecture',
            'WebSocket communication',
          ],
          expectedOutcomes: [
            'Working event pipeline',
            'Real-time data visualization',
            'Basic analytics dashboard',
          ],
        },
      ],
    },
  ];

  const handleTaskSelection = (projectId: number, taskIndex: number) => {
    if (selectedTask && (selectedTask.projectId !== projectId || selectedTask.taskIndex !== taskIndex)) {
      return; // Prevent selecting multiple tasks
    }
    setSelectedTask({ projectId, taskIndex });
    setOpenConfirmDialog(true);
  };

  const handleConfirmSelection = () => {
    setOpenConfirmDialog(false);
    // Navigate to My Tasks section
    navigate('/technical-section/my-tasks');
  };

  // Simulate AI task generation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: 'primary.main', fontWeight: 600 }}>
        AI-Matched Projects
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }} elevation={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <AutoGraphIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6">AI-Generated Assessment Tasks</Typography>
        </Box>
        
        {isGenerating ? (
          <Box sx={{ textAlign: 'center', py: 3 }}>
            <CircularProgress size={40} />
            <Typography variant="body1" sx={{ mt: 2 }}>
              Our AI is generating personalized assessment tasks...
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Matching your skills with relevant projects and creating customized tasks
            </Typography>
          </Box>
        ) : (
          <>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Using advanced AI algorithms, we've analyzed your skill profile and matched you with 
              the following projects. Each task has been specifically tailored to:
            </Typography>
            
            <List dense sx={{ mb: 3 }}>
              <ListItem>
                <ListItemIcon>
                  <Analytics color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Skill-Based Matching"
                  secondary="Tasks aligned with your current skill level and growth potential"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Timeline color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Learning Path Optimization"
                  secondary="Projects that help you develop relevant skills for your career goals"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TrendingUp color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Success Probability"
                  secondary="Match scores indicating your likelihood of success in each task"
                />
              </ListItem>
            </List>

            <Alert severity="info" sx={{ mb: 2 }}>
              <AlertTitle>Important Note</AlertTitle>
              For this technical assessment, you are required to select and complete only <strong>one project task</strong>. 
              Choose the task that best aligns with your skills and interests. Once you've made your selection, 
              you won't be able to switch to a different task. Each task includes step-by-step instructions to guide you through the implementation.
            </Alert>
          </>
        )}
      </Paper>

      {!isGenerating && (
        <Stack spacing={4}>
          {companyProjects.map((project) => (
            <Paper key={project.id} sx={{ p: 3 }} elevation={2}>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <BusinessIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6">{project.title}</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                  <Chip 
                    label={project.department}
                    color="default"
                    size="small"
                  />
                  <Chip 
                    label={`Complexity: ${project.complexity}`}
                    color="default"
                    size="small"
                  />
                </Box>

                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AccountTreeIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="subtitle1">Assessment Tasks</Typography>
                </Box>
                
                <Stack spacing={2}>
                  {project.assessmentTasks.map((task, index) => (
                    <Card 
                      key={index} 
                      sx={{ 
                        border: '1px solid', 
                        borderColor: selectedTask?.projectId === project.id && selectedTask?.taskIndex === index 
                          ? 'primary.main' 
                          : 'divider',
                        opacity: selectedTask && (selectedTask.projectId !== project.id || selectedTask.taskIndex !== index) 
                          ? 0.6 
                          : 1,
                        position: 'relative'
                      }}
                    >
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                          <Box>
                            <Typography variant="subtitle1" gutterBottom>
                              {task.title}
                            </Typography>
                            <Chip 
                              label={`Level: ${task.level}`}
                              color="primary"
                              size="small"
                              sx={{ mr: 1 }}
                            />
                            <Chip 
                              label={`${task.matchScore}% Match`}
                              color="success"
                              size="small"
                            />
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <ScheduleIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {task.duration}
                            </Typography>
                          </Box>
                        </Box>

                        <Typography variant="body2" color="text.secondary" paragraph>
                          {task.description}
                        </Typography>

                        <Box sx={{ mb: 2 }}>
                          <Typography variant="subtitle2" color="primary" gutterBottom>
                            Implementation Instructions:
                          </Typography>
                          <ol style={{ margin: 0, paddingLeft: '1.5rem' }}>
                            {task.instructions.map((instruction, idx) => (
                              <li key={idx}>
                                <Typography variant="body2" color="text.secondary">
                                  {instruction}
                                </Typography>
                              </li>
                            ))}
                          </ol>
                        </Box>

                        <Box sx={{ mb: 2 }}>
                          <Typography variant="subtitle2" color="primary" gutterBottom>
                            Learning Focus:
                          </Typography>
                          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                            {task.learningFocus.map((focus, idx) => (
                              <li key={idx}>
                                <Typography variant="body2" color="text.secondary">
                                  {focus}
                                </Typography>
                              </li>
                            ))}
                          </ul>
                        </Box>

                        <Box sx={{ mb: 2 }}>
                          <Typography variant="subtitle2" color="primary" gutterBottom>
                            Expected Outcomes:
                          </Typography>
                          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                            {task.expectedOutcomes.map((outcome, idx) => (
                              <li key={idx}>
                                <Typography variant="body2" color="text.secondary">
                                  {outcome}
                                </Typography>
                              </li>
                            ))}
                          </ul>
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {task.skills.map((skill, skillIndex) => (
                            <Chip
                              key={skillIndex}
                              label={skill}
                              size="small"
                              variant="outlined"
                            />
                          ))}
                        </Box>

                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                          <Button
                            variant={selectedTask?.projectId === project.id && selectedTask?.taskIndex === index 
                              ? "contained" 
                              : "outlined"}
                            color="primary"
                            onClick={() => handleTaskSelection(project.id, index)}
                            disabled={selectedTask ? (selectedTask.projectId !== project.id || selectedTask.taskIndex !== index) : false}
                          >
                            {selectedTask?.projectId === project.id && selectedTask?.taskIndex === index 
                              ? "Selected" 
                              : "Select Task"}
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Stack>
              </Box>
            </Paper>
          ))}
        </Stack>
      )}

      {/* Add the confirmation dialog */}
      <Dialog
        open={openConfirmDialog}
        onClose={() => setOpenConfirmDialog(false)}
        aria-labelledby="confirm-task-dialog"
      >
        <DialogTitle id="confirm-task-dialog">
          Confirm Task Selection
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to select this task? Once confirmed, you won't be able to choose a different task, and you'll be redirected to start working on it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirmDialog(false)} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleConfirmSelection} variant="contained" color="primary">
            Confirm Selection
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};