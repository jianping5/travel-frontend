'use client'
import { Avatar, Box, Button, Card, CardMedia, Divider, IconButton, Typography } from "@mui/material"
import { useState } from "react";
import { like } from "@/api/social/social-api";
import { FileType, ItemType } from "@/api/enum";
import { formatNumber, timeAgo } from "@/utils/tool";
import { BiCommentDetail } from "react-icons/bi";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useRouter } from "next/navigation";

type UserDynamicCardProps = {
  dynamic: CommunityDynamicView
}

const UserDynamicCard: React.FC<UserDynamicCardProps> = ({dynamic}) => {
  const [isLiked, setIsLiked] = useState(dynamic.isLiked)
  const [likeCount, setLikeCount] = useState(dynamic.likeCount)

  const history = useRouter()

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
    <>
      <Card sx={{ mb: '20px', mr: '30%', mt: '35px', borderRadius: '15px'}}>
        <div style={{ margin: '10px' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '1', margin: '15px' }}>
              <Avatar src={dynamic.userInfo?.avatar} />
            </div>
            <div style={{ flex: '15', marginRight:'50px'}}>
              <Box sx={{ display: 'flex', marginTop: '10px', marginLeft: '-9px' }}>
                <Typography variant="body1" sx={{ marginLeft: '10px', fontWeight: 'medium', fontSize: '0.8rem' }}>{dynamic.userInfo?.account}</Typography>
                <Typography variant="body1" sx={{ marginLeft: '7px', fontSize: '0.8rem', color: 'LigthGray' }}>{ timeAgo(new Date(dynamic.createTime).getTime()) }</Typography>
              </Box>
              <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                  {dynamic.title}
              </Typography>
              <Divider sx={{ marginTop: '10px' }} />
              <Typography sx={{ marginTop: '10px' }}>
                Description: {dynamic.description}
              </Typography>

              {/* 根据 fileType 切换 */}
              {dynamic.fileType == FileType.Video ?
                <>
                  <video
                    src={dynamic.content}
                    controls
                    width="100%"
                    height="auto"
                  />
                </>
                :
                <>
                  {dynamic.fileType == FileType.Picture ?
                    <>
                      <CardMedia component="img" sx={{width: '100%', height: 'auto', objectFit: 'cover'}}  image={dynamic.content} alt='image' />
                    </>
                    :
                    <>
                      <Typography>
                        {dynamic.content}
                      </Typography>
                    </>
                  }
                </>
              }

              {/* 点赞+评论按钮 */}
              <Box sx={{ marginTop:1, marginLeft: 'auto' }}>
                <div style={{ backgroundColor: '#fafafa', borderRadius: '45px', display: 'inline-block' }}>
                  <IconButton onClick={(e) => {e.preventDefault(); handleLike(dynamic?.id, isLiked)}} sx={{ borderRadius: '45px', width: '100px', height: '37px', backgroundColor: 'inherit', pl: '10px', pr: '10px'}}>
                    {isLiked ? <ThumbUpIcon /> : <ThumbUpIcon color="disabled" />}
                    <span style={{ color: '#606060', fontSize: '0.8rem', marginLeft: '10px' }}>{formatNumber(likeCount)}</span>
                  </IconButton>
                </div>
                <div style={{ marginLeft:'10px', backgroundColor: '#fafafa', borderRadius: '45px', display: 'inline-block' }}>
                  <IconButton onClick={(e) => {e.preventDefault(); history.push(`/dynamic?id=${dynamic?.id}`)}} sx={{ borderRadius: '45px', width: '100px', height: '37px', backgroundColor: 'inherit', pl: '10px', pr: '10px'}}>
                    <BiCommentDetail /> 
                    <span style={{ color: '#606060', fontSize: '0.8rem', marginLeft: '10px' }}>{formatNumber(dynamic.commentCount)}</span>
                  </IconButton>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}

export default UserDynamicCard;