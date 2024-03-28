"use client"
import { getYoutubeAPIData } from "@/api/axios";
import CardList from "@/components/community/CardList";
import CommunityList from "@/components/community/CommunityList";
import TabList from "@/components/community/TabList";
import SideList from "@/components/side/SideList";
import ThemeContext from "@/context/ThemeContext";
import { youtubeResponse } from "@/data/app.data";
import { appContentWrapper, appWrapper, flexColumnGrow } from "@/styles/styles";
import { Card } from "@mui/material";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import { useSearchParams } from "next/navigation";
import { Suspense, useContext, useEffect, useState } from "react";

function OriginSearch() {
  const [youtubeData, setYoutubeData] = useState([]);
  const { setSearch, searchTabType, setSearchTabType, mobileOpen } = useContext(ThemeContext);
  const searchParams = useSearchParams();

  const onTabChange = (tabValue: string) => {
    setSearchTabType(tabValue);
  };

  useEffect(() => {
    const query = searchParams.get("q") || ''
    setSearch(query)
    // todo：结合选择类别进行对应的搜索
    // getYoutubeAPIData(query).then((response) => {
      // setYoutubeData(response.data.items);
    // });
  }, [searchParams, searchTabType]);


  // 静态数据
  const items1 = youtubeResponse
  // const items1 = youtubeData.slice(0, 8)
  
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
          }}
        >
          <SideList />
        </Box>
        <Box component="div" sx={flexColumnGrow}>
          <Box
            sx={{
              my: 2,
              width: `calc(100vw - ${sideBarWidth})`,
            }}
          >
            <TabList onTabChange={onTabChange} />
          </Box>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              p: 1,
              overflowY: 'auto',
              overflowX: 'hidden',
              width: `calc(100vw - ${sideBarWidth})`,
            }}
          >
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '2' }}>
                <CardList items={items1} contentType='Dynamics' />
              </div>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <Card sx={{ mr: 5, position: 'sticky', top: '10px', height:'610px', maxHeight: 'calc(100)', overflowY: 'auto', bgcolor: '#fefefe' }}>
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

function Search() {
  return (
    <Suspense>
      <OriginSearch/>
    </Suspense>
  )
}

export default Search;