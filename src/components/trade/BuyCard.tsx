'use client'
import { WorkUpdateType } from "@/api/enum";
import { updateWork } from "@/api/trade/trade-api";
import { getAccount, purchase, revoke } from "@/utils/contract";
import { getLoginUserId } from "@/utils/tool";
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdRemoveShoppingCart } from "react-icons/md";

type AppCardProps = {
  item: WorkView;
  onItemRemove: (id: number) => void;
}

const BuyCard: React.FC<AppCardProps> = ({ item, onItemRemove }) => {
  const loginUserId = getLoginUserId()
  const truncatedTitle = item.title.length > 30 ? `${item.title.substring(0, 30)}...` : item.title;
  const [isHovered, setIsHovered] = useState(false);

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
      onItemRemove(item.id)
    } catch (err) {
      console.log(err)
    }
  }

  // 购买商品（待测试）
  const handleBuyWork = async (id: number) => {
    try {
      // 购买 NFT
      await purchase(item.tokenId, parseInt(item.price))
      
      // 获取当前活动账户地址
      const signer = await getAccount()
      const accountAddress = signer.address

      const req: WorkUpdateReq = {
        id: id,
        type: WorkUpdateType.Buy,
        oldAccountAddress: item.accountAddress,
        accountAddress: accountAddress,
      }
      await updateWork(req)
      onItemRemove(item.id)
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = async (event: any, id: number) => {
    event.preventDefault()
    event.stopPropagation()
    // Buy
    if (item.userId != loginUserId) {
      await handleBuyWork(id)
    } else {
      // Remove
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
      <Link href={`/trade/work/detail?id=${item.id}`} underline="none">
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
          onClick={(e) => handleClick(e, item.id)}
          sx={{
            backgroundColor: loginUserId == item.userId ? "#e57373 !important" : '#1e88e7 !important',
            width: '100%',
            height: '45px',
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '1rem'
          }}
          endIcon={loginUserId == item.userId ? <MdRemoveShoppingCart/> : <HiOutlineShoppingCart /> }
        >
          {loginUserId == item.userId ? "Remove now" : "Buy now"}
        </Button>
      </Box>
    </Card>
    

  )
}

export default BuyCard;