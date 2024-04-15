import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useContext } from 'react';
import BuyCard from './BuyCard';
import ThemeContext from '@/context/ThemeContext';
const BuyCardList: React.FC<any> = ({ items }) => {
  const { mobileOpen } = useContext(ThemeContext);
  return (
    <Box sx={{marginRight: ''}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2 }}>
        {items.length &&
          items.map((item: any) => {
            const key = item.etag;
            const { videoId } = item.id;
            const { thumbnails, title, channelTitle } = item.snippet; 
            return (
              <Grid key={key} item xs={12} sm={mobileOpen ? 3 : 4} md={mobileOpen ? 3 : 4} lg={mobileOpen ? 3 : 4}>
                <BuyCard
                  url={thumbnails.high.url}
                  title={title}
                  channelTitle={channelTitle}
                  videoId={videoId}
                />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};
export default BuyCardList;