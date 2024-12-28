// src/pages/AdvancedJavaScript.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function AdvancedJavaScript() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box>
        <Typography variant="h3" gutterBottom>
          Advanced JavaScript
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to the Advanced JavaScript course! Here, you'll dive deep into complex JavaScript concepts, including closures, prototypes, asynchronous programming, and more.
        </Typography>
        {/* Add more course content here */}
      </Box>
    </Container>
  );
}

export default AdvancedJavaScript;
