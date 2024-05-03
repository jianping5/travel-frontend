'use client'
import { Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { getUserHomeList } from "@/api/social/social-api";
import HomeCardList from "../HomeCardList";

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