// src/pages/QuizPage.js
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function QuizPage() {
  // Sample quizzes data
  const quizzes = [
    {
      title: 'React Basics Quiz',
      description: 'Test your knowledge on React fundamentals.',
      link: '/quizzes/react-basics',
    },
    {
      title: 'Advanced JavaScript Quiz',
      description: 'Challenge yourself with advanced JavaScript questions.',
      link: '/quizzes/advanced-js',
    },
    {
      title: 'Web Design Principles Quiz',
      description: 'Evaluate your understanding of web design concepts.',
      link: '/quizzes/web-design',
    },
    // Add more quizzes as needed
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Available Quizzes
      </Typography>
      <Grid container spacing={4}>
        {quizzes.map((quiz, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {quiz.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {quiz.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: 'auto' }}>
                <Button size="small" component={RouterLink} to={quiz.link}>
                  Start Quiz
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default QuizPage;
