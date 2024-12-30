// src/pages/HelpPage.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HelpPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh', // La page couvre toute la hauteur de la fenêtre
                backgroundColor: '#f3f4f6', // Fond doux et moderne
                fontFamily: "'Poppins', sans-serif", // Police moderne
            }}
        >
            {/* Navbar */}
            <Navbar />

            {/* Contenu principal */}
            <Container
                maxWidth="md"
                sx={{
                    flex: 1,
                    marginY: 4, // Espace vertical autour du contenu
                    padding: 3,
                    backgroundColor: '#ffffff',
                    borderRadius: 2,
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Ombre subtile
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: '#1976d2', // Couleur primaire
                        textAlign: 'center',
                        animation: 'fadeIn 1.5s ease-out', // Animation
                    }}
                >
                    Aide
                </Typography>
                <Box
                    sx={{
                        '@keyframes fadeIn': {
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                        },
                    }}
                >
                    <Box
                        sx={{
                            mb: 3,
                            animation: 'slideIn 1s ease-out',
                            '@keyframes slideIn': {
                                from: { transform: 'translateX(-50%)', opacity: 0 },
                                to: { transform: 'translateX(0)', opacity: 1 },
                            },
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                            Comment utiliser notre plateforme
                        </Typography>
                        <Typography sx={{ color: '#555' }}>
                            Bienvenue sur le Virtual Learning Hub. Voici quelques conseils pour vous aider à naviguer sur notre plateforme.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 3, animation: 'slideIn 1.2s ease-out' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                            Connexion
                        </Typography>
                        <Typography sx={{ color: '#555' }}>
                            Pour vous connecter, cliquez sur le bouton "Login" en haut à droite et entrez vos informations d'identification.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 3, animation: 'slideIn 1.4s ease-out' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                            Inscription
                        </Typography>
                        <Typography sx={{ color: '#555' }}>
                            Si vous n'avez pas encore de compte, cliquez sur "Signup" pour créer un nouveau compte.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 3, animation: 'slideIn 1.6s ease-out' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                            Accès au tableau de bord
                        </Typography>
                        <Typography sx={{ color: '#555' }}>
                            Une fois connecté, vous pouvez accéder à votre tableau de bord pour voir vos cours et résultats.
                        </Typography>
                    </Box>
                </Box>
            </Container>

            {/* Footer */}
            <Footer
                sx={{
                    backgroundColor: '#1976d2',
                    color: 'white',
                    textAlign: 'center',
                    padding: 2,
                    fontSize: '0.9rem',
                    animation: 'fadeIn 2s ease-out',
                }}
            />
        </Box>
    );
};

export default HelpPage;
