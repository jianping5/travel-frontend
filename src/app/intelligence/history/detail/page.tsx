'use client'
import { getStrategyDetail } from "@/api/intelligence/intelligence-api";
import LoadingScreen from "@/components/common/loading";
import { timeAgo } from "@/utils/tool";
import { Box, Divider, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function HistoryDetail() {
  const [strategyDetail, setStrategyDetail] = useState<StrategyView>()
  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams()
  // 使用正则表达式匹配标题内容
  const match = strategyDetail?.strategy.match(/^#\s*(.*?)\s*\n\n/);

  const id = searchParams.get("id") || "0"

  // 获取智能攻略详情
  const handleGetStrategyDetail = async () => {
    try {
      const req: StrategyDetailReq = {
        id: parseInt(id)
      }
      const res = await getStrategyDetail(req)
      const data = res.data
      setStrategyDetail(data.strategy)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetStrategyDetail()
  }, [])

  return (
    <>
    {loading ? (
      <LoadingScreen/>
    ) : (
      <div style={{ marginLeft: 20, marginRight: 70 }}>
        <Typography variant="h6" sx={{ mt: '10px' }}>{match ? match[1] : ""} | {strategyDetail?.duration} | {strategyDetail?.budget} budget | {strategyDetail?.tripGroup} | {strategyDetail?.tripMood} </Typography>
        <Typography variant="body1" sx={{ mt: '7px', color: 'gray' }}>{ strategyDetail?.createTime && timeAgo(new Date(strategyDetail?.createTime).getTime())} </Typography>
        <Divider sx={{ mt: 1}}/>
        {/* <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', pl: 1, mt: '20px', mr: 7, overflowY: 'auto' }}> */}
          <ReactMarkdown className='markdown'>{strategyDetail?.strategy}</ReactMarkdown>
        {/* </Box> */}
      </div>
    )
    }
    </>
  )
}

export default HistoryDetail;