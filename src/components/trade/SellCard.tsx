'use client'
import { WorkStatus, WorkUpdateType } from "@/api/enum";
import { updateWork } from "@/api/trade/trade-api";
import { approve, list, revoke } from "@/utils/contract";
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdRemoveShoppingCart } from "react-icons/md";


type AppCardProps = {
  item: WorkView
}

const SellCard: React.FC<AppCardProps> = ({ item }) => {
  const [workItem, setWorkItem] = useState<WorkView>(item)
  const truncatedTitle = workItem.title.length > 30 ? `${workItem.title.substring(0, 30)}...` : workItem.title;
  const [isHovered, setIsHovered] = useState(false);

  // 售卖商品
  const handleSellWork = async (id: number) => {
    try {
      // 上架 NFT（先授权）
      const tokenId = item.tokenId
      await approve(tokenId)
      await list(tokenId, parseInt(item.price))

      const req: WorkUpdateReq = {
        id: id,
        type: WorkUpdateType.Sell,
        oldAccountAddress: '',
        accountAddress: '',
      }
      await updateWork(req)
      workItem.status = WorkStatus.OnSale
      setIsHovered(!isHovered)
    } catch (err) {
      console.log(err)
    }
  }

  // 下架商品
  const handleRemoveWork = async (id: number) => {
    try {
      // 下架 NFT
      await revoke(item.tokenId)

      const req: WorkUpdateReq = {
        id: id,
        type: WorkUpdateType.Remove,
        oldAccountAddress: '',
        accountAddress: '',
      }
      await updateWork(req)
      workItem.status = WorkStatus.Created
      setIsHovered(!isHovered)
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = async (event: any, id: number) => {
    event.preventDefault()
    event.stopPropagation()
    // Sell
    if (item.status == WorkStatus.Created) {
      // 处理 Sell
      await handleSellWork(id)
    } else if (item.status == WorkStatus.OnSale) {
      // 处理 Remove（下架）
      await handleRemoveWork(id)
    }
  }

  return (
    <Card
      sx={{
        height: 285,
        mb: 3,
        position: 'relative', // 添加 position: 'relative'，让按钮的位置相对于卡片定位
        overflow: 'hidden', // 隐藏溢出内容
        borderRadius: '10px'
      }}
      onMouseEnter={() => setIsHovered(true)} // 当鼠标进入卡片时设置悬停状态为 true
      onMouseLeave={() => setIsHovered(false)} // 当鼠标离开卡片时设置悬停状态为 false
    >
      <Link href={`/trade/work/detail?id=${workItem.id}`} underline="none">
        <CardMedia
          component="img"
          image={workItem.coverUrl}
          alt=""
          sx={{ width: '750px', height: '200px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{ fontSize: '1.1rem', mt: '-10px', color: 'black' }} component="div">
            {truncatedTitle}
          </Typography>
          <Typography variant="h6" sx={{ color: 'black', fontSize: '1rem' }}>{workItem.price} GO</Typography>
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
          onClick={(e) => handleClick(e, workItem.id)}
          sx={{
            backgroundColor: workItem.status == WorkStatus.Created ? '#1e88e7 !important' : workItem.status == WorkStatus.OnSale ? '#e57373 !important': 'gray !important' ,
            width: '100%',
            height: '45px',
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '1rem'
          }}
          endIcon={workItem.status == WorkStatus.Created ? <HiOutlineShoppingCart /> : workItem.status == WorkStatus.OnSale ? <MdRemoveShoppingCart/> : ''}
        >
          {workItem.status == WorkStatus.Created ? "Sell now" : 
          workItem.status == WorkStatus.OnSale ? "Remove now": "Sold"}
        </Button>
      </Box>
    </Card>
  )
}

export default SellCard;