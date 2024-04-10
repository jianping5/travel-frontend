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
import ApplyDialog from "@/components/copyright/ApplyDialog";

const UserFavorContent = ({params} : {params: {contentType: string, id: any }}) => {
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
}

export default UserFavorContent;