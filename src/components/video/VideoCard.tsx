'use client'
import { AiFillCheckCircle } from 'react-icons/ai';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { timeAgo } from '@/utils/tool';
import { Box } from '@mui/material';

type AppCardProps = {
  props: ContentView
}

const AppCard: React.FC<AppCardProps> = ({ props }) => {
  const truncatedTitle = props.title.length > 100 ? `${props.title.substring(0, 100)}...` : props.title;
  const [isHovered, setIsHovered] = useState(false); // 添加状态用于控制鼠标悬停事件

  return (
    <Link href={`/video?id=${props.id}`} underline="none" sx={{ position: 'relative', display: 'inline-block' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'transparent', zIndex: 1 }}></div>
      <Card sx={{ display: 'flex', borderRadius: 0, boxShadow: 'none', border: 'none', position: 'relative', zIndex: 2 }}>
        {/* <CardMedia component="img" sx={{width: 150, height: 100, objectFit: 'cover', borderRadius: '5px'}}  image={props.coverUrl} alt={props.title} /> */}
        <Box
          sx={{
            position: 'relative',
            height: 100,
            width: 150,
            borderRadius: '7px',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setIsHovered(true)} // 鼠标进入时设置状态为 true
          onMouseLeave={() => setIsHovered(false)} // 鼠标离开时设置状态为 false
        >
          {/* 封面图片 */}
          <img
            src={props.coverUrl}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {/* 视频预览 */}
          {isHovered && (
            <video
              src={props.content} // 视频地址
              autoPlay
              loop
              muted
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          )}
        </Box>
        
        <CardContent sx={{ flex: 1, padding: 1, marginLeft: '-15px'}}>
          <List sx={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
            <ListItem sx={{ marginTop: '-10px'}}>
              <Typography variant="h6" sx={{ color: '#000000', fontWeight: 'medium', fontSize: '1rem', lineHeight: '1.2', WebkitLineClamp: 2, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis', wordBreak: 'break-word' }}>
                {truncatedTitle}
              </Typography>
            </ListItem>
            <ListItem sx={{ alignItems: 'center', marginTop: '-10px' }}>
              <ListItemAvatar>
                <Avatar
                  alt="Channel avatar"
                  src={props.userInfo.avatar}
                  sx={{ width: 25, height: 25, borderRadius: '50%' }}
                />
              </ListItemAvatar>
              <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.7rem', lineHeight: '1', marginLeft: '-20px'}}>
                {props.userInfo.account}
              </Typography>
            </ListItem>

            <ListItem>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8rem', lineHeight: '1', mt: '-10px' }}>
                {props.likeCount} likes • {timeAgo(new Date(props.createTime).getTime())}
              </Typography>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AppCard;
