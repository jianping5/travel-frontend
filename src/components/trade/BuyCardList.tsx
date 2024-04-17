import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useContext } from 'react';
import BuyCard from './BuyCard';
import ThemeContext from '@/context/ThemeContext';

const BuyCardList: React.FC<{items: WorkView[]}> = ({ items }) => {
  const { mobileOpen } = useContext(ThemeContext);
  return (
    <Box sx={{marginRight: ''}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2 }}>
        {items.length &&
          items.map((item: any) => {
            const key = item.id;
            return (
              <Grid key={key} item xs={12} sm={mobileOpen ? 3 : 4} md={mobileOpen ? 3 : 4} lg={mobileOpen ? 3 : 4}>
                <BuyCard item={item} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};
export default BuyCardList;