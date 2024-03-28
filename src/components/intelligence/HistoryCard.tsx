'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import React from 'react';
import Typography from '@mui/material/Typography';

type AppCardProps = {
  url: string,
  title: string,
  channelTitle: string,
  videoId: number,
}

const AppCard: React.FC<AppCardProps> = ({ url, title, channelTitle, videoId }) => {

  return (
    <Link href={`https://www.youtube.com/watch?v=${videoId}`} underline="none" sx={{ position: 'relative', display: 'inline-block' }}>
      <Card sx={{ display: 'flex', borderRadius: '7px', width:'1000px', position: 'relative', mt: 2, bgcolor: '#fefefe', border: '1px solid #ccc' }}>
        <CardContent sx={{ flex: 1, padding: 1, marginLeft: ''}}>
          <List sx={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
            <ListItem sx={{ alignItems: 'center', marginTop: '10px' }}>
              <Typography variant="h3" sx={{  fontSize: '1.3rem'}}>
                {channelTitle} • two days
              </Typography>
            </ListItem>

            <ListItem sx={{ marginTop: '-10px'}}>
              <Typography variant="subtitle1" sx={{ color: 'gray', fontWeight: 'medium', fontSize: '0.8rem', lineHeight: '1.2' }}>
                  2024-10-21 10:25
              </Typography>
            </ListItem>

            <ListItem sx={{ marginTop: '-10px'}}>
              <Typography variant="h6" sx={{ color: '', fontWeight: 'medium', fontSize: '1rem', lineHeight: '1.2' }}>
                Low budget  |  couple  |  nature
              </Typography>
            </ListItem>

          </List>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AppCard;
