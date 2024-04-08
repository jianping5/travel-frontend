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
import { FileType } from '@/api/enum';
import { formatNumber, timeAgo } from '@/utils/tool';

type AppCardProps = {
  props: CommunityDynamicView
}

const AppCard: React.FC<AppCardProps> = ({ props }) => {
  const truncatedTitle = props.title?.length > 100 ? `${props.title.substring(0, 100)}...` : props.title;

  return (
    <Link href={`/dynamic?id=${props.id}`} underline="none" sx={{ position: 'relative', display: 'inline-block' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'transparent', zIndex: 1 }}></div>
      <Card sx={{ display: 'flex', borderRadius: 0, boxShadow: 'none', border: 'none', position: 'relative', zIndex: 2 }}>
        <CardActionArea sx={{ display: 'flex', width: '800px', pl: 1, borderRadius: '7px'}}>
          {props.fileType == FileType.Video ?
            <video style={{width: 170, height: 120, objectFit: 'cover', borderRadius: '5px'}}>
              <source src={props.content} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            :
            <CardMedia component="img" sx={{width: 170, height: 120, objectFit: 'cover', borderRadius: '5px'}}  image={props.fileType == FileType.Picture ? props.content : "https://cdn.pixabay.com/photo/2015/03/03/05/54/cherry-blossoms-656965_640.jpg"} alt="Dynamic CoverUrl" />
          }
          <CardContent sx={{ flex: 1, marginLeft: '-15px', pt: 4}}>
            <List sx={{ display: 'flex', flexDirection: 'column' }}>
              <ListItem sx={{ alignItems: 'center', marginTop: '-35px' }}>
                <ListItemAvatar>
                  <Avatar
                    alt="Channel avatar"
                    src={props.userInfo?.avatar}
                    sx={{ width: 25, height: 25, borderRadius: '50%' }}
                  />
                </ListItemAvatar>
                <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.7rem', lineHeight: '1', marginLeft: '-22px' }}>
                  {props.userInfo?.account} • {timeAgo(new Date(props.createTime).getTime())}
                </Typography>
              </ListItem>

              <ListItem sx={{ marginTop: '-10px'}}>
                <Typography variant="h6" sx={{ color: '#000000', fontWeight: 'medium', fontSize: '1.2rem', lineHeight: '1.2', WebkitLineClamp: 2, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis', wordBreak: 'break-word' }}>
                  {truncatedTitle}
                </Typography>
              </ListItem>

              <ListItem sx={{ marginTop: '-10px'}}>
                <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.9rem', lineHeight: '1', mariginTop: '' }}>
                  {props.description}
                </Typography>
              </ListItem>

              <ListItem sx={{ }}>
                <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.9rem', lineHeight: '1', mariginTop: '' }}>
                {formatNumber(props.likeCount)} likes
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
