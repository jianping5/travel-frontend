import VideoCard from './VideoCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import FavorCard from './FavorCard';
import FollowCard from './FollowCard';


const CardList: React.FC<any> = ({ items, contentType }) => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4 }}>
        {items.length &&
          items.map((item: any) => {
            const key = item.etag;
            const { videoId } = item.id;
            const { thumbnails, title, channelTitle } = item.snippet; 
            switch(contentType) {
              case 'home':
              case 'videos':
              case 'copyrights':
                return (
                  <Grid key={key} item xs={12} sm={6} md={4} lg={3} sx={{ marginTop: '5px' }} >
                    <VideoCard
                      url={thumbnails.high.url}
                      title={title}
                      channelTitle={channelTitle}
                      videoId={videoId}
                    />
                  </Grid>
                );
              case 'favors':
                return (
                  <Grid key={key} item xs={12} sm={6} md={4} lg={3} sx={{ marginTop: '5px' }} >
                    <FavorCard
                      url={thumbnails.high.url}
                      title={title}
                      channelTitle={channelTitle}
                      videoId={videoId}
                    />
                  </Grid>
                );
              case 'follows':
                return (
                  <Grid key={key} item xs={12} sx={{ marginTop: '5px' }} >
                    <FollowCard
                      url={thumbnails.high.url}
                      title={title}
                      channelTitle={channelTitle}
                      videoId={videoId}
                    />
                  </Grid>
                );
            }

          })}
      </Grid>
    </Box>
  );
};
export default CardList;