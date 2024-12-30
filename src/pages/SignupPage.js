import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password) => /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

    const handleSignup = (e) => {
        e.preventDefault();
        setError('');

        if (!validateEmail(email)) {
            setError('Veuillez entrer un email valide.');
            return;
        }

        if (!validatePassword(password)) {
            setError('Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, et un chiffre.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas.');
            return;
        }

        navigate('/profile');
    };

    return (
        <>
            <Navbar />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    background: 'linear-gradient(135deg, #a8edea, #fed6e3)',
                    animation: 'backgroundAnimation 10s infinite alternate',
                    '@keyframes backgroundAnimation': {
                        '0%': { backgroundPosition: '0% 50%' },
                        '50%': { backgroundPosition: '100% 50%' },
                        '100%': { backgroundPosition: '0% 50%' },
                    },
                    paddingBottom: 4,
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
                            borderRadius: 2,
                            boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.15)',
                            backgroundColor: '#ffffff',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.02)',
                            },
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h1"
                            gutterBottom
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#555',
                                letterSpacing: '1px',
                            }}
                        >
                            Inscription
                        </Typography>
                        {error && (
                            <Typography
                                color="error"
                                sx={{
                                    mb: 2,
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    animation: 'fadeIn 0.5s ease-in-out',
                                    '@keyframes fadeIn': {
                                        from: { opacity: 0 },
                                        to: { opacity: 1 },
                                    },
                                }}
                            >
                                {error}
                            </Typography>
                        )}
                        <Box component="form" onSubmit={handleSignup} noValidate>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{
                                    mb: 2,
                                    '& .MuiOutlinedInput-root': {
                                        transition: 'border-color 0.3s',
                                        '&:hover fieldset': {
                                            borderColor: '#6a0572',
                                        },
                                    },
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Mot de passe"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{
                                    mb: 2,
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#6a0572',
                                        },
                                    },
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Confirmer le mot de passe"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                sx={{
                                    mb: 2,
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#6a0572',
                                        },
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    backgroundColor: '#6a0572',
                                    color: '#ffffff',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                                    '&:hover': {
                                        backgroundColor: '#50014c',
                                    },
                                }}
                            >
                                S'inscrire
                            </Button>
                            <Button
                                variant="outlined"
                                fullWidth
                                onClick={() => navigate('/login')}
                                sx={{
                                    mt: 2,
                                    fontFamily: "'Poppins', sans-serif",
                                    textTransform: 'uppercase',
                                    borderColor: '#6a0572',
                                    color: '#6a0572',
                                    '&:hover': {
                                        backgroundColor: '#fbeaf8',
                                    },
                                }}
                            >
                                Déjà un compte ? Connectez-vous
                            </Button>
                        </Box>
                    </Paper>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default SignupPage;
