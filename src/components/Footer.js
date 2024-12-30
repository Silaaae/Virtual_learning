// src/components/Footer.js
import React from 'react';
import { Container, Typography, Box, Grid, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#282c34', color: 'white', py: 4 }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            À propos
                        </Typography>
                        <Typography variant="body2">
                            Virtual Learning Hub est une plateforme dédiée à l'apprentissage en ligne, offrant une variété de cours pour améliorer vos compétences et connaissances.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Liens Utiles
                        </Typography>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li>
                                <Link href="/" color="inherit" underline="hover">Accueil</Link>
                            </li>
                            <li>
                                <Link href="/help" color="inherit" underline="hover">Aide</Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Suivez-nous
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Link href="https://facebook.com" target="_blank" color="inherit">
                                <Facebook />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" color="inherit">
                                <Twitter />
                            </Link>
                            <Link href="https://instagram.com" target="_blank" color="inherit">
                                <Instagram />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" color="inherit">
                                <LinkedIn />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Typography variant="body2">
                        &copy; {new Date().getFullYear()} Virtual Learning Hub. Tous droits réservés.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
