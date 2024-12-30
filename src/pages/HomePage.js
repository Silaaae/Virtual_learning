// src/pages/HomePage.js
import React, { useState, useEffect, useMemo } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Pagination,
  CircularProgress,
  Alert,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
function HomePage() {
  // Sample courses data
  const courses = [
    {
      title: 'Introduction to React',
      description: 'Learn the basics of React, including components, state, and props.',
      image: 'https://via.placeholder.com/400x200?text=React+Course', // Replace this with a valid URL
      link: '/courses/react',
    },
    {
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript ES6+, asynchronous programming, and more.',
      image: 'https://via.placeholder.com/400x200?text=JavaScript+Course', // Replace this with a valid URL
      link: '/courses/javascript',
    },
    {
      title: 'Web Design Principles',
      description: 'Understand the fundamentals of web design, UX/UI, and responsive layouts.',
      image: 'https://via.placeholder.com/400x200?text=Web+Design+Course', // Replace this with a valid URL
      link: '/courses/web-design',
    },
  ];
  

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 20;
  const [nextPageToken, setNextPageToken] = useState(null);
  const [error, setError] = useState('');

  // Function to fetch videos from backend
  const fetchVideos = async (pageToken = '') => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:5000/api/videos', {
        params: {
          searchTerm: searchTerm || 'programming',
          maxResults: 50, // YouTube API max is 50 per request
          pageToken,
        },
      });

      const fetchedVideos = response.data.videos.map((video) => ({
        id: video.id,
        title: video.title,
        url: video.url,
        views: parseInt(video.views),
        likes: parseInt(video.likes),
        comments: parseInt(video.comments),
        description: video.description,
        thumbnail: video.thumbnail,
      }));

      setVideos((prevVideos) => [...prevVideos, ...fetchedVideos]);
      setNextPageToken(response.data.nextPageToken);
    } catch (err) {
      console.error('Error fetching videos:', err.message);
      setError('Failed to fetch videos. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch videos on initial render and when searchTerm changes
  useEffect(() => {
    // Reset videos when search term changes
    setVideos([]);
    setCurrentPage(1);
    setNextPageToken(null);
    fetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
    setCurrentPage(1);
  };

  const filteredVideos = useMemo(() => {
    let filtered = videos;

    if (filterOption === 'mostViewed') {
      filtered = [...filtered].sort((a, b) => b.views - a.views);
    } else if (filterOption === 'mostLiked') {
      filtered = [...filtered].sort((a, b) => b.likes - a.likes);
    } else if (filterOption === 'mostCommented') {
      filtered = [...filtered].sort((a, b) => b.comments - a.comments);
    }

    return filtered;
  }, [videos, filterOption]);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    // If nearing the end, fetch more videos
    if (value * videosPerPage > filteredVideos.length - videosPerPage / 2 && nextPageToken) {
      fetchVideos(nextPageToken);
    }
  };

  return (
    <>
      <Navbar />
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Welcome Section */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to the Virtual Learning Hub
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Explore a wide range of courses to enhance your skills and knowledge.
        </Typography>
        <Button variant="contained" color="primary" size="large" component={RouterLink} to="/auth" sx={{ mt: 3 }}>
          Get Started
        </Button>
      </Box>

      {/* Courses Section */}
      <Typography variant="h4" gutterBottom>
        Our Courses
      </Typography>
      <Grid container spacing={4}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={course.image}
                alt={course.title}
                loading="lazy"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: 'auto' }}>
                <Button size="small" component={RouterLink} to={course.link}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Featured Videos Section */}
      <Box mt={6}>
        <Typography variant="h4" gutterBottom>
          Featured Videos
        </Typography>
        {/* Search and Filter */}
        <Box mb={4} display="flex" justifyContent="space-between" alignItems="center">
          <TextField
            label="Search Videos"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ width: '60%' }}
            placeholder="Search for videos..."
          />
          <FormControl variant="outlined" sx={{ width: '35%' }}>
            <InputLabel>Filter By</InputLabel>
            <Select
              label="Filter By"
              value={filterOption}
              onChange={handleFilterChange}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="mostViewed">Most Viewed</MenuItem>
              <MenuItem value="mostLiked">Most Liked</MenuItem>
              <MenuItem value="mostCommented">Most Commented</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* Display Error Message */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {/* Videos Grid */}
        <Grid container spacing={4}>
          {currentVideos.length > 0 ? (
            currentVideos.map((video) => (
              <Grid item xs={12} sm={6} md={4} key={video.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box sx={{ position: 'relative', paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                    <iframe
                      src={video.url}
                      title={video.title}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 0,
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {video.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Views: {video.views.toLocaleString()} | Likes: {video.likes.toLocaleString()} | Comments: {video.comments.toLocaleString()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {video.description.substring(0, 100)}...
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            !loading && (
              <Typography variant="body1" color="textSecondary">
                No videos found for "{searchTerm}". Try a different search term.
              </Typography>
            )
          )}
        </Grid>
        {/* Loading Indicator */}
        {loading && (
          <Box mt={4} display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        )}
        {/* Pagination */}
        <Box mt={4} display="flex" justifyContent="center">
          {totalPages > 1 && (
            <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} color="primary" />
          )}
        </Box>
      </Box>
    </Container>
    <Footer /> 
    </>
  );
}

export default HomePage;
