'use client'
import { getYoutubeAPIData } from "@/api/axios";
import CardList from "@/components/search/CardList";
import TabList from "@/components/search/TabList";
import SideList from "@/components/side/SideList";
import ThemeContext from "@/context/ThemeContext";
import { appContentWrapper, appWrapper, flexColumnGrow } from "@/styles/styles";
import Box from "@mui/material/Box"
import { useContext, useEffect, useState } from "react";

function Search() {
  const [youtubeData, setYoutubeData] = useState([]);
  const { search, setSearch, mobileOpen } = useContext(ThemeContext);

  const onTabChange = (searchValue: string) => {
    setSearch(searchValue);
  };

  useEffect(() => {
    getYoutubeAPIData(search).then((response) => {
      setYoutubeData(response.data.items);
    });
  }, [search]);

  // if (!youtubeData.length) {
  //   return;
  // }

  const items1 = youtubeData.slice(0, 15);
  
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
            <CardList items={items1} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Search;