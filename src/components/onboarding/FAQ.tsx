import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Paper } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useScrollCompletion } from '../../hooks/useScrollCompletion';

export const FAQ: React.FC = () => {
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
          <Accordion key={index} disableGutters>
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
    </Box>
  );
};