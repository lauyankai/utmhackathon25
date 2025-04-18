import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Chip,
  Divider,
  Alert,
  AlertTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  LinearProgress,
  Stack,
} from '@mui/material';
import {
  Assignment as AssignmentIcon,
  CloudUpload as CloudUploadIcon,
  Delete as DeleteIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
  Description as DescriptionIcon,
} from '@mui/icons-material';

interface TaskFile {
  name: string;
  size: number;
  type: string;
}

export const MyTasks: React.FC = () => {
  // In a real app, this would come from your global state management
  const selectedTask = {
    projectId: 1,
    title: 'Product Catalog Service',
    description: 'Build a basic product catalog microservice with CRUD operations.',
    level: 'Entry',
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
  };

  const [files, setFiles] = useState<TaskFile[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []).map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));
    setFiles([...files, ...newFiles]);
  };

  const handleRemoveFile = (fileName: string) => {
    setFiles(files.filter(file => file.name !== fileName));
  };

  const handleSubmit = async () => {
    if (files.length === 0) {
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (!selectedTask) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="info">
          <AlertTitle>No Task Selected</AlertTitle>
          Please select a task from the Available Projects section to begin your assessment.
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: 'primary.main', fontWeight: 600 }}>
        My Assessment Task
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }} elevation={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <AssignmentIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6">{selectedTask.title}</Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
          <Chip 
            label={`Level: ${selectedTask.level}`}
            color="primary"
            size="small"
          />
          <Chip 
            label={`Duration: ${selectedTask.duration}`}
            color="default"
            size="small"
            icon={<ScheduleIcon />}
          />
          <Chip 
            label={`${selectedTask.matchScore}% Match`}
            color="success"
            size="small"
          />
        </Box>

        <Typography variant="body1" paragraph>
          {selectedTask.description}
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Implementation Instructions:
          </Typography>
          <List dense>
            {selectedTask.instructions.map((instruction, index) => (
              <ListItem key={index}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon color="disabled" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={instruction} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Submit Your Work
          </Typography>
          
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileUpload}
            multiple
          />

          <Box sx={{ mb: 2 }}>
            <Button
              variant="outlined"
              startIcon={<CloudUploadIcon />}
              onClick={() => fileInputRef.current?.click()}
              disabled={isSubmitting || submitSuccess}
            >
              Upload Files
            </Button>
          </Box>

          {files.length > 0 && (
            <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Uploaded Files:
              </Typography>
              <List dense>
                {files.map((file, index) => (
                  <ListItem
                    key={index}
                    secondaryAction={
                      <IconButton 
                        edge="end" 
                        aria-label="delete"
                        onClick={() => handleRemoveFile(file.name)}
                        disabled={isSubmitting || submitSuccess}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemIcon>
                      <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText 
                      primary={file.name}
                      secondary={formatFileSize(file.size)}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}

          {isSubmitting && (
            <Box sx={{ width: '100%', mb: 2 }}>
              <LinearProgress />
            </Box>
          )}

          {submitSuccess ? (
            <Alert severity="success">
              <AlertTitle>Submission Successful!</AlertTitle>
              Your work has been submitted successfully. Our team will review your submission and provide feedback soon.
            </Alert>
          ) : (
            <Button
              variant="contained"
              color="primary"
              disabled={files.length === 0 || isSubmitting}
              onClick={handleSubmit}
            >
              Submit Assessment
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
}; 