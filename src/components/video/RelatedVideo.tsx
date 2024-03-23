'use client'
import React from 'react';
import { Box, Typography } from '@mui/material';

const RelatedVideos = () => {
  return (
    <div>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Related Videos</Typography>
        <Box sx={{ mb: 2 }}>
          <img src='https://i.ytimg.com/vi/W6NZfCO5SIk/default.jpg' alt='哈哈' style={{ width: '200px', height: 'auto', marginRight: '10px', marginBottom: '5px' }} />
          <Typography variant="body1">很好看的视频</Typography>
        </Box>
    </div>
  );
};

export default RelatedVideos;
