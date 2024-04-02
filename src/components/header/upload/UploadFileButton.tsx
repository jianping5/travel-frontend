'use client'
import React, { useState } from 'react';
import { Box, Card, CardMedia, Button, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';

const UploadCard = ({ onChange }: { onChange: (file: File | null) => void }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      onChange(selectedFile)
    }
  };

  const handleDelete = () => {
    setFile(null);
    onChange(null);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ border: '1px solid #ccc', borderRadius: '7px', mt: '7px'}}>
      <Card sx={{ width:'100%' }}>
        {!file ? (
          <Box display="flex" justifyContent="center" alignItems="center" height={320}>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              id="upload-file-input"
            />
            <label htmlFor="upload-file-input">
              <Button
                variant="contained"
                component="span"
                startIcon={<CloudUploadIcon />}
              >
                Upload Video
              </Button>
            </label>
          </Box>
        ) : (
          <Box position="relative" sx={{ width: '100%', height: 0, paddingTop: '56.25%' }}>
              <video controls style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain' }}>
                <source src={URL.createObjectURL(file)} type={file.type} />
                Your browser does not support the video tag.
              </video>
            <IconButton
              aria-label="delete"
              onClick={handleDelete}
              sx={{ position: 'absolute', top: 5, right: 5 }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default UploadCard;
