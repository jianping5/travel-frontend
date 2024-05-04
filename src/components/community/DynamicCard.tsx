'use client'
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
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { BiCommentDetail } from "react-icons/bi";
import { Box, CardActionArea, IconButton } from '@mui/material';
import { FileType, ItemType } from '@/api/enum';
import { formatNumber, timeAgo } from '@/utils/tool';
import { useRouter } from "next/navigation";
import { like } from '@/api/social/social-api';

type AppCardProps = {
  props: CommunityDynamicView
}

const AppCard: React.FC<AppCardProps> = ({ props }) => {
  const truncatedTitle = props.title?.length > 100 ? `${props.title.substring(0, 100)}...` : props.title;

  const [isLiked, setIsLiked] = useState(props.isLiked)
  const [likeCount, setLikeCount] = useState(props.likeCount)

  const history = useRouter()
  const [isHovered, setIsHovered] = useState(false); // 添加状态用于控制鼠标悬停事件

  // 点赞
  const handleLike = async (itemId: number = 0, likedStatus: boolean = false) => {
    try {
      const req: LikeReq = {
        itemType: ItemType.DYNAMIC,
        itemId: itemId,
        likedStatus: likedStatus
      }
      await like(req)
      setIsLiked(!isLiked)
      
      if (likedStatus) {
        setLikeCount(likeCount-1)
      } else {
        setLikeCount(likeCount+1)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Link href={`/dynamic?id=${props.id}`} underline="none" sx={{ position: 'relative', display: 'inline-block', width: '100%' }}>
      <div style={{ marginRight: '10px'}} >
        <Card sx={{ display: 'flex', width:'100%', height: '170px', boxShadow: 'none', border: 'none', position: 'relative', zIndex: 2, mb: '-30px' }}>
          <div style={{ flex: 1, width: 0 }}>
            <CardActionArea sx={{ display: 'flex', width: '100%', borderRadius: '7px', pl: '10px'}}>
              <div style={{ marginTop: '-17px'}}>
                {props.fileType == FileType.Video ?
                  // <video style={{width: 170, height: 120, objectFit: 'cover', borderRadius: '5px'}}>
                  //   <source src={props.content} type="video/mp4" />
                  //   Your browser does not support the video tag.
                  // </video>
                  <Box
                  sx={{
                    position: 'relative',
                    height: 120,
                    width: 170,
                    borderRadius: '11px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setIsHovered(true)} // 鼠标进入时设置状态为 true
                  onMouseLeave={() => setIsHovered(false)} // 鼠标离开时设置状态为 false
                >
                  {/* 封面图片 */}
                  <video style={{width: 170, height: 120, objectFit: 'cover', borderRadius: '5px'}}>
                    <source src={props.content} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
                  :
                  <CardMedia component="img" sx={{width: 170, objectFit: 'cover', borderRadius: '5px'}}  image={props.fileType == FileType.Picture ? props.content : "https://cdn.pixabay.com/photo/2015/03/03/05/54/cherry-blossoms-656965_640.jpg"} alt="Dynamic CoverUrl" />
                }
              </div>
              <CardContent sx={{ flex: 1, marginLeft: '-15px', pt: 5}}>
                <List sx={{ display: 'flex', flexDirection: 'column' }}>
                  <ListItem sx={{ alignItems: 'center', marginTop: '-35px' }}>
                    <ListItemAvatar>
                      {/* <Link href={`/user/home?id=${props.userInfo.id}`}> */}
                        <Avatar
                          alt="Channel avatar"
                          src={props.userInfo?.avatar}
                          sx={{ width: 27, height: 27, borderRadius: '50%' }}
                          onClick={(e) => {e.preventDefault(); history.push(`/user/home?id=${props.userInfo.id}`); }} // 添加点击事件处理函数
                        />
                      {/* </Link> */}
                    </ListItemAvatar>
                    <Typography variant="body2" sx={{ fontSize: '0.9rem', marginLeft: '-22px' }}>
                      {props.userInfo?.account}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem', marginLeft: '5px' }}>
                      • {timeAgo(new Date(props.createTime).getTime())}
                    </Typography>
                  </ListItem>

                  <ListItem sx={{ marginTop: '-12px'}}>
                    <Typography variant="h6" sx={{ color: '#000000', fontWeight: 'bold', fontSize: '0.95rem' }}>
                      {truncatedTitle}
                    </Typography>
                  </ListItem>

                  <ListItem sx={{ marginTop: '-10px'}}>
                    <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.9rem', lineHeight: '1' }}>
                      {props.description}
                    </Typography>
                  </ListItem>

                  {/* <ListItem sx={{ }}>
                    <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.9rem', lineHeight: '1', mariginTop: '' }}>
                    {formatNumber(props.likeCount)} likes
                    </Typography>
                  </ListItem> */}
                  {/* 点赞+评论按钮 */}
                  <Box sx={{ marginTop:'', marginLeft: 'auto' }}>
                    <div style={{ backgroundColor: '#fafafa', borderRadius: '45px', display: 'inline-block' }}>
                      <IconButton onClick={(e) => {e.preventDefault(); handleLike(props?.id, isLiked)}} sx={{ borderRadius: '45px', width: '100px', height: '37px', backgroundColor: 'inherit', pl: '10px', pr: '10px'}}>
                        {isLiked ? <ThumbUpIcon /> : <ThumbUpIcon color="disabled" />}
                        <span style={{ color: '#606060', fontSize: '0.8rem', marginLeft: '10px' }}>{formatNumber(likeCount)}</span>
                      </IconButton>
                    </div>
                    <div style={{ marginLeft:'10px', backgroundColor: '#fafafa', borderRadius: '45px', display: 'inline-block' }}>
                      <IconButton onClick={(e) => {e.preventDefault(); history.push(`/dynamic?id=${props.id}`)}} sx={{ borderRadius: '45px', width: '100px', height: '37px', backgroundColor: 'inherit', pl: '10px', pr: '10px'}}>
                        <BiCommentDetail /> 
                        <span style={{ color: '#606060', fontSize: '0.8rem', marginLeft: '10px' }}>{formatNumber(props.commentCount)}</span>
                      </IconButton>
                    </div>
                  </Box>
                </List>
              </CardContent>
            </CardActionArea>
          </div>
        </Card>
      </div>
    </Link>
  );
};

export default AppCard;
