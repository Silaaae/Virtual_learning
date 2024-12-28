// backend/server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint to fetch videos with statistics
app.get('/api/videos', async (req, res) => {
  const { searchTerm = 'programming', maxResults = 50, pageToken } = req.query;

  try {
    // Fetch videos based on search term
    const searchResponse = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: searchTerm,
        type: 'video',
        maxResults,
        pageToken,
        key: process.env.YOUTUBE_API_KEY,
      },
    });

    const videoIds = searchResponse.data.items.map(item => item.id.videoId).join(',');

    // Fetch statistics for the videos
    const statsResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'statistics',
        id: videoIds,
        key: process.env.YOUTUBE_API_KEY,
      },
    });

    // Combine video data with statistics
    const videos = searchResponse.data.items.map(item => {
      const stats = statsResponse.data.items.find(v => v.id === item.id.videoId)?.statistics;
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        url: `https://www.youtube.com/embed/${item.id.videoId}`,
        views: stats?.viewCount || 0,
        likes: stats?.likeCount || 0,
        comments: stats?.commentCount || 0,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
      };
    });

    res.json({
      videos,
      nextPageToken: searchResponse.data.nextPageToken,
    });
  } catch (error) {
    console.error('Error fetching videos:', error.message);
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
