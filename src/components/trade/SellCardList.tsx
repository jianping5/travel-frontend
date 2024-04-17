import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useContext } from 'react';
import SellCard from './SellCard';
import ThemeContext from '@/context/ThemeContext';

const SellCardList: React.FC<{items: WorkView[]}> = ({ items }) => {
  const { mobileOpen } = useContext(ThemeContext);
  return (
    <Box sx={{marginRight: ''}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2 }}>
        {items.length &&
          items.map((item: any) => {
            const key = item.id;
            return (
              <Grid key={key} item xs={12} sm={mobileOpen ? 3 : 4} md={mobileOpen ? 3 : 4} lg={mobileOpen ? 3 : 4}>
                <SellCard item={item} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};
export default SellCardList;