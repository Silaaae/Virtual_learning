// src/pages/WebDesign.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function WebDesign() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box>
        <Typography variant="h3" gutterBottom>
          Web Design Principles
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to the Web Design Principles course! Here, you'll learn about UX/UI design, responsive layouts, color theory, typography, and more.
        </Typography>
        {/* Add more course content here */}
      </Box>
    </Container>
  );
}

export default WebDesign;
