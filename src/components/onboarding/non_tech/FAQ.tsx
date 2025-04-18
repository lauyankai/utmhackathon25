import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Paper, Button } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useOnboardingProgress } from '../../../store/onboardingProgress';
import { useScrollCompletion } from '../../../hooks/useScrollCompletion';

export const FAQ: React.FC = () => {
  const navigate = useNavigate();
  const completeSection = useOnboardingProgress(state => state.completeSection);
  const completionPercentage = useOnboardingProgress(state => state.getCompletionPercentage());
  const [viewedQuestions, setViewedQuestions] = useState<Set<number>>(new Set());

  const handleNext = () => {
    navigate('/technical-intro');
  };

  useScrollCompletion('faq');

  const faqs = [
    {
      question: 'What is the typical work schedule?',
      answer: 'We have flexible working hours with core hours from 10 AM to 4 PM. Team members can adjust their schedules around these hours to maintain work-life balance.'
    },
    {
      question: 'How do I request time off?',
      answer: 'Time off requests are managed through our HR portal. Submit your request at least two weeks in advance for planned leave. Emergency situations are handled case by case.'
    },
    {
      question: 'What is the code review process?',
      answer: 'All code changes require at least one peer review before merging. Create a pull request, assign relevant reviewers, and address any feedback before merging.'
    },
    {
      question: 'How do I get IT support?',
      answer: 'For IT support, create a ticket through our help desk portal or contact the IT support team directly at it-support@company.com for urgent issues.'
    },
    {
      question: 'What learning resources are available?',
      answer: 'We provide access to online learning platforms, internal documentation, mentorship programs, and regular training sessions. Check the Learning Portal for more details.'
    },
    {
      question: 'How are projects assigned?',
      answer: 'Projects are assigned based on team capacity, individual skills, and development goals. Regular 1:1s with your manager help align project assignments with your career growth.'
    },
    {
      question: 'What is the deployment process?',
      answer: 'We follow a CI/CD pipeline. Code merged to main is automatically deployed to staging. Production deployments happen after QA approval and during designated deployment windows.'
    },
    {
      question: 'How do I contribute to documentation?',
      answer: 'Our documentation is maintained in a Git repository. You can contribute by creating pull requests with your changes or additions to the documentation.'
    }
  ];

  const handleAccordionChange = (index: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    if (isExpanded) {
      const newViewedQuestions = new Set([...viewedQuestions, index]);
      setViewedQuestions(newViewedQuestions);
      
      // If all questions have been viewed, complete the section
      if (newViewedQuestions.size === faqs.length) {
        completeSection('faq');
      }
    }
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Find answers to common questions about working at our company. If you don't find what you're
        looking for, feel free to ask your manager or team members.
      </Typography>

      <Paper elevation={2} sx={{ mt: 4 }}>
        {faqs.map((faq, index) => (
          <Accordion 
            key={index} 
            disableGutters
            onChange={handleAccordionChange(index)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: 'background.default',
                '&:hover': {
                  backgroundColor: 'action.hover'
                }
              }}
            >
              <Typography variant="subtitle1">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<ArrowForwardIcon />}
          onClick={handleNext}
          disabled={completionPercentage < 100}
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 2,
            fontSize: '1.1rem',
            textTransform: 'none',
            background: 'linear-gradient(90deg, #2563eb 0%, #0ea5e9 100%)',
            '&:hover': {
              background: 'linear-gradient(90deg, #1d4ed8 0%, #0284c7 100%)',
            },
            '&.Mui-disabled': {
              background: 'rgba(0, 0, 0, 0.12)',
              color: 'rgba(0, 0, 0, 0.26)'
            }
          }}
        >
          Next: Technical Section
        </Button>
      </Box>
    </Box>
  );
};