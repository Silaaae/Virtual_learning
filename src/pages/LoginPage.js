// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        if (!validateEmail(email)) {
            setError('Veuillez entrer un email valide.');
            return;
        }

        if (password.length < 8) {
            setError('Le mot de passe doit contenir au moins 8 caractères.');
            return;
        }   

        // Si toutes les validations passent, naviguer vers Dashboard
        navigate('/dashboard');
    };

    return (
        <>
            <Navbar />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    backgroundColor: '#e3f2fd', // Fond bleu clair
                    animation: 'fadeIn 1.5s ease-out', // Animation d'apparition
                    '@keyframes fadeIn': {
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                    },
                }}
            >
                <Container
                    component="main"
                    maxWidth="xs"
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 2,
                    }}
                >
                    <Paper
                        elevation={6}
                        sx={{
                            padding: 4,
                            borderRadius: 3,
                            backgroundColor: '#ffffff',
                            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
                            animation: 'slideIn 1.2s ease-out', // Animation glissante
                            '@keyframes slideIn': {
                                from: { transform: 'translateY(-50px)', opacity: 0 },
                                to: { transform: 'translateY(0)', opacity: 1 },
                            },
                        }}
                    >
                        <Typography
                            variant="h5"
                            component="h1"
                            gutterBottom
                            sx={{
                                fontFamily: "'Poppins', sans-serif", // Police moderne
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#1976d2', // Couleur primaire
                            }}
                        >
                            Connexion
                        </Typography>
                        {error && (
                            <Typography
                                color="error"
                                sx={{
                                    mb: 2,
                                    textAlign: 'center',
                                    animation: 'shake 0.5s ease-out', // Animation de secousse pour les erreurs
                                    '@keyframes shake': {
                                        '0%': { transform: 'translateX(0)' },
                                        '25%': { transform: 'translateX(-5px)' },
                                        '50%': { transform: 'translateX(5px)' },
                                        '75%': { transform: 'translateX(-5px)' },
                                        '100%': { transform: 'translateX(0)' },
                                    },
                                }}
                            >
                                {error}
                            </Typography>
                        )}
                        <Box component="form" onSubmit={handleLogin} noValidate>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{ mb: 2, borderRadius: 1, '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Mot de passe"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{ mb: 2, borderRadius: 1, '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={!email || !password} // Désactivé si les champs ne sont pas remplis
                                onClick={(e) => {
                                    e.preventDefault(); // Empêche l'envoi par défaut du formulaire
                                    if (email && password && validateEmail(email) && password.length >= 8) {
                                        navigate('/dashboard'); // Redirige vers le Dashboard après validation
                                    } else {
                                        handleLogin(e); // Appelle handleLogin pour afficher les erreurs
                                    }
                                }}
                                sx={{
                                    mt: 2,
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    backgroundColor: !email || !password ? '#cccccc' : '#1976d2', // Couleur grise si désactivé
                                    '&:hover': {
                                        backgroundColor: !email || !password ? '#cccccc' : '#1565c0',
                                    },
                                }}
                            >
                                Se connecter
                            </Button>
                            <Button
                                variant="outlined"
                                fullWidth
                                onClick={() => navigate('/signup')}
                                sx={{
                                    mt: 2,
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    color: '#1976d2',
                                    borderColor: '#1976d2',
                                    '&:hover': {
                                        backgroundColor: '#e3f2fd',
                                        borderColor: '#1565c0',
                                        color: '#1565c0',
                                    },
                                }}
                            >
                                S'inscrire
                            </Button>
                        </Box>
                    </Paper>
                </Container>
            </Box>
            <Footer
                sx={{
                    backgroundColor: '#1976d2',
                    color: 'white',
                    padding: 2,
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    animation: 'fadeIn 2s ease-out',
                }}
            />
        </>
    );
};

export default LoginPage;
