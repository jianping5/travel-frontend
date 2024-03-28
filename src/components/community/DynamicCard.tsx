'use client'
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import React from 'react';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type AppCardProps = {
  url: string,
  title: string,
  channelTitle: string,
  videoId: number,
}

const AppCard: React.FC<AppCardProps> = ({ url, title, channelTitle, videoId }) => {
  const truncatedTitle = title.length > 100 ? `${title.substring(0, 100)}...` : title;

  return (
    <Link href={`https://www.youtube.com/watch?v=${videoId}`} underline="none" sx={{ position: 'relative', display: 'inline-block' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'transparent', zIndex: 1 }}></div>
      <Card sx={{ display: 'flex', borderRadius: 0, boxShadow: 'none', border: 'none', position: 'relative', zIndex: 2 }}>
        <CardActionArea sx={{ display: 'flex', width: '1000px', p: 1, borderRadius: '7px'}}>
          <CardMedia component="img" sx={{width: 170, height: 120, objectFit: 'cover', borderRadius: '5px'}}  image={url} alt={title} />
          
          <CardContent sx={{ flex: 1, marginLeft: '-15px'}}>
            <List sx={{ display: 'flex', flexDirection: 'column' }}>
              <ListItem sx={{ alignItems: 'center', marginTop: '-35px' }}>
                <ListItemAvatar>
                  <Avatar
                    alt="Channel avatar"
                    src={`https://i.pravatar.cc/150?img=1`}
                    sx={{ width: 25, height: 25, borderRadius: '50%' }}
                  />
                </ListItemAvatar>
                <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.7rem', lineHeight: '1', marginLeft: '-22px' }}>
                  {channelTitle} • 1 day ago
                </Typography>
              </ListItem>

              <ListItem sx={{ marginTop: '-10px'}}>
                <Typography variant="h6" sx={{ color: '#000000', fontWeight: 'medium', fontSize: '1rem', lineHeight: '1.2', WebkitLineClamp: 2, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis', wordBreak: 'break-word' }}>
                  {truncatedTitle}
                </Typography>
              </ListItem>

              <ListItem>
                <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.8rem', lineHeight: '1', mariginTop: '' }}>
                  100k views
                </Typography>
              </ListItem>
            </List>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default AppCard;
