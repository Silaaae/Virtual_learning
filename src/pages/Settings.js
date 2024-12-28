// src/pages/Settings.js
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  FormControlLabel,
  Switch,
  TextField,
  Button,
} from '@mui/material';
import { useGlobalState, useGlobalDispatch } from '../context/GlobalState';

function Settings() {
  const { darkMode } = useGlobalState();
  const dispatch = useGlobalDispatch();
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const handleDarkModeToggle = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  const handleChangePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return;
    }
    // Implement password change functionality here
    alert('Password changed successfully!');
    setPassword('');
    setConfirmPassword('');
    setPasswordError('');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        {/* Dark Mode Toggle */}
        <Box sx={{ mb: 4 }}>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={handleDarkModeToggle} />}
            label="Dark Mode"
          />
        </Box>
        {/* Change Password Section */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Change Password
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              label="New Password"
              type="password"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={passwordError !== ''}
              helperText={passwordError}
            />
            <Button variant="contained" color="primary" onClick={handleChangePassword}>
              Change Password
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Settings;
