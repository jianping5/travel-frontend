import VideoCard from './VideoCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import FavorCard from './FavorCard';
import FollowCard from './FollowCard';
import CommunityCard from './CommunityCard';
import CopyrightCard from './CopyrightCard';


const CardList: React.FC<any> = ({ items, contentType, userId }) => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4 }}>
        {items?.length > 0 &&
          items.map((item: any) => {
            const key = item.id;
            switch(contentType) {
              case 'home':
              case 'videos':
                return (
                  <Grid key={key} item xs={12} sm={6} md={4} lg={3} sx={{ marginTop: '5px' }} >
                    <VideoCard props={item}/>
                  </Grid>
                );
              case 'copyrights':
                return (
                  <Grid key={key} item xs={12} sm={6} md={4} lg={3} sx={{ marginTop: '5px' }} >
                    <CopyrightCard props={item}/>
                  </Grid>
                );
              case 'favors':
                return (
                  <Grid key={key} item xs={12} sm={6} md={4} lg={3} sx={{ marginTop: '5px' }} >
                    <FavorCard props={item} />
                  </Grid>
                );
              case 'follows':
                return (
                  <Grid key={key} item xs={12} sx={{ marginTop: '5px' }} >
                    <FollowCard props={item} userId={userId} />
                  </Grid>
                );
              case 'communities':
                return (
                  <Grid key={key} item xs={12} sx={{ marginTop: '5px' }} >
                    <CommunityCard props={item} userId={userId} />
                  </Grid>
                );
            }

          })}
      </Grid>
    </Box>
  );
};
export default CardList;