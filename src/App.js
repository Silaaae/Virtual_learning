// src/App.js
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './PrivateRoute';
import ErrorBoundary from './components/ErrorBoundary';
import { CircularProgress, Container } from '@mui/material';

// Lazy load components for performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const QuizPage = lazy(() => import('./pages/QuizPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const Settings = lazy(() => import('./pages/Settings'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AdvancedJavaScript = lazy(() => import('./pages/AdvancedJavaScript'));
const ReactCourse = lazy(() => import('./pages/ReactCourse'));
// Add more course pages as needed

function App() {
  return (
    <ErrorBoundary>
      <Navbar />
      <Suspense
        fallback={
          <Container sx={{ mt: 10, textAlign: 'center' }}>
            <CircularProgress />
          </Container>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/quiz"
            element={
              <PrivateRoute>
                <QuizPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          {/* Course Detail Routes */}
          <Route
            path="/courses/javascript"
            element={
              <PrivateRoute>
                <AdvancedJavaScript />
              </PrivateRoute>
            }
          />
          <Route
            path="/courses/react"
            element={
              <PrivateRoute>
                <ReactCourse />
              </PrivateRoute>
            }
          />
          {/* Add more course routes as needed */}
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
