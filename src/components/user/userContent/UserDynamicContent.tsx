'use client'
import { Avatar, Box, Button, Card, CardMedia, Divider, Typography } from "@mui/material"
import { useContext, useEffect, useMemo, useState } from "react";
import { getCopyrightList, getFavorList, getFavoriteList, getUserHomeContentList, getUserHomeDynamicList, getUserHomeList, listCommunity } from "@/api/social/social-api";
import { FileType, ItemType } from "@/api/enum";
import { timeAgo } from "@/utils/tool";
import { getFollowList } from "@/api/user/user-api";
import ThemeContext from "@/context/ThemeContext";
import HomeCardList from "../HomeCardList";
import UserHome from "@/app/user/home/page";

const UserFavorContent = ({params} : {params: {contentType: string, id: any }}) => {
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
}

export default UserFavorContent;