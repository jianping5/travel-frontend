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
}

export default UserFavorContent;