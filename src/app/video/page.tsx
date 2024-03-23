'use client'
import { getYoutubeAPIData } from "@/api/axios";
import ReactPlayer from 'react-player/lazy'
import SideList from "@/components/side/SideList";
import ThemeContext from "@/context/ThemeContext";
import { youtubeResponse } from "@/data/app.data";
import { appContentWrapper, appWrapper, flexColumnGrow } from "@/styles/styles";
import Box from "@mui/material/Box"
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { Avatar, Button, Card, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import RelatedVideo from "@/components/video/RelatedVideo";
import CardList from "@/components/video/CardList";

function Search() {
  const [youtubeData, setYoutubeData] = useState([]);
  const { setSearch, searchTabType, setSearchTabType, mobileOpen } = useContext(ThemeContext);
  const searchParams = useSearchParams();
  const DynamicReactPlayer = dynamic(() => import('react-player'), { ssr: false });

  // 视频框架懒加载
  const [videoLoaded, setVideoLoaded] = useState(false);
  const handleVideoReady = () => {
    setVideoLoaded(true);
    console.log('Video is ready to play!');
  };

  useEffect(() => {
    setVideoLoaded(true);
  }, []);

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
              <div style={{ flex: 2 }}>
                {videoLoaded ? (
                  <DynamicReactPlayer
                    url="https://videocdn.cdnpk.net/joy/content/video/free/video0461/large_preview/_import_60e0167b4c3a96.14254367.mp4"
                    controls
                    width="100%"
                    height="auto"
                  />
                ) : (
                  <div style={{ width: '100%', height: '550px', backgroundColor: 'black' }}>
                    {/* 播放器框架 */}
                  </div>
                )}
                {/* 视频相关信息 */}
                <Card sx={{ marginBottom: '20px' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Deep Focus Music To Improve Concentration - 12 Hours of Ambient Study Music to Concentrate
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                      <Avatar src="/path/to/avatar.jpg" />
                      <Typography variant="body1" sx={{ marginLeft: '10px', fontWeight: 'bold' }}>jianping5</Typography>
                      <Button variant="outlined" sx={{ marginLeft: 'auto' }}>Follow</Button>
                    </Box>
                    <Divider sx={{ marginTop: '10px' }} />
                    <Typography sx={{ marginTop: '10px' }}>
                      Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nisl sed ullamcorper pharetra, quam elit aliquet leo, sit amet maximus mauris turpis a velit.
                    </Typography>
                  </CardContent>
                </Card>
                {/* 评论模块 */}
                <Card sx={{ marginTop: '20px', padding: '20px', boxShadow: 'none' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Comments</Typography>
                    {/* 在此添加评论模块 */}
                  </CardContent>
                </Card>
              </div>
              {/* 相关推荐 */}
              <div style={{ flex: 1, marginLeft: '30px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>Related Videos</Typography>
                <CardList items={items1} contentType='Videos' />
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Search;
