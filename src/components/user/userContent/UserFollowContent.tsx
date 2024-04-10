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

const UserFollowContent = ({params} : {params: {contentType: string, id: any }}) => {
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
}

export default UserFollowContent;