import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Avatar, Chip, IconButton, Stack } from '@mui/material';
import { Email as EmailIcon, LinkedIn as LinkedInIcon, GitHub as GitHubIcon } from '@mui/icons-material';

interface TeamMember {
  name: string;
  role: string;
  expertise: string[];
  email: string;
  linkedin: string;
  github: string;
  avatar: string;
  githubAvatar?: string;
}

export const Team: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      name: 'Lau Yan Kai',
      role: 'Engineering Director',
      expertise: ['Technical Leadership', 'System Architecture', 'Team Management'],
      email: 'lauyankai@graduate.utm.my',
      linkedin: 'linkedin.com/in/lauyankai',
      github: 'github.com/lauyankai',
      avatar: '🎯'
    },
    {
      name: 'Lee Yin Shen',
      role: 'Senior Software Engineer',
      expertise: ['Frontend Development', 'UI/UX Design', 'Performance Optimization'],
      email: 'leeyinshen2004@gmail.com',
      linkedin: 'linkedin.com/in/michaelc',
      github: 'github.com/leeyinshen0818',
      avatar: '💻'
    },
    {
      name: 'Brendan Chia Yan Fei',
      role: 'Backend Team Lead',
      expertise: ['API Design', 'Database Architecture', 'Cloud Infrastructure'],
      email: 'yan04@graduate.utm.my',
      linkedin: 'linkedin.com/in/brendan',
      github: 'github.com/Pegasus762',
      avatar: '🔧'
    },
    {
      name: 'Choh Jing Yi',
      role: 'DevOps Engineer',
      expertise: ['CI/CD', 'Infrastructure Automation', 'Security'],
      email: 'chohjingyi@gmail.com',
      linkedin: 'linkedin.com/in/chohjingyi',
      github: 'github.com/chohjingyia23cs0296',
      avatar: '🛠️'
    }
  ]);

  useEffect(() => {
    const fetchGithubAvatars = async () => {
      const updatedMembers = await Promise.all(
        teamMembers.map(async (member) => {
          try {
            const username = member.github.split('/').pop();
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            return { ...member, githubAvatar: data.avatar_url };
          } catch (error) {
            console.error(`Error fetching GitHub avatar for ${member.name}:`, error);
            return member;
          }
        })
      );
      setTeamMembers(updatedMembers);
    };

    fetchGithubAvatars();
  }, []);

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Meet Your Team
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Get to know the key members of our engineering team who will be working with you
        and supporting your journey.
      </Typography>

      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 4,
        justifyContent: 'flex-start'
      }}>
        {teamMembers.map((member, index) => (
          <Box
            key={index}
            sx={{
              flexBasis: {
                xs: '100%',
                sm: 'calc(50% - 16px)',
                md: 'calc(50% - 16px)'
              },
              minWidth: 0
            }}
          >
            <Card elevation={2}>
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Avatar
                    src={member.githubAvatar}
                    alt={member.name}
                    sx={{
                      width: 80,
                      height: 80,
                      fontSize: '2rem',
                      bgcolor: 'primary.main',
                      margin: '0 auto'
                    }}
                  >
                    {member.avatar}
                  </Avatar>
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {member.role}
                  </Typography>
                </Box>

                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2, justifyContent: 'center' }}>
                  {member.expertise.map((skill, skillIndex) => (
                    <Chip
                      key={skillIndex}
                      label={skill}
                      size="small"
                      variant="outlined"
                      sx={{ margin: '2px' }}
                    />
                  ))}
                </Stack>

                <Stack direction="row" spacing={1} justifyContent="center">
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => window.open(`mailto:${member.email}`)}
                  >
                    <EmailIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => window.open(`https://${member.linkedin}`, '_blank')}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => window.open(`https://${member.github}`, '_blank')}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};