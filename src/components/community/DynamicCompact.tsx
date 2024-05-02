'use client'
import { Avatar, Box, Button, Card, CardMedia, Divider, IconButton, Link, Typography } from "@mui/material"
import { FileType, ItemType } from "@/api/enum";
import { formatNumber, timeAgo } from "@/utils/tool";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { BiCommentDetail } from "react-icons/bi";
import { like } from "@/api/social/social-api";
import { useState } from "react";
import { useRouter } from "next/navigation";

const DynamicCompact: React.FC<{dynamic:CommunityDynamicView}> = ({dynamic}) => {

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
    <div style={{ marginRight: '50px' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '2' }}>
          <div style={{ marginBottom: '10px' }}>
            <div>
              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <Link href={`/user/home?id=${dynamic?.userInfo.id}`}>
                  <Avatar src={dynamic?.userInfo.avatar} sx={{ width: 27, height: 27, borderRadius: '50%' }} />
                </Link>
                <Typography variant="body1" sx={{ marginLeft: '10px', fontSize: '0.9rem' }}>{dynamic?.userInfo.account} </Typography>
                <Typography variant="body1" sx={{ marginLeft: '7px', color: 'text.secondary', fontSize: '0.85rem' }}>• { dynamic?.createTime && timeAgo(new Date(dynamic?.createTime).getTime())}</Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '0.95rem', mt:'3px' }}>
                {dynamic?.title}
              </Typography>

              {/* <Divider sx={{ marginTop: '7px' }} /> */}
              <Typography sx={{ marginTop: '7px', fontSize: '0.9rem'}}>
                {dynamic?.description}
              </Typography>
            </div>
          </div>

          {/* 根据 fileType 切换 */}
          {dynamic.fileType == FileType.Video ?
            <>
              <video
                src={dynamic.content}
                controls
                width="100%"
                height="auto"
                style={{ borderRadius: '12px' }}
              />
            </>
            :
            <>
              {dynamic.fileType == FileType.Picture ?
                <>
                  <CardMedia component="img" sx={{width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '12px' }}  image={dynamic.content} alt='image' />
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
          <Box sx={{ marginTop:'10px', marginLeft: 'auto' }}>
            <div style={{ backgroundColor: '#fafafa', borderRadius: '45px', display: 'inline-block' }}>
              <IconButton onClick={() => handleLike(dynamic?.id, isLiked)} sx={{ borderRadius: '45px', width: '100px', height: '37px', backgroundColor: 'inherit', pl: '10px', pr: '10px'}}>
                {isLiked ? <ThumbUpIcon /> : <ThumbUpIcon color="disabled" />}
                <span style={{ color: '#606060', fontSize: '0.8rem', marginLeft: '10px' }}>{formatNumber(likeCount)}</span>
              </IconButton>
            </div>
            <div style={{ marginLeft:'10px', backgroundColor: '#fafafa', borderRadius: '45px', display: 'inline-block' }}>
              <IconButton onClick={() => {history.push(`/dynamic?id=${dynamic.id}`)}} sx={{ borderRadius: '45px', width: '100px', height: '37px', backgroundColor: 'inherit', pl: '10px', pr: '10px'}}>
                <BiCommentDetail /> 
                <span style={{ color: '#606060', fontSize: '0.8rem', marginLeft: '10px' }}>{formatNumber(dynamic.commentCount)}</span>
              </IconButton>
            </div>
          </Box>
          <Divider sx={{ marginTop: '7px' }} />
        </div>
      </div>
    </div>
  )
}

export default DynamicCompact;