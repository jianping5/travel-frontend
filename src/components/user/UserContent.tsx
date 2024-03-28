import { Avatar, Box, Button, Card, CardMedia, Divider, Typography } from "@mui/material"
import HomeCardList from "./HomeCardList"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import ApplyDialog from "../copyright/ApplyDialog";

type ItemProps = {
  url: string,
  title: string,
  channelTitle: string,
  videoId: number,
}

const UserContent = ({params} : {params: {contentType: string, items: any }}) => {
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
  
  // 动态类型
  let DynamicContent = 
  <>
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
  </>

  DynamicContent = 
  <>
    <CardMedia component="img" sx={{width: '100%', height: 'auto', objectFit: 'cover'}}  image='https://i.ytimg.com/vi/hWS6rXO_xI8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdMCNk0neI9lcnP7kIYqTffX30SA' alt='image' />
  </>
  
  switch(params.contentType) {
    case 'home':
      return (
        <>
          <div style={{ marginTop: '10px'  }}>
            <Typography variant='h5' sx={{ marginBottom: '' }} >Latest</Typography>
            <HomeCardList items={params.items} contentType={params.contentType}/>
          </div>

          <div style={{ marginTop: '25px' }}>
            <Typography variant='h5' sx={{ marginBottom: '' }} >Hotest</Typography>
            <HomeCardList items={params.items} contentType={params.contentType}/>
          </div>
        </>
      )
    case 'videos':
      return (
        <>
          <div style={{ marginTop: '10px', marginBottom: '-20px' }}>
            <Button variant="outlined" sx={{ borderRadius:'7px'}}>Latest</Button>
            <Button variant="outlined" sx={{ marginLeft: '10px', borderRadius:'7px' }}>Hotest</Button>
            <Button variant="outlined" sx={{ marginLeft: '10px', borderRadius:'7px' }}>Oldest</Button>
          </div>

          <div style={{ marginTop: '20px' }}>
            <HomeCardList items={params.items} contentType={params.contentType}/>
          </div>
        </>
      ) 
    case 'favors':
      return (
        <>
          <div style={{ marginTop: '20px' }}>
            <HomeCardList items={params.items} contentType={params.contentType}/>
          </div>
        </>
      ) 
    case 'dynamics':
      return (
        <>
        <Card sx={{marginBottom: '20px', marginRight: '30%'}}>
          <div style={{ margin: '10px' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '1', margin: '15px' }}>
                <Avatar src="https://yt3.googleusercontent.com/nkUy7yOWP3EOk-e7HbV2e2L6suWQq5-Ggctu3_pBQTSNkjVpm0SW-k34tobItcuJ-r1a1R_qig=s176-c-k-c0x00ffffff-no-rj" />
              </div>
              <div style={{ flex: '15', marginRight:'50px'}}>
                <Box sx={{ display: 'flex', marginTop: '10px', marginLeft: '-9px' }}>
                  <Typography variant="body1" sx={{ marginLeft: '10px', fontWeight: 'bold' }}>jianping5</Typography>
                  <Typography variant="body1" sx={{ marginLeft: '10px', fontSize: '0.9rem', color: 'LigthGray' }}> 1 hr ago</Typography>
                </Box>
                <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    Deep Focus Music To Improve Concentration - 12 Hours of Ambient Study Music to Concentrate
                </Typography>
                <Divider sx={{ marginTop: '10px' }} />
                <Typography sx={{ marginTop: '10px' }}>
                  Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nisl sed ullamcorper pharetra, quam elit aliquet leo, sit amet maximus mauris turpis a velit.
                </Typography>

                {/* 动态内容（文本/图片/视频） */}
                {DynamicContent}

                {/* 点赞/评论按钮 */}
                <Box sx={{ marginTop:'20px', marginLeft: 'auto' }}>
                  <Button variant="outlined" sx={{ marginLeft: '', width:'77px'}}>Like</Button>
                </Box>
              </div>
            </div>
          </div>
        </Card>

        <Card sx={{marginBottom: '20px', marginRight: '30%'}}>
          <div style={{ margin: '10px' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '1', margin: '15px' }}>
                <Avatar src="https://yt3.googleusercontent.com/nkUy7yOWP3EOk-e7HbV2e2L6suWQq5-Ggctu3_pBQTSNkjVpm0SW-k34tobItcuJ-r1a1R_qig=s176-c-k-c0x00ffffff-no-rj" />
              </div>
              <div style={{ flex: '15', marginRight:'50px'}}>
                <Box sx={{ display: 'flex', marginTop: '10px', marginLeft: '-9px' }}>
                  <Typography variant="body1" sx={{ marginLeft: '10px', fontWeight: 'bold' }}>jianping5</Typography>
                  <Typography variant="body1" sx={{ marginLeft: '10px', fontSize: '0.9rem', color: 'LigthGray' }}> 1 hr ago</Typography>
                </Box>
                <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    Deep Focus Music To Improve Concentration - 12 Hours of Ambient Study Music to Concentrate
                </Typography>
                <Divider sx={{ marginTop: '10px' }} />
                <Typography sx={{ marginTop: '10px' }}>
                  Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nisl sed ullamcorper pharetra, quam elit aliquet leo, sit amet maximus mauris turpis a velit.
                </Typography>

                {/* 动态内容（文本/图片/视频） */}
                {DynamicContent}

                {/* 点赞/评论按钮 */}
                <Box sx={{ marginTop:'20px', marginLeft: 'auto' }}>
                  <Button variant="outlined" sx={{ marginLeft: '', width:'77px'}}>Like</Button>
                </Box>
              </div>
            </div>
          </div>
        </Card>

        <Card sx={{marginBottom: '20px', marginRight: '30%'}}>
          <div style={{ margin: '10px' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '1', margin: '15px' }}>
                <Avatar src="https://yt3.googleusercontent.com/nkUy7yOWP3EOk-e7HbV2e2L6suWQq5-Ggctu3_pBQTSNkjVpm0SW-k34tobItcuJ-r1a1R_qig=s176-c-k-c0x00ffffff-no-rj" />
              </div>
              <div style={{ flex: '15', marginRight:'50px'}}>
                <Box sx={{ display: 'flex', marginTop: '10px', marginLeft: '-9px' }}>
                  <Typography variant="body1" sx={{ marginLeft: '10px', fontWeight: 'bold' }}>jianping5</Typography>
                  <Typography variant="body1" sx={{ marginLeft: '10px', fontSize: '0.9rem', color: 'LigthGray' }}> 1 hr ago</Typography>
                </Box>
                <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    Deep Focus Music To Improve Concentration - 12 Hours of Ambient Study Music to Concentrate
                </Typography>
                <Divider sx={{ marginTop: '10px' }} />
                <Typography sx={{ marginTop: '10px' }}>
                  Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nisl sed ullamcorper pharetra, quam elit aliquet leo, sit amet maximus mauris turpis a velit.
                </Typography>

                {/* 动态内容（文本/图片/视频） */}
                {DynamicContent}

                {/* 点赞/评论按钮 */}
                <Box sx={{ marginTop:'20px', marginLeft: 'auto' }}>
                  <Button variant="outlined" sx={{ marginLeft: '', width:'77px'}}>Like</Button>
                </Box>
              </div>
            </div>
          </div>
        </Card>
        </>
      )
    case 'copyrights':
      return (
        <>
          <div style={{ marginTop: '10px', marginBottom: '-20px' }}>
            {/* <Button variant="outlined" sx={{ borderRadius:'7px'}}>Apply Copyright</Button> */}
            <ApplyDialog/>
          </div>
          <div style={{ marginTop: '20px' }}>
            <HomeCardList items={params.items} contentType={params.contentType}/>
          </div>
        </>
      ) 
    case 'follows': 
      return (
        <>
          <div style={{ marginTop: '20px' }}>
            <HomeCardList items={params.items} contentType={params.contentType}/>
          </div>
        </>
      )
    case 'communities':
      return (
        <>
          <div style={{ marginTop: '20px' }}>
            <HomeCardList items={params.items} contentType={params.contentType}/>
          </div>
        </>
      ) 
  }

}

export default UserContent;