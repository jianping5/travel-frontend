'use client'
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";


type AppCardProps = {
  url: string,
  title: string,
  channelTitle: string,
  videoId: number,
}

const VideoCard: React.FC<AppCardProps> = ({ url, title, channelTitle, videoId }) => {
  const truncatedTitle = title.length > 30 ? `${title.substring(0, 30)}...` : title;

  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (event: any) => {
    event.stopPropagation()
    console.log(123)
  }

  return (
    <Card
      sx={{
        height: 265,
        mt: 2,
        position: 'relative', // 添加 position: 'relative'，让按钮的位置相对于卡片定位
        overflow: 'hidden' // 隐藏溢出内容
      }}
      onMouseEnter={() => setIsHovered(true)} // 当鼠标进入卡片时设置悬停状态为 true
      onMouseLeave={() => setIsHovered(false)} // 当鼠标离开卡片时设置悬停状态为 false
    >
      <Link href={`/video?id=${videoId}`} underline="none">
        <CardMedia
          component="img"
          image={url}
          alt="green iguana"
          sx={{ width: '750px', height: '185px', objectFit: 'cover', borderRadius: '12px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{ fontSize: '1.1rem', mt: '-10px', color: 'black' }} component="div">
            {truncatedTitle}
          </Typography>
          <Typography variant="h6" sx={{ color: 'black'}}>￥123</Typography>
        </CardContent>
      </Link>
        {/* 通过 isHovered 状态来控制按钮的位置 */}
      <Box
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          position: 'absolute',
          bottom: isHovered ? 0 : -40, // 当悬停时 bottom 设置为 0，否则设置为 -40px
          transition: 'bottom 0.3s ease', // 添加过渡效果
          width: '100%',
        }}
      >
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            mt: 1,
            backgroundColor: '#2196f3 !important',
            width: '100%',
            height: '39px',
            textTransform: 'none',
            fontWeight: 'medium',
            fontSize: '1rem'
          }}
          endIcon={<HiOutlineShoppingCart />}
        >
          Buy now
        </Button>
      </Box>
    </Card>
    

  )
}

export default VideoCard;