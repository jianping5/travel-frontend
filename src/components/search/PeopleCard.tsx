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

type AppCardProps = {
  url: string,
  title: string,
  channelTitle: string,
  videoId: number,
}

const AppCard: React.FC<AppCardProps> = ({ url, title, channelTitle, videoId }) => {
  const truncatedTitle = title.length > 100 ? `${title.substring(0, 100)}...` : title;
  // todo：暂时修改
  url = 'https://yt3.googleusercontent.com/ytc/AIdro_mAHYpOSQ07FAH_0tVQSqwm7xSIvrKG8xVKbTdf=s176-c-k-c0x00ffffff-no-rj'
  return (
    <Link href={`https://www.youtube.com/watch?v=${videoId}`} underline="none" sx={{ position: 'relative', display: 'inline-block' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'transparent', zIndex: 1 }}></div>
      <Card sx={{ display: 'flex', borderRadius: 0, boxShadow: 'none', border: 'none', position: 'relative', zIndex: 2 }}>
        <CardMedia component="img" sx={{width: 150, height: 150}}  image={url} alt={title} />
        
        <CardContent sx={{ flex: 1, padding: 5, marginLeft: 7}}>
          <Typography variant="h6" sx={{  color: '#000000', fontWeight: 'medium', marginBottom: '8px', fontSize: '1.2rem', lineHeight: '1.2', WebkitLineClamp: 2, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis', wordBreak: 'break-word' }}>
            {truncatedTitle}
          </Typography>
          
          {/* <List sx={{ display: 'flex', alignItems: 'center', padding: 0 }}> */}
            {/* <ListItem sx={{ alignItems: 'center' }}>
              <ListItemAvatar>
                <Avatar
                  alt="Channel avatar"
                  src={`https://i.pravatar.cc/150?img=1`}
                  sx={{ width: 40, height: 40, borderRadius: '50%' }}
                />
              </ListItemAvatar>
              <Typography variant="body2" sx={{ marginRight: '1px', color: '#606060' }}>
                {channelTitle}
              </Typography>
            </ListItem> */}

            {/* <ListItem sx={{ alignItems: 'center' }}> */}
              <Typography variant="body2" sx={{ color: '#606060', marginTop: 2 }}>
                100k views • 1 day ago
              </Typography>
            {/* </ListItem> */}
          {/* </List> */}
        </CardContent>
      </Card>
    </Link>
  );
};

export default AppCard;
