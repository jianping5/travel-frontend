import Avatar from '@mui/material/Avatar';
import Box from '@mui/system/Box';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import React, { useContext, useState } from 'react';
import Typography from '@mui/material/Typography';
import { formatNumber, timeAgo } from '../../utils/tool'
import ThemeContext from '@/context/ThemeContext';
import { useRouter } from 'next/navigation'

interface AppCardProps {
  props: ContentView
}

const AppCard: React.FC<AppCardProps> = ({props}) => {
  const truncatedTitle = props.title.length > 100 ? `${props.title.substring(0, 100)}...` : props.title;
  const { mobileOpen } = useContext(ThemeContext);
  const history = useRouter()
  const [isHovered, setIsHovered] = useState(false); // 添加状态用于控制鼠标悬停事件

  return (
    <Box sx={{ mb: 5 }}>
      {/* <Link href={`/video?id=${props.id}`} underline="none" >
        <CardMedia component="img" sx={{height: mobileOpen ? 207 : 227, width: 520, objectFit: 'cover', borderRadius: '11px'}}  image={props.coverUrl} alt="" />
      </Link> */}
      <Link href={`/video?id=${props.id}`} underline="none" >
        <Box
          sx={{
            position: 'relative',
            height: mobileOpen ? 207 : 227,
            width: mobileOpen ? 350 : 400,
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
      </Link>

      <Link href={`/video?id=${props.id}`} underline="none" >
        <Box sx={{ mt: 2}}>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ flex: 1}}>
              {/* <Link href={`/user/home?id=${props.userId}`}> */}
                <Avatar
                  alt="Channel avatar"
                  src={props.userInfo.avatar}
                  sx={{ width: 37, height: 37, borderRadius: '50%' }}
                  onClick={(e) => {e.preventDefault(); history.push(`/user/home?id=${props.userId}`); }} // 添加点击事件处理函数
                />
              {/* </Link> */}
            </Box>
            <Box sx={{ flex: 7 }}>
              <Typography variant="h6" sx={{ color: 'black', fontWeight: 'medium', marginBottom: '5px', fontSize: '1rem' }}>
                {truncatedTitle}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
                  {props.userInfo.account}
                  <br/>
                  {formatNumber(props.likeCount)} likes • {timeAgo(new Date(props.createTime).getTime())}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>

      
    </Box>
  );
};

export default AppCard;
