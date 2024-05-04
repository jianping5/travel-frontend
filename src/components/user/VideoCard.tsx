'use client'
import { formatNumber, timeAgo } from "@/utils/tool";
import { Box, CardMedia, Link, Typography } from "@mui/material";
import { useState } from "react";


type AppCardProps = {
  props: ContentView
}

const VideoCard: React.FC<AppCardProps> = ({ props }) => {
  const truncatedTitle = props.title.length > 200 ? `${props.title.substring(0, 200)}...` : props.title;
  const [isHovered, setIsHovered] = useState(false); // 添加状态用于控制鼠标悬停事件

  return (
    <Box sx={{ marginTop: '10px'}}>
      <Link href={`/video?id=${props.id}`} underline="none">
        {/* <CardMedia component="img" sx={{width: '750px', height: '170px', objectFit: 'cover', borderRadius: '12px'}}  
        image={props.coverUrl} alt='image' /> */}
        <Box
          sx={{
            position: 'relative',
            height: '170px',
            width: '250px',
            borderRadius: '11px',
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
        <Typography variant="h5" sx={{ fontSize: '1rem', fontWeight: 'medium', color:'black' }}> {truncatedTitle} </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '0.9rem', }}> {formatNumber(props.likeCount)} likes · {timeAgo(new Date(props.createTime).getTime())} </Typography>
      </Link>
    </Box>
  )
}

export default VideoCard;