import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

export interface SidebarProps {
  items: Array<{
    label: string;
    onClick: () => void;
    active: boolean;
  }>;
}

export const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <Box
      sx={{
        width: 280,
        flexShrink: 0,
        borderRight: 1,
        borderColor: 'divider',
      }}
    >
      <List>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={item.onClick}
              selected={item.active}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};