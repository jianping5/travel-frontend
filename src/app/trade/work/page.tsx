'use client'
import { getUserWorkList } from "@/api/trade/trade-api";
import LoadingScreen from "@/components/common/loading";
import SellCardList from "@/components/trade/SellCardList";
import TabList from "@/components/trade/TabList";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

function Work() {
  const history = useRouter()
  const [userWorkListResp, setUserWorkListResp] = useState<UserWorkListResp>()
  const [loading, setLoading] = useState(true)

  // 获取指定用户的商品列表
  const handleGetUserWorkList = async () => {
    try {
      const req: UserWorkListReq = {
        userId: 0, // 获取当前登录用户
        pageNum: 1,
        pageSize: 10
      }
      const res = await getUserWorkList(req)
      const data = res.data
      setUserWorkListResp(data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetUserWorkList()
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
          <TabList onTabChange={onTabChange} tradeTabType="work"/>
          <SellCardList items={userWorkListResp?.list || []} />
        </div>
      )
      }
    </>
  )
}

export default Work;