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

const UserVideoContent = ({params} : {params: {contentType: string, id: any }}) => {
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
      </div>

      <div style={{ marginTop: '15px' }}>
        <HomeCardList items={userVideoListResp?.list} contentType={params.contentType}/>
      </div>
    </>
  ) 
}

export default UserVideoContent;