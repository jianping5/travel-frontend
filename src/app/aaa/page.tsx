'use client'
import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import VideoThumbnail from 'react-video-thumbnail';

const UploadVideoWithThumbnail = () => {
  const [fileName, setFileName] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);

      const blobUrl = URL.createObjectURL(file);
      setThumbnail(blobUrl);
    }
  };

  return (
    <Box sx={{ mt: 1, mb: 1, display: 'flex', alignItems: 'center' }}>
      <label htmlFor="upload-file-input" style={{ marginRight: 10 }}>
        <Button
          component="span"
          variant="contained"
          sx={{ height: '45px', width: '170px', borderRadius: '7px', fontWeight: 'bold' }}
          startIcon={<CloudUpload />}
        >
          Upload File
        </Button>
      </label>
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="upload-file-input"
      />
      {thumbnail && (
        <Box ml={2} width={105} >
          <VideoThumbnail videoUrl={thumbnail} />
        </Box>
      )}
      {fileName && <span style={{ marginLeft: 7 }}>{fileName}</span>}
    </Box>
  );
};

export default UploadVideoWithThumbnail;
