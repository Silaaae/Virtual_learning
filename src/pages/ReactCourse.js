// src/pages/ReactCourse.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function ReactCourse() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box>
        <Typography variant="h3" gutterBottom>
          Introduction to React
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to the Introduction to React course! Here, you'll learn about React components, state management, props, and the React lifecycle.
        </Typography>
        {/* Add more course content here */}
      </Box>
    </Container>
  );
}

export default ReactCourse;
