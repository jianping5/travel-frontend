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

const UserHomeContent = ({params} : {params: {contentType: string, id: any }}) => {
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
}

export default UserHomeContent;