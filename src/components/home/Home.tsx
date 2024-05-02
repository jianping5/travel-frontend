'use client'
import Box from '@mui/material/Box';
import React, { useState, useEffect, useContext } from 'react';
import SideList from '../side/SideList';
import { appContentWrapper, flexColumnGrow } from '../../styles/styles';
import TabList from './TabList';
import CardList from './CardList';
import { getContentList } from '@/api/social/social-api';
import ThemeContext from '../../context/ThemeContext';
import { ItemType } from '@/api/enum';

const Home = () => {
  const [ contentList, setContentList] = useState<ContentView[]>([]);
  const { homeTabType, setHomeTabType, mobileOpen } = useContext(ThemeContext);

  const handleGetContentList = async (req: ContentListReq) => {
    try {
      const response = await getContentList(req)
      const data = response.data
      setContentList(data.list || [])
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const req: ContentListReq = {
      contentType: homeTabType,
      itemType: ItemType.VIDEO,
      pageNum: 1,
      pageSize: 10
    }
    handleGetContentList(req)
  }, [homeTabType]);

  const onTabChange = (value: number) => {
    setHomeTabType(value);
  };

  const sideBarWidth = mobileOpen ? '70px' : '250px';
  return (
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
            mb: 1,
            width: `calc(100vw - ${sideBarWidth})`,
          }}
        >
          <TabList onTabChange={onTabChange} />
        </Box>
        <Box
          component="div"
          sx={{
            flexGrow: 1,
            // mt: 1,
            overflowY: 'auto',
            overflowX: 'hidden',
            width: `calc(100vw - ${sideBarWidth})`,
          }}
        >
          <CardList items={contentList} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;