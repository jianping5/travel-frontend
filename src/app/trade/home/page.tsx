'use client'
import BuyCardList from "@/components/trade/BuyCardList";
import TabList from "@/components/trade/TabList";
import ThemeContext from "@/context/ThemeContext";
import { youtubeResponse } from "@/data/app.data";
import { useRouter } from "next/navigation"
import { useContext } from "react";

function Home() {
  const history = useRouter()
  // const {tradeTabType, setTradeTabType} = useContext(ThemeContext)

  const onTabChange = (tabValue: string) => {
    history.push(`/trade/${tabValue}`)
    // setTradeTabType(tabValue);
  };

  const items = youtubeResponse

  return (
    <div style={{ marginRight: 17}}>
      <TabList onTabChange={onTabChange} tradeTabType="home"/>
      <BuyCardList items={items} />
    </div>
  )
}

export default Home;