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
  item: CopyrightView
}

const AppCard: React.FC<AppCardProps> = ({ item }) => {
  const truncatedTitle = item.title.length > 100 ? `${item.title.substring(0, 100)}...` : item.title;

  return (
    <Link href={`/copyright/detail?id=${item.id}`} underline="none" sx={{ position: 'relative', display: 'inline-block' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'transparent', zIndex: 1 }}></div>
      <Card sx={{ display: 'flex', borderRadius: 0, boxShadow: 'none', border: 'none', position: 'relative', zIndex: 2 }}>
        <CardMedia component="img" sx={{width: 350, height: 200, objectFit: 'cover', borderRadius: '17px'}}  image={item.coverUrl} alt="" />
        
        <CardContent sx={{ flex: 1, padding: 1}}>
          <Typography variant="h6" sx={{  color: '#000000', marginLeft: '10px', fontWeight: 'medium', marginBottom: '8px', fontSize: '1.2rem', lineHeight: '1.2', WebkitLineClamp: 2, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis', wordBreak: 'break-word' }}>
            {truncatedTitle}
          </Typography>

          {/* <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.8rem', marginLeft: '10px' }}>
                100k likes • 1 day ago
          </Typography> */}
          
          <List sx={{ display: 'flex', alignItems: 'center', padding: 0, marginLeft: '-5px' }}>
            <ListItem sx={{ alignItems: 'center' }}>
              <ListItemAvatar>
                <Avatar
                  alt="Channel avatar"
                  src={item.avatar}
                  sx={{ width: 27, height: 27, borderRadius: '50%' }}
                />
              </ListItemAvatar>
              <Typography variant="body2" sx={{ marginLeft: '-17px', color: '#606060' }}>
                {item.account}
              </Typography>
            </ListItem>
          </List>

          <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.8rem', marginLeft: '13px', marginTop: '7px' }}>
              We love counting! Counting down. Counting up. Counting to 5. Counting to 20. Counting potatoes. Counting bananas. Counting ...
          </Typography>

        </CardContent>
      </Card>
    </Link>
  );
};

export default AppCard;
