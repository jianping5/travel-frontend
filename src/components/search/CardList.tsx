import VideoCard from './VideoCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import CommunityCard from './CommunityCard';
import PeopleCard from './PeopleCard';
import CopyrightCard from './CopyrightCard';
import DynamicCard from './DynamicCard';

const CardList: React.FC<any> = ({ items, contentType }) => {
  return (
    <Box sx={{marginRight: '35%'}}>
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
              case 'Communities':
                return (
                  <Grid key={key} item xs={12}>
                    <CommunityCard
                      url={thumbnails.high.url}
                      title={title}
                      channelTitle={channelTitle}
                      videoId={videoId}
                    />
                  </Grid>);
              case 'Copyrights':
                return (
                  <Grid key={key} item xs={12}>
                    <CopyrightCard
                      url={thumbnails.high.url}
                      title={title}
                      channelTitle={channelTitle}
                      videoId={videoId}
                    />
                  </Grid>);
              case 'Dynamics':
                return (
                  <Grid key={key} item xs={12}>
                    <DynamicCard
                      url={thumbnails.high.url}
                      title={title}
                      channelTitle={channelTitle}
                      videoId={videoId}
                    />
                  </Grid>);
              case 'People':
                return (
                  <Grid key={key} item xs={12}>
                    <PeopleCard
                      url={thumbnails.high.url}
                      title={title}
                      channelTitle={channelTitle}
                      videoId={videoId}
                    />
                  </Grid>);
            }

          })}
      </Grid>
    </Box>
  );
};
export default CardList;