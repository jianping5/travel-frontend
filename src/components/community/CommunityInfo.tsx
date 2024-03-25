'use client'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import VideoCard from '../video/VideoCard';
import { Avatar, Button, Card, CardContent, Divider, Typography } from '@mui/material';

const CommunityInfo = () => {
  return (
    <Card sx={{ borderRadius: '10px'}}>
      <CardContent sx={{ display: 'flex'}}>
        <Typography sx={{ marginLeft: '10px', fontSize: '1.7rem', fontWeight: 'medium' }}>OldSchool</Typography>
        <Button variant='outlined' sx={{ marginLeft: 'auto', width:'100px', height: '40px', borderRadius: '100px'}}> Join </Button>
      </CardContent>
      <Divider/>
      <CardContent>
        <Typography sx={{ fontSize: '0.9 rem'}}>
        OldSchoolCool History's cool kids, looking fantastic! A pictorial and video celebration of history's coolest kids, everything from beatniks to bikers, mods to rude boys, hippies to ravers. And everything in between. 
        If you've found a photo, or a photo essay, of people from the past looking fantastic, here's the place to share it.
        </Typography>
      </CardContent>
      <Divider/>
      <CardContent>
        <Typography sx={{ fontSize: '0.9 rem', textAlign: 'center' }}>
          100k members
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CommunityInfo;