"use client"
import { getYoutubeAPIData } from "@/api/axios";
import { listDynamic } from "@/api/social/social-api";
import CardList from "@/components/community/CardList";
import CommunityList from "@/components/community/CommunityList";
import TabList from "@/components/community/TabList";
import SideList from "@/components/side/SideList";
import ThemeContext from "@/context/ThemeContext";
import { youtubeResponse } from "@/data/app.data";
import { appContentWrapper, appWrapper, flexColumnGrow } from "@/styles/styles";
import { Card, Switch } from "@mui/material";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import { useSearchParams } from "next/navigation";
import { Suspense, useContext, useEffect, useState } from "react";

function OriginCommunity() {
  const [dynamicList, setDynamicList] = useState<CommunityDynamicView[]>([]);
  const { setSearch, dynamicTabType, setDynamicTabType, mobileOpen } = useContext(ThemeContext);
  const searchParams = useSearchParams();
  const [joinedSwitch, setJoinedSwitch] = useState(false);

  const handleSwitchChange = () => {
    setJoinedSwitch((prevSwitchValue) => !prevSwitchValue);
    console.log(joinedSwitch)
  };

  // 获取社区动态列表
  const handleListDynamic = async () => {
    try {
      const req: CommunityDynamicListReq = {
        type: dynamicTabType,
        joinedSwitch: joinedSwitch,
        pageNum: 1,
        pageSize: 10,
      }
      const response = await listDynamic(req)
      const data = response.data
      setDynamicList(data.list || [])
    } catch (err) {
      console.log(err)
    }
  }

  const onTabChange = (value: number) => {
    setDynamicTabType(value);
  };

  useEffect(() => {
    handleListDynamic()
  }, [searchParams, dynamicTabType]);
  
  const sideBarWidth = mobileOpen ? '70px' : '250px';
  return (
    <Box sx={appWrapper}>
  <Box component="main" sx={appContentWrapper}>
    <Box
      component="div"
      sx={{
        flexBasis: sideBarWidth,
        flexGrow: 0,
        flexShrink: 0,
        overflowY: 'auto',
        position: 'relative',
      }}
    >
      <SideList />
    </Box>
    <Box component="div" sx={flexColumnGrow}>
      <Box
        sx={{
          my: 2,
          width: `calc(100vw - ${sideBarWidth})`,
          position: 'relative',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <TabList onTabChange={onTabChange} />
          <Box sx={{ mr: 5}} >
            Joined
            <Switch checked={joinedSwitch} onChange={handleSwitchChange} />
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          flexGrow: 1,
          p: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          width: `calc(100vw - ${sideBarWidth})`,
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex' }}>
          <div>
            <CardList items={dynamicList} />
          </div>
          <div style={{ width: '430px', position: 'fixed', right: '10px', top: '145px', bottom: '0', maxHeight: '100vh', overflowY: 'auto' }}>
            <Card sx={{ mr: 5, height: '100%', overflow: 'auto', bgcolor: '#fefefe', borderRadius: '15px' }}>
              <Typography variant="h6" sx={{ m: 1, fontWeight: 'bold', marginBottom: '10px' }}>COMMUNITIES</Typography>
              <CommunityList />
            </Card>
          </div>
        </div>
      </Box>
    </Box>
  </Box>
</Box>

  );
}

function Community() {
  return (
    <Suspense>
      <OriginCommunity/>
    </Suspense>
  )
}

export default Community;