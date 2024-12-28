// src/theme.js
import { createTheme } from '@mui/material/styles';

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#1976d2', // Customize your primary color
      },
      secondary: {
        main: '#dc004e', // Customize your secondary color
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });

export default getTheme;
