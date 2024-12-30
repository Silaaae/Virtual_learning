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
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        setPreview(reader.result);
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
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper
        elevation={3}
        sx={{
          p: 5,
          borderRadius: 3,
          background: 'linear-gradient(135deg, #f5f5f5, #e3e3e3)',
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          {/* Profile Picture Section */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            <Avatar
              src={preview}
              sx={{
                width: 120,
                height: 120,
                mb: 2,
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
              }}
            />
          </motion.div>
          <label htmlFor="profile-pic-upload">
            <Input
              accept="image/*"
              id="profile-pic-upload"
              type="file"
              onChange={handleProfilePicChange}
            />
            <Button variant="outlined" component="span" sx={{ mt: 1 }}>
              Upload New Picture
            </Button>
          </label>
        </Box>

        {/* Profile Details Section */}
        <Box mt={4}>
          <Typography variant="h5" align="center" sx={{ mb: 3, fontWeight: 'bold' }}>
            Edit Your Profile
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ backgroundColor: '#fff', borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ backgroundColor: '#fff', borderRadius: 1 }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Save Changes Button */}
        <Box mt={5} textAlign="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{
              px: 5,
              py: 1.5,
              fontSize: '1rem',
              borderRadius: 2,
              backgroundColor: '#4caf50',
              '&:hover': { backgroundColor: '#388e3c' },
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default ProfilePage;