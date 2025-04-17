import React, { useState } from 'react';
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
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@mui/material';
import {
  Assignment as AssignmentIcon,
  Schedule as ScheduleIcon,
  Speed as SpeedIcon,
  Business as BusinessIcon,
  AutoGraph as AutoGraphIcon,
  AccountTree as AccountTreeIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const AvailableProjects: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleStartAssessment = (project: any, task: any) => {
    setSelectedTask({
      projectId: project.id,
      projectTitle: project.title,
      department: project.department,
      ...task
    });
    setOpenDialog(true);
  };

  const handleConfirmStart = () => {
    // In a real app, this would make an API call to assign the task
    // For now, we'll store it in localStorage as an example
    const myTasks = JSON.parse(localStorage.getItem('myTasks') || '[]');
    myTasks.push({
      ...selectedTask,
      status: 'In Progress',
      startDate: new Date().toISOString(),
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 2 weeks from now
    });
    localStorage.setItem('myTasks', JSON.stringify(myTasks));
    
    setOpenDialog(false);
    navigate('/technical-section/my-tasks');
  };

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
          duration: '1-2 weeks',
          matchScore: 95,
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
          description: 'Implement order processing with payment integration and inventory management.',
          skills: ['Node.js', 'Event-Driven', 'Redis', 'Payment APIs'],
          duration: '2-3 weeks',
          matchScore: 88,
          learningFocus: [
            'Event-driven architecture',
            'Payment gateway integration',
            'Distributed caching',
          ],
          expectedOutcomes: [
            'Robust order processing flow',
            'Payment integration',
            'Real-time inventory updates',
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
          duration: '1 week',
          matchScore: 90,
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
          title: 'Kubernetes Deployment',
          description: 'Design and implement Kubernetes deployment strategies.',
          skills: ['Kubernetes', 'Helm', 'Infrastructure as Code'],
          duration: '3-4 weeks',
          matchScore: 82,
          learningFocus: [
            'Kubernetes architecture',
            'Deployment strategies',
            'Service mesh implementation',
          ],
          expectedOutcomes: [
            'Production-ready K8s configs',
            'Automated deployment pipeline',
            'Monitoring setup',
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
          description: 'Build a real-time event processing pipeline using Apache Kafka.',
          skills: ['Kafka', 'Java', 'Stream Processing'],
          duration: '2-3 weeks',
          matchScore: 85,
          learningFocus: [
            'Stream processing patterns',
            'Event-driven architecture',
            'Real-time data processing',
          ],
          expectedOutcomes: [
            'Working event pipeline',
            'Data transformation logic',
            'Performance metrics',
          ],
        },
      ],
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: 'primary.main', fontWeight: 600 }}>
        Available Projects
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }} elevation={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <AutoGraphIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6">AI-Generated Assessment Tasks</Typography>
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Based on your skill analysis, our AI has broken down company projects into assessment tasks 
          that match your current level and learning potential. Complete these tasks to demonstrate 
          your capabilities and help us find your ideal team fit.
        </Typography>
      </Paper>

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
                  <Card key={index} sx={{ border: '1px solid', borderColor: 'divider' }}>
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
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={() => handleStartAssessment(project, task)}
                        >
                          Start Assessment
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

      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="assessment-dialog-title"
      >
        <DialogTitle id="assessment-dialog-title">
          Start Assessment Task
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are about to start the following assessment task:
          </DialogContentText>
          {selectedTask && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                {selectedTask.projectTitle} - {selectedTask.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Department: {selectedTask.department}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Level: {selectedTask.level}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Duration: {selectedTask.duration}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2">
                  This task will be added to your "My Tasks" section. You will be able to:
                </Typography>
                <ul>
                  <li>Upload your solution files</li>
                  <li>Track your progress</li>
                  <li>Submit for review when ready</li>
                </ul>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleConfirmStart} variant="contained" color="primary">
            Start Task
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}; 