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
import { formatNumber, timeAgo } from '@/utils/tool';

type AppCardProps = {
  item: FavorView
}

const AppCard: React.FC<AppCardProps> = ({ item }) => {

  return (
    <Link href={`/video?id=${item.id}`} underline="none" sx={{ position: 'relative', display: 'inline-block' }}>
      <Card sx={{ width:'800px', borderRadius: 0, boxShadow: 'none', border: 'none', mb: '-15px'}}>
        <CardActionArea sx={{ width: '100%', p: 1, borderRadius: '7px'}}>
          <div style={{ display: 'flex' }}>
            <CardMedia component="img" sx={{width: 175, height: 105, objectFit: 'cover', borderRadius: '10px'}}  image={item.coverUrl} alt="" />
            
            <CardContent sx={{ flex: 1, padding: 1, marginLeft: '-15px'}}>
              <List sx={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
                <ListItem sx={{ marginTop: '-10px'}}>
                  <Typography variant="h6" sx={{ color: '#000000', fontWeight: 'medium', fontSize: '1.1rem', lineHeight: '1.2' }}>
                    {item.title}
                  </Typography>
                </ListItem>
                
                <ListItem sx={{ alignItems: 'center', marginTop: '-5px' }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.77rem' }}>
                    {item.account} • {timeAgo(new Date(item.createTime).getTime())}
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
