import React from 'react';
import { Box, Fab } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ChatbotButton = () => {
  const handleChatClick = () => {
    window.open('https://herbal-garden-chatbot.vercel.app/', '_blank');
  };

  const handleLocationClick = () => {
    window.open('https://nurseries-herbal-garden.vercel.app/', '_blank');
  };

  return (
    <Box sx={{ 
      position: 'fixed',
      bottom: 20,
      right: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }}>
      <Fab
        color="primary"
        aria-label="find-nurseries"
        sx={{
          backgroundColor: '#4CAF50',
          '&:hover': {
            backgroundColor: '#388E3C'
          }
        }}
        onClick={handleLocationClick}
      >
        <LocationOnIcon />
      </Fab>
      <Fab
        color="primary"
        aria-label="chat"
        sx={{
          backgroundColor: '#009688',
          '&:hover': {
            backgroundColor: '#00796B'
          }
        }}
        onClick={handleChatClick}
      >
        <ChatIcon />
      </Fab>
    </Box>
  );
};

export default ChatbotButton; 