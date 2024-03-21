'use client'
import Box from '@mui/material/Box';
import React, { useState, useEffect, useContext } from 'react';
import SideList from '../side/SideList';
import { appContentWrapper, flexColumnGrow } from '../../styles/styles';
import TabList from './TabList';
import CardList from './CardList';
import { getYoutubeAPIData } from '../../api/axios';
import ThemeContext from '../../context/ThemeContext';
import { youtubeResponse } from '@/data/app.data';

const Home = () => {
  const [youtubeData, setYoutubeData] = useState([]);
  const { homeTabType, setHomeTabType, mobileOpen } = useContext(ThemeContext);

  useEffect(() => {
    // getYoutubeAPIData(homeTabType).then((response) => {
    //   setYoutubeData(response.data.items);
    // });
  }, [homeTabType]);

  // if (!youtubeData.length) {
  //   return;
  // }

  // 静态数据
  const items1 = youtubeResponse

  const onTabChange = (searchValue: string) => {
    setHomeTabType(searchValue);
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
  );
};

export default Home;