import React, { useContext, useEffect, useState } from 'react';
import { Avatar, Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import TabList from './TabList';
import { useSearchParams } from 'next/navigation';
import ThemeContext from '@/context/ThemeContext';
import HomeCardList from './HomeCardList';
import { youtubeResponse } from '@/data/app.data';
import VideoCard from './VideoCard';
import UserContent from './UserContent';
import { getYoutubeAPIData } from '@/api/axios';
import { useRouter } from 'next/navigation'

const UserDetail: React.FC<any> = () => {
  const [youtubeData, setYoutubeData] = useState([]);
  const { setSearch, userHomeTabType, setUserHomeTabType } = useContext(ThemeContext);
  // const searchParams = useSearchParams();
  const history = useRouter()

  // const items1 = youtubeResponse.slice(0, 10)

  const onTabChange = (tabValue: string) => {
    history.push(`/user/${tabValue}`)
    setUserHomeTabType(tabValue);
  };

  useEffect(() => {
    // const query = searchParams.get("q") || ''
    // setSearch(query)
    // todo：结合选择类别进行对应的搜索
    // getYoutubeAPIData(userHomeTabType).then((response) => {
      // setYoutubeData(response.data.items);
    // });
  }, [userHomeTabType]);


  // 静态数据
  const items1 = youtubeResponse.slice(0, 10)
  // const items1 = youtubeData.slice(0, 8)
  
  return (
    <div style={{ marginLeft: '10%', marginRight: '10%' }}>
      <img src="https://styles.redditmedia.com/t5_2zf9m/styles/bannerBackgroundImage_h8gepdvfwqb61.png" alt="Cover Image" 
      style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
        <Avatar src="https://yt3.googleusercontent.com/nkUy7yOWP3EOk-e7HbV2e2L6suWQq5-Ggctu3_pBQTSNkjVpm0SW-k34tobItcuJ-r1a1R_qig=s176-c-k-c0x00ffffff-no-rj" alt="Community Avatar" 
        sx={{ width: '120px', height: '120px', borderRadius: '50%', marginRight: '16px' }} />
        <div>
          <Typography variant="h5"  sx={{ fontWeight:'bold' }}>Cat Channel</Typography>
          <Typography variant="body1" sx={{ fontSize:'1rem', color:'gray' }}>100k views</Typography>
          <Typography variant="body1"  sx={{ fontSize:'1rem', color:'gray' }}>Description of the channel goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          <Button variant='outlined' sx={{ width:'100px', borderRadius: '100px', marginTop:'10px'}}>Follow</Button>
        </div>
      </div>

      {/* Tab 栏 */}
      <TabList onTabChange={onTabChange} />

      {/* 内容 */}
      <UserContent params={{ contentType: userHomeTabType, items: items1 }} />

    </div>
  );
};

export default UserDetail;
