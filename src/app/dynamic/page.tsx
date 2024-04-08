'use client'
import { getYoutubeAPIData } from "@/api/axios";
import ReactPlayer from 'react-player/lazy'
import SideList from "@/components/side/SideList";
import ThemeContext from "@/context/ThemeContext";
import { youtubeResponse } from "@/data/app.data";
import { appContentWrapper, appWrapper, flexColumnGrow } from "@/styles/styles";
import Box from "@mui/material/Box"
import { useSearchParams } from "next/navigation";
import { Suspense, useContext, useEffect, useState } from "react";
import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from "@mui/material";
import RelatedVideo from "@/components/video/RelatedVideo";
import CommunityInfo from "@/components/community/CommunityInfo";
import Comment from "@/components/comment/Comment";
import { getDynamicDetail, like } from "@/api/social/social-api";
import { formatNumber, timeAgo } from "@/utils/tool";
import { FileType, ItemType } from "@/api/enum";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import dynamic from "next/dynamic";
import { follow } from "@/api/user/user-api";
import { RiUserFollowFill } from "react-icons/ri";

function OriginDynamic() {
  const [dynamicDetail, setDynamicDetail] = useState<CommunityDynamicView>();
  const { setSearch, searchTabType, setSearchTabType, mobileOpen } = useContext(ThemeContext);
  const searchParams = useSearchParams();

  const id = searchParams.get("id") || ""

  // 获取动态详情
  const handleGetDynamicDetail = async () => {
    try {
      const req: CommunityDynamicDetailReq = {
        id: parseInt(id)
      }
      const response = await getDynamicDetail(req)
      const data = response.data
      setDynamicDetail(data.dynamicDetail)
    } catch (err) {
      console.log(err)
    }
  }

  // 点赞
  const handleLike = async (itemId: number = 0, likedStatus: boolean = false) => {
    try {
      const req: LikeReq = {
        itemType: ItemType.DYNAMIC,
        itemId: itemId,
        likedStatus: likedStatus
      }
      await like(req)
      await handleGetDynamicDetail()
    } catch (err) {
      console.log(err)
    }
  }

  // 关注
  const handleFollow = async (id: number = 0, type: boolean = false) => {
  try {
    const req: FollowReq = {
      id: id,
      type: type
    }
    await follow(req)
    await handleGetDynamicDetail()
  } catch (err) {
    console.log(err)
  }
  }

  // 视频框架懒加载
  const [videoLoaded, setVideoLoaded] = useState(false);
  const handleVideoReady = () => {
    setVideoLoaded(true);
    console.log('Video is ready to play!');
  };

  useEffect(() => {
    handleGetDynamicDetail()
  }, [searchParams, searchTabType]);
  
  const sideBarWidth = mobileOpen ? '70px' : '250px';

  // 动态类型
  let DynamicContent
  switch(dynamicDetail?.fileType) {
    case FileType.Picture:
      DynamicContent = 
        <>
          <CardMedia component="img" sx={{width: '100%', height: 'auto', objectFit: 'cover'}}  image={dynamicDetail.content} alt='image' />
        </>
      break;
    case FileType.Video:
      DynamicContent = 
        <>
          <video
          src={dynamicDetail.content}
          controls
          width="100%"
          height="auto"
          style={{ borderRadius: '12px'}}
          />
        </>
      break;
    case FileType.Text:
      DynamicContent = 
        <>
        <Typography>
          {dynamicDetail.content}
        </Typography>
        </>
  }

  return (
    <Box sx={appWrapper}>
      <Box component="main" sx={appContentWrapper}>
        <Box
          component="div"
          sx={{
            flexBasis: sideBarWidth,
            flexGrow: 0,
            flexShrink: 0,
            overflowY: 'auto',
          }}
        >
          <SideList />
        </Box>
        <Box component="div" sx={flexColumnGrow}>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              p: 1,
              overflowY: 'auto',
              overflowX: 'hidden',
              width: `calc(100vw - ${sideBarWidth})`,
            }}
          >
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 2 }}>
                {/* 动态相关信息 */}
                <div style={{ marginBottom: '10px' }}>
                  <div>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                      <Avatar src={dynamicDetail?.userInfo.avatar} />
                      <Typography variant="body1" sx={{ marginLeft: '10px', fontWeight: 'bold' }}>{dynamicDetail?.userInfo.account}</Typography>
                      <Typography variant="body1" sx={{ marginLeft: '10px', fontWeight: 'medium', fontSize: '1rem', color: 'LigthGray' }}>· { dynamicDetail?.createTime && timeAgo(new Date(dynamicDetail?.createTime).getTime())}</Typography>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {dynamicDetail?.title}
                    </Typography>

                    <Divider sx={{ marginTop: '10px' }} />
                    <Typography sx={{ marginTop: '10px' }}>
                      Description: {dynamicDetail?.description}
                    </Typography>
                  </div>
                </div>
                {/* 动态内容（文本/图片/视频） */}
                {DynamicContent}

                <Box sx={{ marginTop:'20px', marginLeft: 'auto' }}>
                  {/* 点赞 */}
                  <div style={{ backgroundColor: '#fafafa', borderRadius: '45px', display: 'inline-block' }}>
                    <IconButton onClick={() => handleLike(dynamicDetail?.id, dynamicDetail?.isLiked)} sx={{ borderRadius: '45px', width: '100px', backgroundColor: 'inherit', pl: '10px', pr: '10px'}}>
                      {dynamicDetail?.isLiked ? <ThumbUpIcon /> : <ThumbUpIcon color="disabled" />}
                      <span style={{ color: '#606060', fontSize: '0.8rem', marginLeft: '10px' }}>{formatNumber(dynamicDetail?.likeCount)}</span>
                    </IconButton>
                  </div>
                  {/* 关注 */}
                  <div style={{ backgroundColor: '#fafafa', borderRadius: '45px', display: 'inline-block', marginLeft: '10px' }}>
                    <IconButton onClick={() => handleFollow(dynamicDetail?.userInfo.id, dynamicDetail?.userInfo.isFollowed)} sx={{ borderRadius: '45px', width:'100px', backgroundColor: 'inherit', pl: '10px', pr: '10px'}}>
                      {dynamicDetail?.userInfo.isFollowed ? <RiUserFollowFill /> : <RiUserFollowFill color="#bbb" />}
                    </IconButton>
                  </div>
                </Box>

                {/* 评论模块 */}
                <div style={{ marginTop: '27px', marginBottom: '100px' }}> 
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: '10px' }}>Comments</Typography>
                  {/* 在此添加评论模块 */}
                  <Comment id={parseInt(id) || 0} itemType={ItemType.DYNAMIC}/>
                </div>
              </div>
              {/* 社区信息 */}
              <div style={{ flex: 1, marginLeft: '30px', position: 'sticky', top: '20px', maxHeight: '60px' }}>
                {/* <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>Related Videos</Typography> */}
                <CommunityInfo id={dynamicDetail?.communityId || 0}/>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Dynamic() {
  return (
    <Suspense>
      <OriginDynamic/>
    </Suspense>
  )
}


export default Dynamic;
