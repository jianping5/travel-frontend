'use client'
import { deleteHistory, listHistory } from "@/api/social/social-api";
import LoadingScreen from "@/components/common/loading";
import CardList from "@/components/history/CardList";
import { youtubeResponse } from "@/data/app.data";
import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";


function History() {
  const [historyListResp, setHistoryListResp] = useState<HistoryListResp>()
  const [loading, setloading] = useState(true)

  // 获取历史记录
  const handleListHistory = async () => {
    try {
      const req: HistoryListReq ={
        pageNum: 1,
        pageSize: 10,
      }
      const res = await listHistory(req)
      const data = res.data
      setHistoryListResp(data)
      setloading(false)
    } catch (err) {
      console.log(err)
    }
  }

  // 清空历史
  const handleDeleteHistory = async () => {
    try {
      const req: HistoryDeleteReq = {
        id: 0
      }
      await deleteHistory(req)
      handleListHistory()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleListHistory()
  }, [])

  return (
    <>
      {loading ? (
        <LoadingScreen/>
      ) : (
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '2', position: 'relative' }}>
            <Typography variant="h4" sx={{ marginTop: '10px', marginBottom: '20px'}}> Watch history</Typography>
            <CardList items={historyListResp?.list} contentType='Videos' />
          </div>
          <div style={{ flex: '1'}}>
            <div style={{ position: 'fixed', top: '200px'}} >
              {/* <Card sx={{ marginLeft:'10px', top:'100px', boxShadow: 'none', border: 'none', position: 'sticky' }}> */}
                <Button variant="text" onClick={() => handleDeleteHistory()} sx={{ textTransform: 'none', color: 'black', borderRadius: '50px' }}>
                  <RiDeleteBin6Line style={{ marginRight: '10px', fontSize: '1.5rem', color: 'black' }} />
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 'medium', color: 'black' }}>Clear all watch history</Typography>
                </Button>
              {/* </Card> */}
            </div>

          </div>
        </div>
      )
    }
    </>
  )
}

export default History;