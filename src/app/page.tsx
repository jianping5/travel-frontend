'use client'
import { Box } from '@mui/material';
import { appWrapper } from '../styles/styles';
import React from 'react';
import Home from '../components/home/Home';


function App() {

  return (
    <Box sx={appWrapper}>
        <Home />
    </Box>
  );
}

export default App;