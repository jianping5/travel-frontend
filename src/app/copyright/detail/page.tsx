'use client'
import { Box, Button, Card, CardMedia, Divider, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useSearchParams } from "next/navigation";
import { getRecordList, getWorkDetail, updateWork } from "@/api/trade/trade-api";
import { useEffect, useState } from "react";
import { getLoginUserId, timeAgo } from "@/utils/tool";
import { WorkStatus, WorkUpdateType } from "@/api/enum";
import { MdRemoveShoppingCart } from "react-icons/md";
import { getCopyrightDetail } from "@/api/social/social-api";

function CopyrightDetail() {
  const [workDetail, setWorkDetail] = useState<WorkDetailResp>()
  const [copyrightDetail, setCopyrightDetail] = useState<CopyrightDetailResp>()
  const searchParams = useSearchParams()
  const id = searchParams.get("id") || '0'
  const loginUserId = getLoginUserId()

  // 获取版权详情
  const handleGetCopyrightDetail = async () => {
    try {
      const req: CopyrightDetailReq = {
        id: parseInt(id)
      }
      const res = await getCopyrightDetail(req)
      const data = res.data
      setCopyrightDetail(data)
    } catch (err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    handleGetCopyrightDetail()
  }, [])

  return (
    <div>
      <div style={{ display: 'flex', marginBottom: 17 }}>
        <div style={{}}>
          {/* <Card sx={{ width: '600px', height: '500px', borderRadius: '10px', mt: 5, border:'1px solid #ccc' }}>
            <CardMedia 
            component="img" 
            image={workDetail?.work.coverUrl}
            alt='image' 
            sx={{ objectFit: 'contain', width: '100%', height:'100%' }}
            />
          </Card> */}
          <Card sx={{ width: '600px', height: '500px', borderRadius: '10px', mt: 5, border:'0px solid #ccc' }}>
            <video
            src={copyrightDetail?.copyright.content}
            controls
            style={{  width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </Card>
        </div>

        <div style={{ flex: '1' }}>
          <Box sx={{ ml: '10px', mt: 5}}>
            <Typography variant="h5" >{copyrightDetail?.copyright.title}</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'medium', fontSize: '1rem', color: '#242424'}}>Owned by {copyrightDetail?.userInfo.account}</Typography>
            {/* <Card sx={{ mt: 2, mr: 3, p: 1, height:'200px', borderRadius: '9px', border:'1px solid #ccc', backgroundColor: '#fefefe' }}>
              <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', m: 1}}> Sales start on {workDetail?.work?.createTime && timeAgo(new Date(workDetail?.work?.createTime).getTime())} </Typography>
              <Divider/>
              <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', m: 1, color: '#777' }}> Current price </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, fontSize: '1.7rem', m: 1 }}> {workDetail?.work.price} GO </Typography>
            </Card> */}
            <Card sx={{ mt: 3, mr: 3, p: 1, height:'200px', borderRadius: '9px', border:'1px solid #ccc', backgroundColor: '#fefefe' }}>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem', m: 1, fontWeight: 'bold'}}> Description </Typography>
              <Divider/>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', m: 1}}> {copyrightDetail?.copyright.description} </Typography>
            </Card>
          </Box>
        </div>
      </div>
    </div>

  )
}

export default CopyrightDetail;