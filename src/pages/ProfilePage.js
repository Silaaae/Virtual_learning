// src/pages/ProfilePage.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useGlobalState, useGlobalDispatch } from '../context/GlobalState';

// Styled component for the upload button
const Input = styled('input')({
  display: 'none',
});

function ProfilePage() {
  const { user } = useGlobalState();
  const dispatch = useGlobalDispatch();
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [profilePic, setProfilePic] = useState(user ? user.profilePic : '');
  const [preview, setPreview] = useState(user ? user.profilePic : '');

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert the image to a data URL for preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        setPreview(reader.result);
        // Update the global state if needed
        dispatch({
          type: 'UPDATE_PROFILE',
          payload: { profilePic: reader.result },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Implement save functionality, such as sending data to a backend
    alert('Profile updated successfully!');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar
              src={preview}
              sx={{ width: 100, height: 100, mb: 2 }}
            />
            <label htmlFor="profile-pic-upload">
              <Input
                accept="image/*"
                id="profile-pic-upload"
                type="file"
                onChange={handleProfilePicChange}
              />
              <Button variant="contained" component="span">
                Upload Profile Picture
              </Button>
            </label>
          </Box>
        </motion.div>
        <Box mt={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            {/* Add more fields as needed */}
          </Grid>
          <Box mt={4} textAlign="center">
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default ProfilePage;

