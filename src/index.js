// src/index.js
import React, { useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GlobalProvider, useGlobalState } from './context/GlobalState';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from './theme';
import './styles/global.css'; // Ensure this file exists or adjust as needed

function Root() {
  return (
    <React.StrictMode>
      <GlobalProvider>
        <Router>
          <ThemedApp />
        </Router>
      </GlobalProvider>
    </React.StrictMode>
  );
}

function ThemedApp() {
  const { darkMode } = useGlobalState();

  const theme = useMemo(() => getTheme(darkMode ? 'dark' : 'light'), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Root />);
