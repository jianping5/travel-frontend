'use client'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { timeAgo } from '@/utils/tool';
import { inlineText } from '@/styles/styles';

const NotificationsCard: React.FC<{message: MessageView}> = ({ message }) => {
  const [isHovered, setIsHovered] = useState(false); // 添加状态用于控制鼠标悬停事件

  return (
    <Link href={`/video?id=${message.itemId}`} key={message.id} underline="none">
      <Box sx={{ display: 'flex', ml: 1, mb: 2 }}>
        <ListItemAvatar sx={{ mr: 1 }}>
          {/* <CardMedia component="img" sx={{width: '100px', height: '70px', objectFit: 'cover', borderRadius: '5px'}}  image={message.coverUrl} alt='' /> */}
          <Box
            sx={{
              position: 'relative',
              height: '70px',
              width: '100px',
              borderRadius: '7px',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
            onMouseEnter={() => setIsHovered(true)} // 鼠标进入时设置状态为 true
            onMouseLeave={() => setIsHovered(false)} // 鼠标离开时设置状态为 false
          >
            {/* 封面图片 */}
            <img
              src={message.coverUrl}
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
                src={message.content} // 视频地址
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
        </ListItemAvatar>
        <ListItemText
          primary={message.title}
          secondary={
            <React.Fragment>
              <Box component="span">
                <Typography sx={inlineText} component="span">
                {message.account} • {timeAgo(new Date(message.createTime).getTime())}
                </Typography>
              </Box>
            </React.Fragment>
          }
        />
      </Box>
    </Link>
  );
};

export default NotificationsCard;