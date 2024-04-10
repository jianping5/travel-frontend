import { Avatar, Box, Button, Card, CardMedia, Divider, Typography } from "@mui/material"
import HomeCardList from "./HomeCardList"
import { useContext, useEffect, useMemo, useState } from "react";
import ApplyDialog from "../copyright/ApplyDialog";
import { getCopyrightList, getFavorList, getFavoriteList, getUserHomeContentList, getUserHomeDynamicList, getUserHomeList, listCommunity } from "@/api/social/social-api";
import { FileType, ItemType } from "@/api/enum";
import { timeAgo } from "@/utils/tool";
import { getFollowList } from "@/api/user/user-api";
import ThemeContext from "@/context/ThemeContext";

const UserContent = ({params} : {params: {contentType: string, id: any }}) => {

  switch(params.contentType) {
    case 'home':
      const [userHomeList, setUserHomeList] = useState<UserHomeListResp>()
      // 获取用户主页信息
      const handleGetUserHomeList = async () => {
        try {
          const req: UserHomeListReq = {
            userId: params.id
          }
          const response = await getUserHomeList(req)
          const data = response.data
          setUserHomeList(data)
        } catch (err) {
          console.log(err)
        }
      }
      useEffect(() => {
        console.log(123)
        handleGetUserHomeList()
      }, []);
      return (
        <>
          <div style={{ marginTop: '10px'  }}>
            <Typography variant='h5' sx={{ marginBottom: '' }} >Recent</Typography>
            <HomeCardList items={userHomeList?.recentVideoList} contentType={params.contentType}/>
          </div>

          <div style={{ marginTop: '25px', marginBottom: '100px' }}>
            <Typography variant='h5' sx={{ marginBottom: '' }} >Recommend</Typography>
            <HomeCardList items={userHomeList?.recommendVideoList} contentType={params.contentType}/>
          </div>
        </>
      )
    case 'videos':
      const [userVideoListResp, setUserVideoListResp] = useState<UserHomeContentListResp>()
      const [sortType, setSortType] = useState(0)
      // 获取用户主页内容信息
      const handleGetUserHomeContentList = async (sortType: number = 0) => {
        try {
          const req: UserHomeContentListReq = {
            userId: params.id,
            itemType: ItemType.VIDEO,
            sortType: sortType,
            pageNum: 1,
            pageSize: 10,
          }
          const response = await getUserHomeContentList(req)
          const data = response.data
          setUserVideoListResp(data)
          setSortType(sortType)
        } catch (err) {
          console.log(err)
        }
      }
      useEffect(() => {
        handleGetUserHomeContentList()
      }, []);
      return (
        <>
          <div style={{ marginTop: '10px', marginBottom: '-20px' }}>
            <Button 
              variant={sortType == 0 ? 'contained' : 'outlined' }  
              onClick={ () => {handleGetUserHomeContentList(0)} } 
              sx={{ marginLeft: '10px', borderRadius: '7px', width:'70px', height:'32px', fontSize: '0.8rem', textTransform: 'none', color: sortType == 0 ? "" : "black",
                  border: '1px solid black', backgroundColor: sortType == 0 ? '#555555 !important' : ''
              }}>
              {sortType == 0 ? "Newest" : "Newest"} 
            </Button>
            <Button 
              variant={sortType == 1 ? 'contained' : 'outlined' }  
              onClick={ () => {handleGetUserHomeContentList(1)} } 
              sx={{ marginLeft: '10px', borderRadius: '7px', width:'70px', height:'32px', fontSize: '0.8rem', textTransform: 'none', color: sortType == 1  ? "" : "black",
                  border: '1px solid black', backgroundColor: sortType == 1  ? '#555555 !important' : ''
              }}>
              {sortType == 1  ? "Popular" : "Popular"} 
            </Button>
            <Button 
              variant={sortType == 2  ? 'contained' : 'outlined' }  
              onClick={ () => {handleGetUserHomeContentList(2)} } 
              sx={{ marginLeft: '10px', borderRadius: '7px', width:'70px', height:'32px', fontSize: '0.8rem', textTransform: 'none', color: sortType == 2 ? "" : "black",
                  border: '1px solid black', backgroundColor: sortType == 2  ? '#555555 !important' : ''
              }}>
              {sortType == 2  ? "Oldest" : "Oldest"} 
            </Button>
            {/* <Button variant={sortType == 0 ? "outlined" : "contained" } onClick={() => { handleGetUserHomeContentList(0) }} sx={{ borderRadius:'7px'}}>Newest</Button> */}
            {/* <Button variant="outlined" onClick={() => { handleGetUserHomeContentList(1) }} sx={{ marginLeft: '10px', borderRadius:'7px' }}>Popular</Button> */}
            {/* <Button variant="outlined" onClick={() => { handleGetUserHomeContentList(2) }} sx={{ marginLeft: '10px', borderRadius:'7px' }}>Oldest</Button> */}
          </div>

          <div style={{ marginTop: '15px' }}>
            <HomeCardList items={userVideoListResp?.list} contentType={params.contentType}/>
          </div>
        </>
      ) 
    case 'favors':
      const [userFavorListResp, setUserFavorListResp] = useState<FavoriteListResp>()
      // 获取用户收藏夹列表
      const handleGetFavoriteList = async () => {
        try {
          const req: FavoriteListReq = {
            userId: params.id,
            itemId: 0
          }
          const res = await getFavoriteList(req)
          const data = res.data
          setUserFavorListResp(data)
        } catch (err) {
          console.log(err)
        }
      }
      useEffect(() => {
        handleGetFavoriteList()
      }, []);

      return (
        <>
          <div style={{ marginTop: '20px' }}>
            <HomeCardList items={userFavorListResp?.list} contentType={params.contentType}/>
          </div>
        </>
      ) 
    case 'dynamics':
      const [dynamicListResp, setDynamicListResp] = useState<UserHomeDynamicListResp>()

      // 获取用户主页动态
      const handleGetUserHomeDynamicList = async () => {
        try {
          const req: UserHomeDynamicListReq = {
            userId: params.id,
            pageNum: 1,
            pageSize: 10,
          }
          const res = await getUserHomeDynamicList(req)
          const data = res.data
          setDynamicListResp(data)
        } catch (err) {
          console.log(err)
        }
      }

      useEffect(() => {
          handleGetUserHomeDynamicList()
      }, []);

      return (
        <>
        {dynamicListResp?.list?.map(dynamic => {
          return (
            <div key={dynamic.id}>
              <Card sx={{ mb: '20px', mr: '30%', mt: '35px', borderRadius: '15px'}}>
                <div style={{ margin: '10px' }}>
                  <div style={{ display: 'flex' }}>
                    <div style={{ flex: '1', margin: '15px' }}>
                      <Avatar src={dynamic.userInfo?.avatar} />
                    </div>
                    <div style={{ flex: '15', marginRight:'50px'}}>
                      <Box sx={{ display: 'flex', marginTop: '10px', marginLeft: '-9px' }}>
                        <Typography variant="body1" sx={{ marginLeft: '10px', fontWeight: 'bold' }}>{dynamic.userInfo?.account}</Typography>
                        <Typography variant="body1" sx={{ marginLeft: '10px', fontSize: '1rem', color: 'LigthGray' }}> · { timeAgo(new Date(dynamic.createTime).getTime()) }</Typography>
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

                      {/* 点赞/评论按钮 */}
                      <Box sx={{ marginTop:'20px', marginLeft: 'auto' }}>
                        <Button variant="outlined" sx={{ marginLeft: '', width:'77px'}}>Like</Button>
                      </Box>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )

        })}
        </>
      )
    case 'copyrights':
      const [userCopyrightListResp, setUserCopyrightListResp] = useState<CopyrightListResp>()

      // 获取用户版权列表
      const handleGetCopyrightList = async () => {
        try {
          const req: CopyrightListReq = {
            userId: params.id
          }
          const res = await getCopyrightList(req)
          const data = res.data
          setUserCopyrightListResp(data)
        } catch (err) {
          console.log(err)
        }
      }

      useEffect(() => {
        handleGetCopyrightList()
      }, [])

      return (
        <>
          <div style={{ marginTop: '10px', marginBottom: '-20px' }}>
            {/* <Button variant="outlined" sx={{ borderRadius:'7px'}}>Apply Copyright</Button> */}
            <ApplyDialog/>
          </div>
          <div style={{ marginTop: '20px' }}>
            <HomeCardList items={userCopyrightListResp?.list} contentType={params.contentType}/>
          </div>
        </>
      ) 
    case 'follows': 
      const [userFollowsListResp, setUserFollowsListResp] = useState<FollowListView>()

      // 获取用户关注列表
      const handleGetFollowList = async () => {
        try {
          const req: FollowListReq = {
            id: params.id,
            pageNum: 1,
            pageSize: 10
          }
          const res = await getFollowList(req)
          const data = res.data
          setUserFollowsListResp(data)
        } catch (err) {
          console.log(err)
        }
      }

      useEffect(() => {
        handleGetFollowList()
      }, [])


      return (
        <>
          <div style={{ marginTop: '20px' }}>
            <HomeCardList items={userFollowsListResp?.userInfo} contentType={params.contentType} userId={params.id}/>
          </div>
        </>
      )
    case 'communities':
      const [communityListResp, setCommunityListResp] = useState<CommunityListResp>()

      // 获取用户加入社区列表
      const handleListCommunity = async () => {
        try {
          const req: CommunityListReq = {
            userId: params.id
          }
          const response = await listCommunity(req)
          const data = response.data
          setCommunityListResp(data)
        } catch (err) {
          console.log(err)
        }
      }

      useEffect(() => {
        handleListCommunity()
      }, [])

      return (
        <>
          <div style={{ marginTop: '20px' }}>
            <HomeCardList items={communityListResp?.list} contentType={params.contentType} userId={params.id} />
          </div>
        </>
      ) 
  }

  return <>
  </>

}

export default UserContent;