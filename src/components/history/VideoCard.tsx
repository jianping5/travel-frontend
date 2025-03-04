import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { formatNumber, timeAgo } from '@/utils/tool';
import { IoMdClose } from "react-icons/io";
import { deleteHistory } from '@/api/social/social-api';
import { Box } from '@mui/material';

type AppCardProps = {
  item: HistoryView
  onHistoryDelete: (id: number) => void;
}

const AppCard: React.FC<AppCardProps> = ({ item, onHistoryDelete }) => {
  const [isHovered, setIsHovered] = React.useState<{ [key: number]: boolean }>({});
  const truncatedTitle = item.title.length > 100 ? `${item.title.substring(0, 100)}...` : item.title;
  const [isVideoHovered, setIsVideoHovered] = useState(false); // 添加状态用于控制鼠标悬停事件

  // 删除历史记录
  const handleDeleteHistory = async (id: number) => {
    try {
      const req: HistoryDeleteReq = {
        id: id
      }
      await deleteHistory(req)
      onHistoryDelete(id)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Link href={`/video/?id=${item.itemId}`} underline="none" sx={{ position: 'relative', display: 'inline-block' }}>
      {/* <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'transparent', zIndex: 1 }}></div> */}
      <Card sx={{ display: 'flex', width: '700px', boxShadow: 'none', border: 'none', position: 'relative', zIndex: 2 }}
          onMouseEnter={() => {setIsHovered({[item.id]: true})}}
          onMouseLeave={() => {setIsHovered({[item.id]: false})}}>
        {/* <CardMedia component="img" sx={{width: 260, height: 150, objectFit: 'cover', borderRadius: '10px'}}  image={item.coverUrl} alt="" /> */}
        <Box
          sx={{
            position: 'relative',
            height: 150,
            width: 260,
            borderRadius: '11px',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setIsVideoHovered(true)} // 鼠标进入时设置状态为 true
          onMouseLeave={() => setIsVideoHovered(false)} // 鼠标离开时设置状态为 false
        >
          {/* 封面图片 */}
          <img
            src={item.coverUrl}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {/* 视频预览 */}
          {isVideoHovered && (
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

        <CardContent sx={{ flex: 1, padding: 1, ml: '10px'}}>
          <Typography variant="h6" sx={{  color: '#000000', marginLeft: '', fontWeight: 'medium', marginBottom: '8px', fontSize: '1.2rem', lineHeight: '1.2', WebkitLineClamp: 2, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis', wordBreak: 'break-word' }}>
            {truncatedTitle}
          </Typography>
          

          <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.8rem' }}>
            {item.account}  ·  {formatNumber(item.likeCount)} likes · {timeAgo(new Date(item.createTime).getTime())}
          </Typography>

          <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.8rem', marginTop: '7px' }}>
            {item.description}
          </Typography>

          {isHovered[item.id] && (
            <div style={{ position: 'absolute', top: '2px', right: '10px', cursor: 'pointer',  fontSize: '2rem', color: '#000' }}>
              <IoMdClose style={{ color: 'gray' }} onClick={(e) => {e.preventDefault(); handleDeleteHistory(item.id)} }/>
            </div>
          )}

        </CardContent>
      </Card>
    </Link>
  );
};

export default AppCard;
