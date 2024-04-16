'use client'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import HistoryCard from './HistoryCard';

const CardList: React.FC<any> = ({ items }) => {
  return (
    <Box sx={{marginRight: ''}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4 }}>
        {items?.length &&
          items.map((item: any) => {
            const key = item.id;
            return (
              <Grid key={key} item xs={12}>
                <HistoryCard item={item} />
              </Grid>);
          })}
      </Grid>
    </Box>
  );
};
export default CardList;