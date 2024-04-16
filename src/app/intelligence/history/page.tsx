'use client'
import { getStrategyList } from "@/api/intelligence/intelligence-api";
import CardList from "@/components/intelligence/CardList";
import TabList from "@/components/intelligence/TabList";
import ThemeContext from "@/context/ThemeContext";
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react";

function History() {
  const [strategyResp, setStrategyResp] = useState<StrategyListResp>()
  const history = useRouter()

  // 获取智能攻略列表
  const handleGetStrategyList = async () => {
    try {
      const res = await getStrategyList()
      const data = res.data
      setStrategyResp(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetStrategyList()
  }, [])

  const onTabChange = (tabValue: string) => {
    history.push(`/intelligence/${tabValue}`)
  };

  return (
    <div style={{ marginBottom: 20}}>
      <TabList onTabChange={onTabChange} intelligenceTabType="history" />
      <CardList items={strategyResp?.list} />
    </div>
  )
}

export default History;