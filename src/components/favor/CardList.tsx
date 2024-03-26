import VideoCard from './VideoCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
const CardList: React.FC<any> = ({ items, contentType }) => {
  return (
    <Box sx={{marginRight: '5%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4 }}>
        {items.length &&
          items.map((item: any) => {
            const key = item.etag;
            const { videoId } = item.id;
            const { thumbnails, title, channelTitle } = item.snippet; 
            switch(contentType) {
              case 'Videos':
                return (
                  <Grid key={key} item xs={12}>
                    <VideoCard
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