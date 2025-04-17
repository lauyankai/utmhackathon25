import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Avatar,
  Divider
} from '@mui/material';
import {
  Code as CodeIcon,
  Assignment as TaskIcon,
  Assessment as AssessmentIcon,
  Timer as TimerIcon,
  Star as StarIcon,
  Psychology as AIIcon,
  Lightbulb as InsightIcon,
  TrendingUp as ProgressIcon
} from '@mui/icons-material';
import { SkillAnalysis } from './SkillAnalysis';

interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  difficulty: number;
  estimatedTime: string;
  tasks: Task[];
  instructions: string[];
  learningOutcomes: string[];
  prerequisites: string[];
}

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  timeEstimate: string;
  steps: string[];
  deliverables: string[];
}

interface UserSkillProfile {
  extractedSkills: {
    category: string;
    skills: string[];
    proficiencyLevel: 'Expert' | 'Intermediate' | 'Beginner';
  }[];
  recommendedAreas: string[];
  potentialTeams: string[];
  strengthAreas: string[];
}

export const TechnicalSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openTaskDialog, setOpenTaskDialog] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  // Mock user skill profile - In a real app, this would come from an AI analysis of the user's resume
  const userSkillProfile: UserSkillProfile = {
    extractedSkills: [
      {
        category: 'Core Development',
        skills: ['Java', 'Python', 'C++', 'Data Structures', 'Algorithms'],
        proficiencyLevel: 'Expert'
      },
      {
        category: 'Web Technologies',
        skills: ['React', 'Node.js', 'TypeScript', 'RESTful APIs', 'GraphQL'],
        proficiencyLevel: 'Expert'
      },
      {
        category: 'Software Architecture',
        skills: ['Design Patterns', 'Microservices', 'System Design', 'API Design'],
        proficiencyLevel: 'Intermediate'
      },
      {
        category: 'DevOps & Cloud',
        skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure as Code'],
        proficiencyLevel: 'Intermediate'
      },
      {
        category: 'Quality & Testing',
        skills: ['Unit Testing', 'Integration Testing', 'TDD', 'Test Automation'],
        proficiencyLevel: 'Intermediate'
      }
    ],
    recommendedAreas: [
      'Backend System Architecture',
      'Distributed Systems Design',
      'Cloud-Native Development',
      'API Platform Development'
    ],
    potentialTeams: [
      'Platform Engineering',
      'Backend Infrastructure',
      'Cloud Architecture',
      'System Design'
    ],
    strengthAreas: [
      'Scalable System Design',
      'API Development',
      'Performance Optimization',
      'Technical Architecture'
    ]
  };

  // Mock data - in a real app, this would come from an API
  const projects: Project[] = [
    {
      id: 1,
      title: 'Microservices Architecture Implementation',
      description: 'Design and implement a scalable microservices architecture for our e-commerce platform, focusing on service decomposition and inter-service communication.',
      skills: ['Java', 'Spring Boot', 'Microservices', 'Docker', 'Kubernetes', 'Message Queues'],
      difficulty: 4,
      estimatedTime: '3-4 weeks',
      prerequisites: [
        'Strong understanding of Java and Spring Boot',
        'Basic knowledge of microservices architecture',
        'Experience with containerization and orchestration',
        'Understanding of message queues and event-driven architecture'
      ],
      instructions: [
        'Review the current monolithic architecture',
        'Design service boundaries and communication patterns',
        'Implement core microservices using Spring Boot',
        'Set up containerization and orchestration',
        'Implement service discovery and gateway',
        'Add monitoring and observability'
      ],
      learningOutcomes: [
        'Microservices design patterns',
        'Distributed systems architecture',
        'Container orchestration',
        'Service mesh implementation',
        'Distributed monitoring'
      ],
      tasks: [
        {
          id: 1,
          title: 'Service Decomposition',
          description: 'Analyze and break down the monolithic application into microservices following domain-driven design principles.',
          status: 'pending',
          timeEstimate: '1 week',
          steps: [
            'Analyze current monolithic architecture',
            'Identify bounded contexts',
            'Design service boundaries',
            'Create service interaction diagrams',
            'Document API contracts'
          ],
          deliverables: [
            'Service architecture diagram',
            'API specifications',
            'Data model documentation',
            'Inter-service communication patterns'
          ]
        },
        {
          id: 2,
          title: 'Infrastructure Setup',
          description: 'Set up the cloud infrastructure and CI/CD pipeline for microservices deployment.',
          status: 'pending',
          timeEstimate: '1 week',
          steps: [
            'Set up Kubernetes cluster',
            'Configure service mesh',
            'Implement CI/CD pipelines',
            'Set up monitoring and logging',
            'Configure auto-scaling'
          ],
          deliverables: [
            'Infrastructure as code',
            'CI/CD pipeline configuration',
            'Monitoring dashboard',
            'Deployment documentation'
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Distributed Cache System',
      description: 'Design and implement a distributed caching system to improve application performance and scalability.',
      skills: ['Java', 'Redis', 'System Design', 'Distributed Systems', 'Performance Optimization'],
      difficulty: 4,
      estimatedTime: '2-3 weeks',
      prerequisites: [
        'Strong Java programming skills',
        'Understanding of caching strategies',
        'Knowledge of distributed systems',
        'Experience with Redis or similar cache systems'
      ],
      instructions: [
        'Analyze current caching needs',
        'Design cache architecture',
        'Implement cache service',
        'Add monitoring and metrics',
        'Perform load testing',
        'Document cache patterns'
      ],
      learningOutcomes: [
        'Distributed cache patterns',
        'Cache consistency strategies',
        'Performance optimization',
        'Scalability design'
      ],
      tasks: [
        {
          id: 3,
          title: 'Cache Architecture Design',
          description: 'Design a scalable and efficient cache architecture with proper invalidation strategies.',
          status: 'pending',
          timeEstimate: '1 week',
          steps: [
            'Define cache requirements',
            'Design cache topology',
            'Create invalidation strategy',
            'Plan for cache consistency',
            'Design monitoring system'
          ],
          deliverables: [
            'Cache architecture document',
            'Invalidation strategy',
            'Consistency patterns',
            'Monitoring plan'
          ]
        },
        {
          id: 4,
          title: 'Cache Implementation',
          description: 'Implement the distributed cache system with proper error handling and monitoring.',
          status: 'pending',
          timeEstimate: '1-2 weeks',
          steps: [
            'Implement cache service',
            'Add error handling',
            'Set up monitoring',
            'Implement cache policies',
            'Add performance metrics'
          ],
          deliverables: [
            'Cache implementation code',
            'Error handling documentation',
            'Monitoring dashboard',
            'Performance test results'
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Event-Driven Architecture Implementation',
      description: 'Design and implement an event-driven architecture for real-time data processing and analytics.',
      skills: ['Kafka', 'Spring Cloud Stream', 'Event Sourcing', 'CQRS', 'Distributed Systems'],
      difficulty: 4,
      estimatedTime: '3-4 weeks',
      prerequisites: [
        'Experience with message brokers',
        'Understanding of event-driven patterns',
        'Knowledge of CQRS and Event Sourcing',
        'Java/Spring development experience'
      ],
      instructions: [
        'Design event schema and topics',
        'Set up Kafka infrastructure',
        'Implement event producers and consumers',
        'Add event storage and replay capability',
        'Implement CQRS pattern',
        'Add monitoring and tracking'
      ],
      learningOutcomes: [
        'Event-driven architecture patterns',
        'Stream processing',
        'CQRS implementation',
        'Event sourcing patterns',
        'Real-time analytics'
      ],
      tasks: [
        {
          id: 5,
          title: 'Event System Design',
          description: 'Design the event system architecture including event schema, topics, and processing patterns.',
          status: 'pending',
          timeEstimate: '1 week',
          steps: [
            'Define event schema',
            'Design topic structure',
            'Plan event flow',
            'Create processing patterns',
            'Design storage strategy'
          ],
          deliverables: [
            'Event schema documentation',
            'Topic design document',
            'Processing flow diagrams',
            'Storage strategy document'
          ]
        },
        {
          id: 6,
          title: 'Stream Processing Implementation',
          description: 'Implement stream processing pipeline with proper error handling and monitoring.',
          status: 'pending',
          timeEstimate: '2 weeks',
          steps: [
            'Set up Kafka clusters',
            'Implement event producers',
            'Create consumer groups',
            'Add error handling',
            'Implement monitoring'
          ],
          deliverables: [
            'Stream processing code',
            'Error handling implementation',
            'Monitoring setup',
            'Performance metrics'
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'API Gateway Implementation',
      description: 'Design and implement a robust API Gateway with rate limiting, authentication, and monitoring capabilities.',
      skills: ['Spring Cloud Gateway', 'OAuth2', 'Rate Limiting', 'API Security', 'Monitoring'],
      difficulty: 3,
      estimatedTime: '2-3 weeks',
      prerequisites: [
        'Experience with Spring Cloud',
        'Understanding of API security',
        'Knowledge of authentication protocols',
        'Experience with rate limiting'
      ],
      instructions: [
        'Design gateway architecture',
        'Implement routing rules',
        'Add authentication and authorization',
        'Implement rate limiting',
        'Set up monitoring',
        'Add documentation'
      ],
      learningOutcomes: [
        'API Gateway patterns',
        'Security implementation',
        'Rate limiting strategies',
        'API monitoring',
        'Documentation automation'
      ],
      tasks: [
        {
          id: 7,
          title: 'Gateway Core Implementation',
          description: 'Implement core gateway functionality including routing and basic security.',
          status: 'pending',
          timeEstimate: '1 week',
          steps: [
            'Set up gateway project',
            'Implement routing',
            'Add basic security',
            'Configure CORS',
            'Add error handling'
          ],
          deliverables: [
            'Gateway implementation',
            'Routing configuration',
            'Security setup',
            'Error handling code'
          ]
        },
        {
          id: 8,
          title: 'Advanced Features',
          description: 'Add advanced features like rate limiting, circuit breaking, and detailed monitoring.',
          status: 'pending',
          timeEstimate: '1-2 weeks',
          steps: [
            'Implement rate limiting',
            'Add circuit breakers',
            'Set up monitoring',
            'Add metrics collection',
            'Create dashboards'
          ],
          deliverables: [
            'Rate limiting implementation',
            'Circuit breaker configuration',
            'Monitoring setup',
            'Dashboard templates'
          ]
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

  const handleContinue = () => {
    setShowProjects(true);
  };

  return (
    <Box sx={{ 
      maxWidth: 1200, 
      mx: 'auto', 
      py: 4,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{ mb: 6 }}>
        <SkillAnalysis onContinue={handleContinue} />
      </Box>

      {showProjects && (
        <>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Personalized Technical Projects
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Based on your skills and AI analysis, we've curated the following projects to help assess and enhance your abilities.
            These projects are designed to match your expertise level while providing opportunities for growth.
          </Typography>

          <Grid container spacing={3} sx={{ flex: 1 }}>
            {projects.map((project) => (
              <Grid 
                key={project.id} 
                item 
                xs={12} 
                md={6}
                component={Paper}
                elevation={0}
              >
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
        </>
      )}

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
                {selectedProject.title}
              </Box>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Prerequisites
                </Typography>
                <List>
                  {selectedProject.prerequisites.map((prereq, index) => (
                    <ListItem key={index}>
                      <Typography variant="body2">• {prereq}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Instructions
                </Typography>
                <Stepper orientation="vertical" sx={{ mb: 2 }}>
                  {selectedProject.instructions.map((instruction, index) => (
                    <Step key={index} active={true}>
                      <StepLabel>{instruction}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Learning Outcomes
                </Typography>
                <List>
                  {selectedProject.learningOutcomes.map((outcome, index) => (
                    <ListItem key={index}>
                      <Typography variant="body2">• {outcome}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Typography variant="h6" gutterBottom>
                Tasks
              </Typography>
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
                      
                      <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                        Steps:
                      </Typography>
                      <List>
                        {task.steps.map((step, index) => (
                          <ListItem key={index}>
                            <Typography variant="body2">• {step}</Typography>
                          </ListItem>
                        ))}
                      </List>

                      <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                        Deliverables:
                      </Typography>
                      <List>
                        {task.deliverables.map((deliverable, index) => (
                          <ListItem key={index}>
                            <Typography variant="body2">• {deliverable}</Typography>
                          </ListItem>
                        ))}
                      </List>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
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