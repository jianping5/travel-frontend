'use client'
import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import CloudUpload from '@mui/icons-material/CloudUpload';
import VideoThumbnail from 'react-video-thumbnail';

const UploadFileButton = ({ onChange }: { onChange: (file: File | null) => void }) => {
  const [fileName, setFileName] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [thumbnailKey, setThumbnailKey] = useState(0); // Key to force re-render

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      
      // Generate thumbnail URL with random parameter to prevent caching
      const blobUrl = URL.createObjectURL(file);
      setThumbnailUrl(blobUrl);
      setThumbnailKey(prevKey => prevKey + 1); // Update key to force re-render

      // Call the onChange callback to pass the thumbnail file to the parent component
      onChange(file);
    }
  };
  
  return (
    <Box sx={{ mt: 1, mb: 1, display: 'flex', alignItems: 'center', border: '1px solid #ccc', p: 1, borderRadius: '7px', height: '150px'}}>
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
      {thumbnailUrl && (
        <Box ml={2} width={105}>
          <VideoThumbnail key={thumbnailKey} videoUrl={thumbnailUrl} />
        </Box>
      )}
      {fileName && <span style={{ marginLeft: 7 }}>{fileName}</span>}
    </Box>
  );
};

export default UploadFileButton;
