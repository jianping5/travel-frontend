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
import { FileType } from '@/api/enum';
import { formatNumber, timeAgo } from '@/utils/tool';
import { Box } from '@mui/material';

type AppCardProps = {
  item: CommunityDynamicView
}

const AppCard: React.FC<AppCardProps> = ({ item }) => {
  const truncatedTitle = item.title.length > 100 ? `${item.title.substring(0, 100)}...` : item.title;
  const [isHovered, setIsHovered] = useState(false); // 添加状态用于控制鼠标悬停事件

  return (
    <Link href={`/dynamic?id=${item.id}`} underline="none" sx={{ position: 'relative', display: 'inline-block' }}>
      <Card sx={{ display: 'flex', width: '1000px', boxShadow: 'none', border: 'none', position: 'relative', mb: '-20px' }}>
        {item.fileType == FileType.Video ?
          // <video style={{width: 170, height: 120, objectFit: 'cover', borderRadius: '5px'}}>
          //   <source src={item.content} type="video/mp4" />
          //   Your browser does not support the video tag.
          // </video>
          <Box
            sx={{
              position: 'relative',
              height: 120,
              width: 170,
              borderRadius: '7px',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
            onMouseEnter={() => setIsHovered(true)} // 鼠标进入时设置状态为 true
            onMouseLeave={() => setIsHovered(false)} // 鼠标离开时设置状态为 false
          >
            {/* 封面图片 */}
            <video style={{width: 170, height: 120, objectFit: 'cover', borderRadius: '5px'}}>
              <source src={item.content} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* 视频预览 */}
            {isHovered && (
              <video
                src={item.content} // 视频地址
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
          :
          <CardMedia component="img" sx={{width: 170, height: 120, objectFit: 'cover', borderRadius: '5px'}}  image={item.fileType == FileType.Picture ? item.content : "https://cdn.pixabay.com/photo/2015/03/03/05/54/cherry-blossoms-656965_640.jpg"} alt="Dynamic CoverUrl" />
        }
        <CardContent sx={{ flex: 1, marginLeft: '-15px', pt: 2.5}}>
          <List sx={{ display: 'flex', flexDirection: 'column' }}>
            <ListItem sx={{ alignItems: 'center', marginTop: '-35px' }}>
              <ListItemAvatar>
                <Avatar
                  alt="Channel avatar"
                  src={item.userInfo?.avatar}
                  sx={{ width: 25, height: 25, borderRadius: '50%' }}
                />
              </ListItemAvatar>
              <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.7rem', lineHeight: '1', marginLeft: '-22px' }}>
                {item.userInfo?.account} • {timeAgo(new Date(item.createTime).getTime())}
              </Typography>
            </ListItem>

            <ListItem sx={{ marginTop: '-10px'}}>
              <Typography variant="h6" sx={{ color: '#000000', fontWeight: 'medium', fontSize: '1.2rem', lineHeight: '1.2'}}>
                {truncatedTitle}
              </Typography>
            </ListItem>

            <ListItem sx={{ marginTop: '-10px'}}>
              <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.9rem', lineHeight: '1' }}>
                {item.description}
              </Typography>
            </ListItem>

            <ListItem sx={{ }}>
              <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.9rem', lineHeight: '1' }}>
              {formatNumber(item.likeCount)} likes
              </Typography>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AppCard;
