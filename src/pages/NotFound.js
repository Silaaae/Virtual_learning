// src/pages/NotFound.js
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function NotFound() {
  return (
    <Container maxWidth="md" sx={{ mt: 10, textAlign: 'center' }}>
      <Box>
        <Typography variant="h1" color="error" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" gutterBottom>
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Button variant="contained" color="primary" component={RouterLink} to="/">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound;
