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
import { Box, CardActionArea } from '@mui/material';
import { formatNumber, timeAgo } from '@/utils/tool';

type AppCardProps = {
  item: FavorView
}

const AppCard: React.FC<AppCardProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false); // 添加状态用于控制鼠标悬停事件

  return (
    <Link href={`/video?id=${item.id}`} underline="none" sx={{ position: 'relative', display: 'inline-block' }}>
      <Card sx={{ width:'800px', borderRadius: 0, boxShadow: 'none', border: 'none', mb: '-15px'}}>
        <CardActionArea sx={{ width: '100%', p: 1, borderRadius: '7px'}}>
          <div style={{ display: 'flex' }}>
            {/* <CardMedia component="img" sx={{width: 175, height: 105, objectFit: 'cover', borderRadius: '10px'}}  image={item.coverUrl} alt="" /> */}
            <Box
              sx={{
                position: 'relative',
                height: 105,
                width: 175,
                borderRadius: '11px',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setIsHovered(true)} // 鼠标进入时设置状态为 true
              onMouseLeave={() => setIsHovered(false)} // 鼠标离开时设置状态为 false
            >
              {/* 封面图片 */}
              <img
                src={item?.coverUrl}
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
                  src={item?.content} // 视频地址
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
                  <Typography variant="h6" sx={{ color: '#000000', fontWeight: 'medium', fontSize: '1.1rem', lineHeight: '1.2' }}>
                    {item.title}
                  </Typography>
                </ListItem>
                
                <ListItem sx={{ alignItems: 'center', marginTop: '-10px' }}>
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
