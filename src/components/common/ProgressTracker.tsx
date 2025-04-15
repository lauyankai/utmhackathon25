import React from 'react';
import { Box, Stepper, Step, StepLabel, StepContent, Typography } from '@mui/material';

interface ProgressStep {
  label: string;
  description?: string;
  completed: boolean;
}

interface ProgressTrackerProps {
  steps: ProgressStep[];
  activeStep: number;
  orientation?: 'horizontal' | 'vertical';
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  steps,
  activeStep,
  orientation = 'horizontal'
}) => {
  return (
    <Box sx={{ width: '100%', my: 2 }}>
      <Stepper activeStep={activeStep} orientation={orientation}>
        {steps.map((step, index) => (
          <Step key={step.label} completed={step.completed}>
            <StepLabel>
              <Typography variant="subtitle2">{step.label}</Typography>
            </StepLabel>
            {orientation === 'vertical' && step.description && (
              <StepContent>
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>
              </StepContent>
            )}
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};