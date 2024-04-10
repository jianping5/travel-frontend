"use client"
import { listSearch } from "@/api/social/social-api";
import LoadingScreen from "@/components/common/loading";
import CardList from "@/components/search/CardList";
import TabList from "@/components/search/TabList";
import SideList from "@/components/side/SideList";
import ThemeContext from "@/context/ThemeContext";
import { appContentWrapper, appWrapper, flexColumnGrow } from "@/styles/styles";
import Box from "@mui/material/Box"
import { useSearchParams } from "next/navigation";
import { Suspense, useContext, useEffect, useState } from "react";

function OriginSearch() {
  const [searchResp, setSearchResp] = useState<SearchResp>()
  const [loading, setLoading] = useState(true)
  const { setSearch, searchTabType, setSearchTabType, mobileOpen } = useContext(ThemeContext);
  const searchParams = useSearchParams();

  const onTabChange = (tabValue: number) => {
    setSearchTabType(tabValue);
  };

  const query = searchParams.get("q") || ''

  // 搜索
  const handleSearch = async () => {
    try {
      const req: SearchReq = {
        keyword: query,
        itemType: searchTabType,
        sortType: 0,
        pageNum: 1,
        pageSize: 10,
      }
      const res = await listSearch(req)
      const data = res.data
      setSearchResp(data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    setSearch(query)
    handleSearch()
  }, [searchParams, searchTabType]);
  
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
            {loading ? (
              <LoadingScreen/>
            ) : (
              <CardList item={searchResp} contentType={searchTabType} />
            )}
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