'use client'
import { Box, Button, Card, CardMedia, Divider, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useSearchParams } from "next/navigation";
import { getRecordList, getWorkDetail } from "@/api/trade/trade-api";
import { useEffect, useState } from "react";
import { getLoginUserId, timeAgo } from "@/utils/tool";
import { WorkStatus } from "@/api/enum";
import { MdRemoveShoppingCart } from "react-icons/md";

function CopyrightDetail() {
  const [workDetail, setWorkDetail] = useState<WorkDetailResp>()
  const [recordListResp, setRecordListResp] = useState<RecordListResp>()
  const searchParams = useSearchParams()
  const id = searchParams.get("id") || '0'
  const loginUserId = getLoginUserId()

  // 按钮内容/背景颜色/结尾图标
  let content = ""
  let bgColor = ""
  let endIcon = ""
  switch(workDetail?.work.status) {
    case WorkStatus.Created:
      if (workDetail.work.userId == loginUserId) {
        content = "Sell now"
        bgColor = '#1e88e7 !important'
        endIcon = "sell"
      }
      break;
    case WorkStatus.OnSale:
      if (workDetail.work.userId == loginUserId) {
        content = "Remove now"
        bgColor = '#e57373 !important'
        endIcon = "remove"
      } else {
        content = "Buy now"
        bgColor = '#1e88e7 !important'
        endIcon = "buy"
      }
      break;
    case WorkStatus.Sold:
      if (workDetail.work.userId == loginUserId) {
        content = "Sold"
        bgColor = 'gray'
      }  
      break;
  }

  // 获取商品详情
  const handleGetWorkDetail = async () => {
    try {
      const req: WorkDetailReq = {
        id: parseInt(id)
      }
      const res = await getWorkDetail(req)
      const data = res.data
      setWorkDetail(data)
    } catch (err) {
      console.log(err)
    }
  }

  // 获取交易记录列表
  const handleGetRecordList = async () => {
    try {
      const req: RecordListReq = {
        workId: parseInt(id)
      }
      const res = await getRecordList(req)
      const data = res.data
      setRecordListResp(data)
    } catch (err) {
      console.log(err)
    }
  }

  // // 获取商品详情信息
  // const handleGetWorkInfo = async () => {
  //   await handleGetWorkDetail()
  //   await handleGetRecordList()
  // }

  useEffect(() => {
    handleGetWorkDetail()
    handleGetRecordList()
  }, [])

  // 模拟一些数据
  const data = [
    { event: 'Event 1', price: '$10', from: 'Alice', to: 'Bob', date: '2024-03-20' },
    { event: 'Event 2', price: '$15', from: 'Charlie', to: 'David', date: '2024-03-21' },
    { event: 'Event 3', price: '$20', from: 'Eve', to: 'Frank', date: '2024-03-22' },
  ];


  return (
    <div>
      <div style={{ display: 'flex', marginBottom: 17 }}>
        <div style={{}}>
          <Card sx={{ width: '600px', height: '500px', borderRadius: '10px', ml: 5, mt: 5, border:'1px solid #ccc' }}>
            <CardMedia 
            component="img" 
            image={workDetail?.work.coverUrl}
            alt='image' 
            sx={{ objectFit: 'contain', width: '100%', height:'100%' }}
            />
          </Card>
        </div>

        <div style={{ flex: '1' }}>
          <Box sx={{ ml: '10px', mt: 5}}>
            <Typography variant="h5" >{workDetail?.work.title}</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'medium', fontSize: '1rem', color: '#242424'}}>Owned by {workDetail?.userInfo.account}</Typography>
            <Card sx={{ mt: 2, mr: 3, p: 1, height:'200px', borderRadius: '9px', border:'1px solid #ccc', backgroundColor: '#fefefe' }}>
              <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', m: 1}}> Sales start on {workDetail?.work?.createTime && timeAgo(new Date(workDetail?.work?.createTime).getTime())} </Typography>
              <Divider/>
              <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', m: 1, color: '#777' }}> Current price </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, fontSize: '1.7rem', m: 1 }}> {workDetail?.work.price} GO </Typography>
              <Button variant="contained" sx={{ borderRadius: '10px', ml:1, backgroundColor: bgColor, width:'300px', height:'50px', textTransform: 'none', fontWeight: 'medium', fontSize: '1rem'}} 
              endIcon={(endIcon == 'buy' || endIcon == 'sell') ? <HiOutlineShoppingCart /> : endIcon == 'remove' ? <MdRemoveShoppingCart/> : ''}>
                {content}
              </Button>
            </Card>
            <Card sx={{ mt: 3, mr: 3, p: 1, height:'200px', borderRadius: '9px', border:'1px solid #ccc', backgroundColor: '#fefefe' }}>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem', m: 1, fontWeight: 'bold'}}> Description </Typography>
              <Divider/>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', m: 1}}> Supports creator This listing is paying the collection creator their suggested creator earnings. </Typography>
            </Card>
          </Box>
        </div>

      </div>

      <div style={{ marginBottom: 20 }}>
        <Card sx={{ ml: 5, mr: 3, p: 1, borderRadius: '9px', border:'1px solid #ccc', backgroundColor: '#fefefe' }}>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem', m: 1,  fontWeight: 'bold' }}> Trade record </Typography>
          <Divider/>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Event</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>From</TableCell>
                <TableCell>To</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recordListResp?.list?.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>"Sale"</TableCell>
                  <TableCell>{record.price}</TableCell>
                  <TableCell>{record.oldUserInfo.account}</TableCell>
                  <TableCell>{record.newUserInfo.account}</TableCell>
                  <TableCell>{timeAgo(new Date(record.createTime).getTime())}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>

  )
}

export default CopyrightDetail;