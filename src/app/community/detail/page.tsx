"use client"
import CommunityDetail from "@/components/community/CommunityDetail";
import SideList from "@/components/side/SideList";
import ThemeContext from "@/context/ThemeContext";
import { appContentWrapper, appWrapper, flexColumnGrow } from "@/styles/styles";
import Box from "@mui/material/Box"
import { useSearchParams } from "next/navigation";
import { Suspense, useContext, useEffect, useState } from "react";

function OriginSearch() {
  const { setSearch, searchTabType, mobileOpen } = useContext(ThemeContext);
  const searchParams = useSearchParams();

  const id = searchParams.get("id") || ""

  useEffect(() => {
    const query = searchParams.get("q") || ''
    setSearch(query)
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
            component="div"
            sx={{
              flexGrow: 1,
              p: 1,
              overflowY: 'auto',
              overflowX: 'hidden',
              width: `calc(100vw - ${sideBarWidth})`,
            }}
          >
            <CommunityDetail id={parseInt(id)}/>
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