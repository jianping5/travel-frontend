import { AiFillCheckCircle } from 'react-icons/ai';
import { appCardList, flexColumnCenter } from '../../styles/styles';
import { trimText } from '../../data/app.data';
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
  const truncatedTitle = title.length > 100 ? `${title.substring(0, 100)}...` : title;

  return (
    <Card sx={{ boxShadow: 'none', borderRadius: 0 }}>
      <Link href={`/video?id=${videoId}`} underline="none">
        <CardMedia component="img" sx={{height: 217, objectFit: 'cover', borderRadius: '12px'}}  image='https://cdn.pixabay.com/photo/2015/03/03/05/54/cherry-blossoms-656965_1280.jpg' alt={title} />
        <CardContent sx={{padding: 0}}>
          <List sx={{ padding: 1 }}>
            <ListItem sx={{ alignItems: 'flex-start', paddingLeft: '0px' }}>
              <ListItemAvatar>
                <Avatar
                  alt="Channel avatar"
                  src={`https://i.pravatar.cc/150?img=1`}
                  sx={{ width: 40, height: 40, borderRadius: '50%' }}
                />
              </ListItemAvatar>
              <Box sx={{ flex: 1, paddingLeft: '0px' }}>
                <Typography variant="h6" sx={{ color: 'black', fontWeight: 'medium', marginBottom: '8px', fontSize: '1rem', lineHeight: '1.2', WebkitLineClamp: 2, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis' }}>
                  {truncatedTitle}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ marginRight: '1px', color: '#606060' }}>
                    {channelTitle}
                    <br/>
                    100k views · 10 months ago
                  </Typography>
                </Box>
              </Box>
            </ListItem>
          </List>
          
        </CardContent>
      </Link>
    </Card>
  );
};

export default AppCard;
