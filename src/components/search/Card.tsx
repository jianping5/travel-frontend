import { AiFillCheckCircle } from 'react-icons/ai';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/system/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import React from 'react';
import Typography from '@mui/material/Typography';

type AppCardProps = {
  url: string,
  title: string,
  channelTitle: string,
  videoId: number,
}

const AppCard: React.FC<AppCardProps> = ({ url, title, channelTitle, videoId }) => {
  const truncatedTitle = title.length > 40 ? `${title.substring(0, 40)}...` : title;

  return (
    <Card sx={{ boxShadow: 'none', borderRadius: 0 }}>
      <Link href={`https://www.youtube.com/watch?v=${videoId}`} underline="none">
        <CardMedia component="img" sx={{height: 210, objectFit: 'cover', borderRadius: '17px'}}  image={url} alt={title} />
      </Link>
      <CardContent sx={{padding: 0}}>
        <List sx={{ padding: 0 }}>
          <ListItem sx={{ alignItems: 'flex-start', paddingLeft: '0px' }}>
            <ListItemAvatar>
              <Avatar
                alt="Channel avatar"
                src={`https://i.pravatar.cc/150?img=1`}
                sx={{ width: 40, height: 40, borderRadius: '50%' }}
              />
            </ListItemAvatar>
            <Box sx={{ flex: 1, paddingLeft: '0px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '1rem', lineHeight: '1.2', WebkitLineClamp: 2, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis' }}>
                {truncatedTitle}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ marginRight: '1px', color: '#606060' }}>
                  {channelTitle}
                </Typography>
                <AiFillCheckCircle style={{ color: '#c4302b' }} />
              </Box>
            </Box>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default AppCard;
