'use client'
import CardList from "@/components/trade/CardList";
import TabList from "@/components/trade/TabList";
import ThemeContext from "@/context/ThemeContext";
import { youtubeResponse } from "@/data/app.data";
import { useRouter } from "next/navigation"
import { useContext } from "react";

function Home() {
  const history = useRouter()
  const {tradeTabType, setTradeTabType} = useContext(ThemeContext)

  const onTabChange = (tabValue: string) => {
    history.push(`/intelligence/${tabValue}`)
    setTradeTabType(tabValue);
  };

  const items = youtubeResponse

  return (
    <div>
      <TabList onTabChange={onTabChange}/>
      <CardList items={items} />
    </div>
  )
}

export default Home;