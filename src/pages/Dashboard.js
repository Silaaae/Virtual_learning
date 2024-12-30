import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Box,
  TextField,
  Button,
  Paper,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/Person';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Dashboard() {
  // State for user name
  const [userName, setUserName] = useState('Loading...'); // Placeholder name while fetching

  // Mock stats data
  const stats = [
    { title: 'Courses Enrolled', value: 12, icon: <SchoolIcon />, color: '#4caf50' },
    { title: 'Quizzes Taken', value: 34, icon: <AssessmentIcon />, color: '#ff9800' },
    { title: 'Profile Views', value: 56, icon: <PersonIcon />, color: '#2196f3' },
  ];

  // Chart data for progress visualization
  const chartData = {
    labels: ['Courses', 'Quizzes', 'Profile Views'],
    datasets: [
      {
        label: 'User Progress',
        data: [12, 34, 56],
        backgroundColor: ['#4caf50', '#ff9800', '#2196f3'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };

  // Simulate fetching user data from the backend
  useEffect(() => {
    const fetchUserName = async () => {
      // Simulate a delay to mimic backend API call
      setTimeout(() => {
        setUserName('John Doe'); // Replace with fetched data later
      }, 1000); // 1-second delay
    };

    fetchUserName();
  }, []);

  return (
    <>
    <Navbar/>
    <Box
      sx={{
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        {/* Welcome Header */}
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 5 }}>
          Welcome, {userName}!
        </Typography>

        {/* Stats Cards */}
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                  backgroundColor: stat.color,
                  color: '#fff',
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: '#fff',
                        color: stat.color,
                        width: 56,
                        height: 56,
                      }}
                    >
                      {stat.icon}
                    </Avatar>
                  }
                  title={stat.title}
                  titleTypographyProps={{ variant: 'h6', textAlign: 'center' }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" fontWeight="bold">
                    {stat.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Progress Graph */}
        <Box mt={6}>
          <Typography variant="h5" gutterBottom>
            Progress Overview
          </Typography>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Bar data={chartData} options={chartOptions} />
          </Paper>
        </Box>

        {/* Floating Widget */}
        <Box
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            width: 300,
            p: 3,
            boxShadow: 4,
            borderRadius: 2,
            backgroundColor: '#ffffff',
            zIndex: 10,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Today's Goal
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Complete 1 quiz and enroll in 1 new course!
          </Typography>
        </Box>

        {/* Comment Section */}
        <Box mt={6}>
          <Typography variant="h5" gutterBottom>
            Leave a Comment
          </Typography>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="body1" gutterBottom>
              Share your thoughts or ask a question!
            </Typography>
            <TextField
              fullWidth
              placeholder="Write your comment here..."
              multiline
              rows={4}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary">
              Post Comment
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
    <Footer/>
    </>
  );
}

export default Dashboard;