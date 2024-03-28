'use client'
import CardList from "@/components/intelligence/CardList";
import TabList from "@/components/intelligence/TabList";
import ThemeContext from "@/context/ThemeContext";
import { youtubeResponse } from "@/data/app.data";
import { useRouter } from "next/navigation"
import { useContext, useEffect } from "react";

function History() {
  const items = youtubeResponse
  const { setIntelligenceTabType } = useContext(ThemeContext)
  const history = useRouter()

  useEffect(() => {
    setIntelligenceTabType('history')
  }, [])

  const onTabChange = (tabValue: string) => {
    history.push(`/intelligence/${tabValue}`)
    setIntelligenceTabType(tabValue);
  };

  return (
    <div>
      <TabList onTabChange={onTabChange} />
      <CardList items={items} />
    </div>
  )
}

export default History;