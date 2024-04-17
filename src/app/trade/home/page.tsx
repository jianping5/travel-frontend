'use client'
import { getWorkList } from "@/api/trade/trade-api";
import LoadingScreen from "@/components/common/loading";
import BuyCardList from "@/components/trade/BuyCardList";
import TabList from "@/components/trade/TabList";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

function Home() {
  const history = useRouter()
  const [workListResp, setWorkListResp] = useState<WorkListResp>()
  const [loading, setLoading] = useState(true)

  // 获取商品列表
  const handleGetWorkList = async () => {
    try {
      const req: WorkListReq = {
        pageNum: 1,
        pageSize: 10
      }
      const res = await getWorkList(req)
      const data = res.data
      setWorkListResp(data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetWorkList()
  }, [])

  const onTabChange = (tabValue: string) => {
    history.push(`/trade/${tabValue}`)
  };


  return (
    <>
      {loading ? (
        <LoadingScreen/>
      ) : (
        <div style={{ marginRight: 17}}>
          <TabList onTabChange={onTabChange} tradeTabType="home"/>
          <BuyCardList items={workListResp?.list || []} />
        </div>
      )
      }
    </>
  )
}

export default Home;