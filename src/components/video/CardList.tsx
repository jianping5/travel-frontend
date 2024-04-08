import VideoCard from './VideoCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';

const CardList: React.FC<any> = ({ items, contentType }) => {
  return (
    <Box sx={{marginRight: '20%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4 }}>
        {items.length != 0 &&
          items.map((item: any) => {
            const key = item.etag;
            switch(contentType) {
              case 'Videos':
                return (
                  <Grid key={key} item xs={12}>
                    <VideoCard props={item} />
                  </Grid>
                );
            }

          })}
      </Grid>
    </Box>
  );
};
export default CardList;