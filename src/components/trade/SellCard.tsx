'use client'
import { WorkStatus } from "@/api/enum";
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdRemoveShoppingCart } from "react-icons/md";


type AppCardProps = {
  item: WorkView
}

const SellCard: React.FC<AppCardProps> = ({ item }) => {
  const truncatedTitle = item.title.length > 30 ? `${item.title.substring(0, 30)}...` : item.title;
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (event: any) => {
    // Sell
    if (item.status == WorkStatus.Created) {
      // 处理 Sell
      event.preventDefault()
      event.stopPropagation()
    }

    console.log(123)
  }

  return (
    <Card
      sx={{
        height: 285,
        mt: 2,
        position: 'relative', // 添加 position: 'relative'，让按钮的位置相对于卡片定位
        overflow: 'hidden', // 隐藏溢出内容
        borderRadius: '10px'
      }}
      onMouseEnter={() => setIsHovered(true)} // 当鼠标进入卡片时设置悬停状态为 true
      onMouseLeave={() => setIsHovered(false)} // 当鼠标离开卡片时设置悬停状态为 false
    >
      <Link href={`/copyright/detail?id=${item.copyrightId}`} underline="none">
        <CardMedia
          component="img"
          image={item.coverUrl}
          alt=""
          sx={{ width: '750px', height: '200px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{ fontSize: '1.1rem', mt: '-10px', color: 'black' }} component="div">
            {truncatedTitle}
          </Typography>
          <Typography variant="h6" sx={{ color: 'black', fontSize: '1rem' }}>{item.price} GO</Typography>
        </CardContent>
      </Link>
        {/* 通过 isHovered 状态来控制按钮的位置 */}
      <Box
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          position: 'absolute',
          bottom: isHovered ? 0 : -45, // 当悬停时 bottom 设置为 0，否则设置为 -40px
          transition: 'bottom 0.1s ease', // 添加过渡效果
          width: '100%',
        }}
      >
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            backgroundColor: item.status == WorkStatus.Created ? '#1e88e7 !important' : item.status == WorkStatus.OnSale ? '#e57373 !important': 'gray !important' ,
            width: '100%',
            height: '45px',
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '1rem'
          }}
          endIcon={item.status == WorkStatus.Created ? <HiOutlineShoppingCart /> : item.status == WorkStatus.OnSale ? <MdRemoveShoppingCart/> : ''}
        >
          {item.status == WorkStatus.Created ? "Sell now" : 
          item.status == WorkStatus.OnSale ? "Remove now": "Sold"}
        </Button>
      </Box>
    </Card>
    

  )
}

export default SellCard;