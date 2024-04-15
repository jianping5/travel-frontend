'use client'
import SideList from "@/components/side/SideList";
import ThemeContext from "@/context/ThemeContext";
import { appContentWrapper, appWrapper, flexColumnGrow } from "@/styles/styles";
import Box from "@mui/material/Box"
import { useSearchParams } from "next/navigation";
import { Suspense, useContext, useEffect, useState } from "react";
import { Avatar, Button, Card, CardContent, Divider, IconButton, Typography } from "@mui/material";
import CardList from "@/components/video/CardList";
import Comment from "@/components/comment/Comment";
import { createHistory, favor, getCommentList, getContentDetail, getSimilarContentList, like } from "@/api/social/social-api";
import { ItemType } from "@/api/enum";
import { formatNumber } from "@/utils/tool";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { MdOutlineFavorite } from "react-icons/md";
import FavorDialog from "@/components/video/FavorDialog";
import { RiUserFollowFill } from "react-icons/ri";
import { follow } from "@/api/user/user-api";

function OriginVideoDetail() {
  const [contentDetail, setContentDetail] = useState<ContentView>();
  const [contentSimilarList, setContentSimilarList] = useState<ContentView[]>([]);
  const { setSearch, searchTabType, setSearchTabType, mobileOpen } = useContext(ThemeContext);
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const id = searchParams.get("id") || ""
  
  // 获取内容详情
  const handleGetContentDetail = async () => {
    try {
      const req: ContentDetailReq = {
        id: parseInt(id)
      }
      const response = await getContentDetail(req)
      const data = response.data
      setContentDetail(data.contentDetail)
    } catch (err) {
      console.log(err)
    }
  }

  // 获取相似内容
  const handleGetSimilarContentList = async (req: ContentSimilarReq) => {
    try {
      const response = await getSimilarContentList(req)
      const data = response.data
      setContentSimilarList(data.list || [])
    } catch (err) {
      console.log(err)
    }
  }

  // 点赞
  const handleLike = async (itemId: number = 0, likedStatus: boolean = false) => {
    try {
      const req: LikeReq = {
        itemType: ItemType.VIDEO,
        itemId: itemId,
        likedStatus: likedStatus
      }
      await like(req)
      await handleGetContentDetail()
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
      await handleGetContentDetail()
    } catch (err) {
      console.log(err)
    }
  }

  // 增加历史记录
  const handleCreateHistory = async () => {
    try {
      const req: HistoryCreateReq = {
        itemId: parseInt(id)
      }
      await createHistory(req)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleCreateHistory()
  }, [])


  useEffect(() => {
    if (!open) {
      handleGetContentDetail()
    }

    const similarReq: ContentSimilarReq = {
      itemType: ItemType.VIDEO,
      itemId: parseInt(id)
    }
    handleGetSimilarContentList(similarReq)

  }, [searchParams, searchTabType, open]);
  
  const sideBarWidth = mobileOpen ? '70px' : '250px';
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
                <div style={{ marginBottom: '20px', boxShadow: 'none', border: 'none' }}>
                  {/* 视频 */}
                  <video
                    src={contentDetail?.content}
                    controls
                    width="100%"
                    height="auto"
                    style={{ borderRadius: '12px'}}
                  />
                  {/* 视频相关信息 */}
                  <div style={{ marginTop: '10px'}}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {contentDetail?.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                      <Avatar src={contentDetail?.userInfo.avatar} />
                      <Typography variant="body1" sx={{ marginLeft: '10px', fontWeight: 'bold' }}>{contentDetail?.userInfo.account}</Typography>
                      <Box sx={{ marginLeft: 'auto' }}>
                        {/* 点赞 */}
                        <div style={{ backgroundColor: '#fafafa', borderRadius: '45px', display: 'inline-block' }}>
                          <IconButton onClick={() => handleLike(contentDetail?.id, contentDetail?.isLiked)} sx={{ borderRadius: '45px', width:'100px', pl: '10px', pr: '10px'}}>
                            {contentDetail?.isLiked ? <ThumbUpIcon /> : <ThumbUpIcon color="disabled" />}
                            <span style={{ color: '#606060', fontSize: '0.8rem', marginLeft: '10px' }}>{formatNumber(contentDetail?.likeCount || 0 )}</span>
                          </IconButton>
                        </div>
                        {/* 收藏 */}
                        <div style={{ backgroundColor: '#fafafa', borderRadius: '45px', display: 'inline-block', marginLeft: '10px'}}>
                          <IconButton onClick={handleToggle} sx={{ borderRadius: '45px', width:'100px', pl: '10px', pr: '10px'}}>
                            {contentDetail?.isFavored ? <MdOutlineFavorite /> : <MdOutlineFavorite color="#bbb" />}
                            <span style={{ color: '#606060', fontSize: '0.8rem', marginLeft: '10px' }}>{formatNumber(contentDetail?.favorCount || 0 )}</span>
                          </IconButton>
                          <FavorDialog open={open} itemId={contentDetail?.id || 0} onClose={() => setOpen(false)} />
                        </div>
                        {/* 关注 */}
                        <div style={{ backgroundColor: '#fafafa', borderRadius: '45px', display: 'inline-block', marginLeft: '10px' }}>
                          <IconButton onClick={() => handleFollow(contentDetail?.userId, contentDetail?.userInfo.isFollowed)} sx={{ borderRadius: '45px', width:'100px', pl: '10px', pr: '10px'}}>
                            {contentDetail?.userInfo.isFollowed ? <RiUserFollowFill /> : <RiUserFollowFill color="#bbb" />}
                          </IconButton>
                        </div>
                      </Box>
                    </Box>
                    <Divider sx={{ marginTop: '10px' }} />
                    <Typography sx={{ marginTop: '10px' }}>
                      Description: {contentDetail?.description}
                    </Typography>
                  </div>
                  {/* 评论模块 */}
                  <div style={{ marginTop: '27px', marginBottom: '100px' }}> 
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: '10px' }}>Comments</Typography>
                    <Comment id={parseInt(id)} itemType={ItemType.VIDEO} />
                  </div>
                </div>
              </div>
              {/* 相关推荐 */}
              <div style={{ flex: 1, marginLeft: '30px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>Related Videos</Typography>
                <CardList items={contentSimilarList} contentType='Videos' />
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function VideoDetail() {
  return (
    <Suspense>
      <OriginVideoDetail/>
    </Suspense>
  )
}


export default VideoDetail;
function setContentSimilarList(arg0: any) {
  throw new Error("Function not implemented.");
}

