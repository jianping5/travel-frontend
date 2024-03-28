import { AiFillCheckCircle } from 'react-icons/ai';
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

  return (
    <Link href={`https://www.youtube.com/watch?v=${videoId}`} underline="none" sx={{ position: 'relative', display: 'inline-block' }}>
      <Card sx={{ borderRadius: 0, boxShadow: 'none', border: 'none', mb: '-15px'}}>
        <CardActionArea sx={{ width: '1000px', p: 1, borderRadius: '7px'}}>
        <div style={{ display: 'flex' }}>
          <CardMedia component="img" sx={{width: 175, height: 105, objectFit: 'cover', borderRadius: '10px'}}  image={url} alt={title} />
          
          <CardContent sx={{ flex: 1, padding: 1, marginLeft: '-15px'}}>
            <List sx={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
              <ListItem sx={{ marginTop: '-10px'}}>
                <Typography variant="h6" sx={{ color: '#000000', fontWeight: 'medium', fontSize: '1.1rem', lineHeight: '1.2' }}>
                  {title}
                </Typography>
              </ListItem>
              
              <ListItem sx={{ alignItems: 'center', marginTop: '-15px' }}>
                <ListItemAvatar>
                  <Avatar
                    alt="Channel avatar"
                    src={`https://i.pravatar.cc/150?img=1`}
                    sx={{ width: 25, height: 25, borderRadius: '50%' }}
                  />
                </ListItemAvatar>
                <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.8rem', lineHeight: '1', marginLeft: '-22px' }}>
                  {channelTitle}
                </Typography>
                <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.8rem', lineHeight: '1', marginLeft: '10px' }}>
                  100k views · 2 hrs ago
                </Typography>
              </ListItem>
            </List>
          </CardContent>
        </div>
        </CardActionArea>

      </Card>
    </Link>
  );
};

export default AppCard;
