// src/pages/Dashboard.js
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Box,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/Person';
import { useGlobalState } from '../context/GlobalState';

function Dashboard() {
  const { user } = useGlobalState();

  // Define the stats array to prevent undefined errors
  const stats = [
    { title: 'Courses Enrolled', value: 12, icon: <SchoolIcon /> },
    { title: 'Quizzes Taken', value: 34, icon: <AssessmentIcon /> },
    { title: 'Profile Views', value: 56, icon: <PersonIcon /> },
    // Add more stats as needed
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={4}>
        {stats && stats.length > 0 ? (
          stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                      {stat.icon}
                    </Avatar>
                  }
                  title={stat.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {stat.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No statistics available.</Typography>
        )}
      </Grid>
      {/* Add more dashboard content here as needed */}
    </Container>
  );
}

export default Dashboard;
