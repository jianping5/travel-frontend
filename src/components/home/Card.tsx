import Avatar from '@mui/material/Avatar';
import Box from '@mui/system/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import { formatNumber, timeAgo } from '../../utils/tool'
import ThemeContext from '@/context/ThemeContext';

interface AppCardProps {
  props: ContentView
}

const AppCard: React.FC<AppCardProps> = ({props}) => {
  const truncatedTitle = props.title.length > 100 ? `${props.title.substring(0, 100)}...` : props.title;
  const { mobileOpen } = useContext(ThemeContext);

  return (
    <Card sx={{ boxShadow: 'none', borderRadius: 0, mr: '7px' }}>
      <Link href={`/video?id=${props.id}`} underline="none">
        <CardMedia component="img" sx={{height: mobileOpen ? 207 : 227, width: 520, objectFit: 'cover', borderRadius: '12px'}}  image={props.coverUrl} alt="" />
        <CardContent sx={{ }}>
          <List sx={{ padding: 0}}>
            <ListItem sx={{ alignItems: 'flex-start', paddingLeft: '0px' }}>
              <ListItemAvatar>
                <Avatar
                  alt="Channel avatar"
                  src={props.userInfo.avatar}
                  sx={{ width: 40, height: 40, borderRadius: '50%' }}
                />
              </ListItemAvatar>
              <Box sx={{ flex: 1, paddingLeft: '0px' }}>
                <Typography variant="h6" sx={{ color: 'black', fontWeight: 'medium', marginBottom: '8px', fontSize: '1rem', lineHeight: '1.2' }}>
                  {truncatedTitle}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ fontSize: '1rem', marginRight: '1px', color: '#606060' }}>
                    {props.userInfo.account}
                    <br/>
                    {formatNumber(props.likeCount)} likes · {timeAgo(new Date(props.createTime).getTime())}
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
