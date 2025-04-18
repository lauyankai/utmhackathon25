import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  LinearProgress,
  Collapse,
  Grid,
  Card,
  CardContent,
  Alert
} from '@mui/material';
import { 
  Edit as EditIcon, 
  Delete as DeleteIcon, 
  Add as AddIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Assessment as AssessmentIcon
} from '@mui/icons-material';

interface Performance {
  technicalSkills: number;
  problemSolving: number;
  communication: number;
  overallScore: number;
  recommendedRole: string;
  recommendedTeam: string;
  capabilities: {
    technical: string[];
    softSkills: string[];
    potential: string[];
  };
}

interface Task {
  id: string;
  projectName: string;
  taskName: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  progress: number;
}

interface User {
  id: string;
  name: string;
  email: string;
  interviewRole: string;
  status: string;
  lastActive: string;
  task?: Task;
  performance?: Performance;
}

export const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@company.com',
      interviewRole: 'Software Engineer',
      status: 'Active',
      lastActive: '2024-02-20',
      task: {
        id: 't1',
        projectName: 'E-Commerce Platform',
        taskName: 'Implement Shopping Cart Feature',
        status: 'Completed',
        progress: 100
      },
      performance: {
        technicalSkills: 85,
        problemSolving: 90,
        communication: 88,
        overallScore: 88,
        recommendedRole: 'Full Stack Developer',
        recommendedTeam: 'Core Platform Team',
        capabilities: {
          technical: [
            'Strong proficiency in modern JavaScript and TypeScript',
            'Experience with React and state management',
            'Good understanding of RESTful APIs and backend integration',
            'Solid foundation in data structures and algorithms'
          ],
          softSkills: [
            'Excellent problem-solving approach with systematic debugging',
            'Clear communication of technical concepts',
            'Good collaboration and team-oriented mindset'
          ],
          potential: [
            'Shows leadership potential in technical discussions',
            'Quick learner with ability to adapt to new technologies',
            'Can mentor junior developers in the future'
          ]
        }
      }
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@company.com',
      interviewRole: 'UX Designer',
      status: 'Active',
      lastActive: '2024-02-19',
      task: {
        id: 't4',
        projectName: 'Healthcare Dashboard',
        taskName: 'Design Patient Overview Interface',
        status: 'In Progress',
        progress: 45
      }
    }
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [expandedUser, setExpandedUser] = useState<string | null>(null);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleDelete = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleClose = () => {
    setOpenDialog(false);
    setSelectedUser(null);
  };

  const handleSave = () => {
    handleClose();
  };

  const toggleUserExpand = (userId: string) => {
    setExpandedUser(expandedUser === userId ? null : userId);
  };

  const getTaskStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'In Progress':
        return 'warning';
      default:
        return 'default';
    }
  };

  const renderPerformanceCard = (performance: Performance) => (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Performance Analysis & Recommendations
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 3,
          width: '100%'
        }}>
          <Box sx={{ flex: '1 1 400px', minWidth: '300px' }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Performance Metrics
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2">Technical Skills</Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  <LinearProgress
                    variant="determinate"
                    value={performance.technicalSkills}
                    sx={{ flexGrow: 1, height: 8, borderRadius: 4 }}
                  />
                  <Typography variant="body2">{performance.technicalSkills}%</Typography>
                </Box>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2">Problem Solving</Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  <LinearProgress
                    variant="determinate"
                    value={performance.problemSolving}
                    sx={{ flexGrow: 1, height: 8, borderRadius: 4 }}
                  />
                  <Typography variant="body2">{performance.problemSolving}%</Typography>
                </Box>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2">Communication</Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  <LinearProgress
                    variant="determinate"
                    value={performance.communication}
                    sx={{ flexGrow: 1, height: 8, borderRadius: 4 }}
                  />
                  <Typography variant="body2">{performance.communication}%</Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="subtitle2" color="primary">Overall Score</Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  <LinearProgress
                    variant="determinate"
                    value={performance.overallScore}
                    sx={{ flexGrow: 1, height: 8, borderRadius: 4 }}
                    color="primary"
                  />
                  <Typography variant="body2" color="primary">{performance.overallScore}%</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ flex: '1 1 400px', minWidth: '300px' }}>
            <Typography variant="subtitle1" color="primary" gutterBottom>
              Recommendations
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Recommended Role
              </Typography>
              <Chip
                label={performance.recommendedRole}
                color="primary"
                variant="outlined"
                sx={{ fontSize: '1rem' }}
              />
            </Box>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Recommended Team
              </Typography>
              <Chip
                label={performance.recommendedTeam}
                color="secondary"
                variant="outlined"
                sx={{ fontSize: '1rem' }}
              />
            </Box>
          </Box>

          <Box sx={{ width: '100%' }}>
            <Typography variant="subtitle1" color="primary" gutterBottom>
              Detailed Capabilities Assessment
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 3,
              '& > *': { flex: '1 1 300px' }
            }}>
              <Box>
                <Typography variant="subtitle2" gutterBottom color="primary">
                  Technical Capabilities
                </Typography>
                <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                  {performance.capabilities.technical.map((capability, index) => (
                    <Box component="li" key={index} sx={{ mb: 1 }}>
                      <Typography variant="body2">{capability}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box>
                <Typography variant="subtitle2" gutterBottom color="primary">
                  Soft Skills
                </Typography>
                <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                  {performance.capabilities.softSkills.map((skill, index) => (
                    <Box component="li" key={index} sx={{ mb: 1 }}>
                      <Typography variant="body2">{skill}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box>
                <Typography variant="subtitle2" gutterBottom color="primary">
                  Growth Potential
                </Typography>
                <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                  {performance.capabilities.potential.map((potential, index) => (
                    <Box component="li" key={index} sx={{ mb: 1 }}>
                      <Typography variant="body2">{potential}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ 
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" component="h1">
          User Management
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpenDialog(true)}
        >
          Add User
        </Button>
      </Box>

      <Paper 
        elevation={2}
        sx={{
          width: '100%',
          overflow: 'hidden',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: (theme) => theme.shadows[4]
          }
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" />
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Interview Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Last Active</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <React.Fragment key={user.id}>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <IconButton
                        size="small"
                        onClick={() => toggleUserExpand(user.id)}
                      >
                        {expandedUser === user.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </IconButton>
                    </TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Chip 
                        label={user.interviewRole} 
                        color="primary" 
                        variant="outlined"
                        sx={{
                          '& .MuiChip-label': {
                            fontWeight: 500
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={user.status}
                        color={user.status === 'Active' ? 'success' : 'default'}
                      />
                    </TableCell>
                    <TableCell>{user.lastActive}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEdit(user)} color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(user.id)} color="error">
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        color="info"
                        onClick={() => toggleUserExpand(user.id)}
                      >
                        <AssessmentIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                      <Collapse in={expandedUser === user.id} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 2 }}>
                          <Typography variant="h6" gutterBottom component="div">
                            Current Task
                          </Typography>
                          {user.task ? (
                            <Table size="small">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Project Name</TableCell>
                                  <TableCell>Task</TableCell>
                                  <TableCell>Status</TableCell>
                                  <TableCell>Progress</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <TableRow>
                                  <TableCell>
                                    <Typography variant="body2" fontWeight="medium">
                                      {user.task.projectName}
                                    </Typography>
                                  </TableCell>
                                  <TableCell>
                                    <Typography variant="body2">
                                      {user.task.taskName}
                                    </Typography>
                                  </TableCell>
                                  <TableCell>
                                    <Chip
                                      label={user.task.status}
                                      color={getTaskStatusColor(user.task.status)}
                                      size="small"
                                    />
                                  </TableCell>
                                  <TableCell>
                                    <Box display="flex" alignItems="center" gap={1}>
                                      <LinearProgress
                                        variant="determinate"
                                        value={user.task.progress}
                                        sx={{ flexGrow: 1 }}
                                      />
                                      <Typography variant="body2">
                                        {user.task.progress}%
                                      </Typography>
                                    </Box>
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          ) : (
                            <Alert severity="info" sx={{ mt: 1 }}>
                              No task assigned yet
                            </Alert>
                          )}
                          {user.task?.status === 'Completed' && user.performance ? (
                            renderPerformanceCard(user.performance)
                          ) : (
                            <Alert severity="info" sx={{ mt: 2 }}>
                              Performance analysis will be available once the task is completed
                            </Alert>
                          )}
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Dialog 
        open={openDialog} 
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {selectedUser ? 'Edit User' : 'Add New User'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Name"
              fullWidth
              defaultValue={selectedUser?.name}
            />
            <TextField
              label="Email"
              fullWidth
              defaultValue={selectedUser?.email}
            />
            <FormControl fullWidth>
              <InputLabel>Interview Role</InputLabel>
              <Select
                label="Interview Role"
                defaultValue={selectedUser?.interviewRole || ''}
              >
                <MenuItem value="Software Engineer">Software Engineer</MenuItem>
                <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
                <MenuItem value="Backend Developer">Backend Developer</MenuItem>
                <MenuItem value="Full Stack Developer">Full Stack Developer</MenuItem>
                <MenuItem value="DevOps Engineer">DevOps Engineer</MenuItem>
                <MenuItem value="UX Designer">UX Designer</MenuItem>
                <MenuItem value="UI Designer">UI Designer</MenuItem>
                <MenuItem value="Product Designer">Product Designer</MenuItem>
                <MenuItem value="QA Engineer">QA Engineer</MenuItem>
                <MenuItem value="Data Scientist">Data Scientist</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                defaultValue={selectedUser?.status || 'Active'}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};