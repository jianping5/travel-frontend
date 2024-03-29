'use client'
import SellCardList from "@/components/trade/SellCardList";
import TabList from "@/components/trade/TabList";
import ThemeContext from "@/context/ThemeContext";
import { youtubeResponse } from "@/data/app.data";
import { useRouter } from "next/navigation"
import { useContext } from "react";

function Home() {
  const history = useRouter()
  const {tradeTabType, setTradeTabType} = useContext(ThemeContext)

  const onTabChange = (tabValue: string) => {
    history.push(`/trade/${tabValue}`)
    setTradeTabType(tabValue);
  };

  const items = youtubeResponse

  return (
    <div>
      <TabList onTabChange={onTabChange}/>
      <SellCardList items={items} />
    </div>
  )
}

export default Home;