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

export default UserFavorContent;