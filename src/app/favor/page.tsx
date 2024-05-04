'use client'
import { getFavorList, getFavoriteDetail } from "@/api/social/social-api";
import LoadingScreen from "@/components/common/loading";
import CardList from "@/components/favor/CardList";
import { youtubeResponse } from "@/data/app.data";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function OriginFavor() {
  const searchParams = useSearchParams()
  const [favorListResp, setFavorListResp] = useState<FavorListResp>()
  const [favoriteDetail, sestFavoriteDetail] = useState<FavoriteListView>()
  const [loading, setLoading] = useState(true)

  const id = searchParams.get("id") || "0"

  // 获取用户收藏夹列表
  const handleGetFavorList = async () => {
    try {
      const req: FavorListReq = {
        favoriteId: parseInt(id)
      }
      const res = await getFavorList(req)
      const data = res.data
      setFavorListResp(data)
    } catch (err) {
      console.log(err)
    }
  }

  // 获取收藏夹详情 + 获取收藏夹列表
  const handleGetFavoriteDetail = async () => {
    try {
      const req: FavoriteDetailReq = {
        id: parseInt(id)
      }
      const res = await getFavoriteDetail(req)
      const data = res.data
      sestFavoriteDetail(data.favoriteDetail)
      await handleGetFavorList()
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetFavoriteDetail()
  }, []);
  

  // todo: 考虑动态背景颜色，根据图片提取
  const bgcolor = 'white'

  return (
    <>
      {loading ? (
        <LoadingScreen/>
      ) : (
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1', position: 'sticky', top: '20px', maxHeight: '500px'}}>
            <Card sx={{ mt: '20px', height:'85vh', borderRadius:'17px', width:'370px', marginLeft:'70px', backgroundColor: 'white' }}>
              <CardContent sx={{ margin: '10px' }}>
                <img src={favoriteDetail?.coverUrl}
                style={{ width:'400px', height: '180px', borderRadius: '15px'}}>
                </img>
                <Typography variant="h4" sx={{ marginTop: '17px' }}>
                  {favoriteDetail?.name}
                </Typography>
              </CardContent>
            </Card>
          </div>
  
          <div style={{ marginLeft:'20px'}}>
          </div>
  
          <div style={{ flex: '2', marginTop:'35px'}}>
            <CardList items={favorListResp?.list} contentType='Videos'/>
          </div>
  
        </div>
      )

    }
    </>
  )

}

function Favor() {
  return (
    <Suspense>
      <OriginFavor/>
    </Suspense>
  )
}

export default Favor;