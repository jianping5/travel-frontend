import AppCard from './Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';

const CardList: React.FC<any> = ({ items }) => {
  const { mobileOpen } = useContext(ThemeContext);
  return (
    <Box>
      <Grid container rowSpacing={{}} columnSpacing={{ xs: 2, sm: 2 }}>
        {items.length &&
          items.map((item: any) => {
            const key = item.id;
            return (
              <Grid key={key} item xs={12} sm={mobileOpen ? 3 : 4} md={mobileOpen ? 3 : 4} lg={mobileOpen ? 3 : 4}>
                <AppCard props={item} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};
export default CardList;