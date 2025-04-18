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
  IconButton,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  TextField,
} from '@mui/material';
import {
  Upload as UploadIcon,
  Send as SendIcon,
  Delete as DeleteIcon,
  Schedule as ScheduleIcon,
  Assignment as AssignmentIcon,
} from '@mui/icons-material';

export const MyTasks: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<{ [key: string]: File[] }>({});
  const [openSubmitDialog, setOpenSubmitDialog] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [submitNotes, setSubmitNotes] = useState('');

  useEffect(() => {
    // Load tasks from localStorage
    const storedTasks = JSON.parse(localStorage.getItem('myTasks') || '[]');
    if (storedTasks.length === 0) {
      // Add an example task if no tasks exist
      const exampleTask = {
        projectId: 'example',
        projectTitle: 'Enterprise E-Commerce Platform',
        department: 'Platform Engineering',
        title: 'Product Catalog Service',
        description: 'Build a basic product catalog microservice with CRUD operations.',
        level: 'Entry',
        duration: '1-2 weeks',
        skills: ['Node.js', 'REST APIs', 'MongoDB'],
        status: 'In Progress',
        startDate: new Date().toISOString(),
        dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
      };
      localStorage.setItem('myTasks', JSON.stringify([exampleTask]));
      setTasks([exampleTask]);
    } else {
      setTasks(storedTasks);
    }
  }, []);

  const handleFileUpload = (taskId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setSelectedFiles(prev => ({
        ...prev,
        [taskId]: [...(prev[taskId] || []), ...files],
      }));
    }
  };

  const handleRemoveFile = (taskId: string, fileIndex: number) => {
    setSelectedFiles(prev => ({
      ...prev,
      [taskId]: prev[taskId].filter((_, index) => index !== fileIndex),
    }));
  };

  const handleSubmit = (taskId: string) => {
    setSelectedTaskId(taskId);
    setOpenSubmitDialog(true);
  };

  const handleConfirmSubmit = () => {
    if (selectedTaskId) {
      // In a real app, this would make an API call to submit the solution
      const updatedTasks = tasks.map(task => 
        task.projectId === selectedTaskId 
          ? { ...task, status: 'Submitted', submittedAt: new Date().toISOString() }
          : task
      );
      localStorage.setItem('myTasks', JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
      setOpenSubmitDialog(false);
      setSubmitNotes('');
      setSelectedTaskId(null);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: 'primary.main', fontWeight: 600 }}>
        My Tasks
      </Typography>

      <Stack spacing={3}>
        {tasks.map((task) => (
          <Paper key={task.projectId} sx={{ p: 3 }} elevation={2}>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    {task.projectTitle}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {task.title}
                  </Typography>
                </Box>
                <Chip 
                  label={task.status}
                  color={task.status === 'Submitted' ? 'success' : 'primary'}
                  size="small"
                />
              </Box>

              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Chip 
                  label={task.department}
                  variant="outlined"
                  size="small"
                />
                <Chip 
                  label={`Level: ${task.level}`}
                  variant="outlined"
                  size="small"
                />
              </Box>

              <Typography variant="body2" color="text.secondary" paragraph>
                {task.description}
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ScheduleIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {task.skills.map((skill: string, index: number) => (
                  <Chip
                    key={index}
                    label={skill}
                    size="small"
                    variant="outlined"
                  />
                ))}
              </Box>

              {task.status !== 'Submitted' && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" color="primary" gutterBottom>
                    Upload Solution Files
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button
                      variant="outlined"
                      component="label"
                      startIcon={<UploadIcon />}
                      sx={{ width: 'fit-content' }}
                    >
                      Upload Files
                      <input
                        type="file"
                        hidden
                        multiple
                        onChange={(e) => handleFileUpload(task.projectId, e)}
                      />
                    </Button>
                    
                    {selectedFiles[task.projectId]?.length > 0 && (
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="body2" gutterBottom>
                          Uploaded Files:
                        </Typography>
                        <Stack spacing={1}>
                          {selectedFiles[task.projectId].map((file, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Typography variant="body2" sx={{ flex: 1 }}>
                                {file.name}
                              </Typography>
                              <IconButton 
                                size="small" 
                                onClick={() => handleRemoveFile(task.projectId, index)}
                                color="error"
                              >
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </Box>
                          ))}
                        </Stack>
                      </Box>
                    )}

                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<SendIcon />}
                      disabled={!selectedFiles[task.projectId]?.length}
                      onClick={() => handleSubmit(task.projectId)}
                      sx={{ width: 'fit-content', mt: 2 }}
                    >
                      Submit Solution
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          </Paper>
        ))}
      </Stack>

      {/* Submit Confirmation Dialog */}
      <Dialog
        open={openSubmitDialog}
        onClose={() => setOpenSubmitDialog(false)}
        aria-labelledby="submit-dialog-title"
      >
        <DialogTitle id="submit-dialog-title">
          Submit Solution
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are about to submit your solution for review. This action cannot be undone.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Additional Notes"
            fullWidth
            multiline
            rows={4}
            value={submitNotes}
            onChange={(e) => setSubmitNotes(e.target.value)}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenSubmitDialog(false)} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleConfirmSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}; 