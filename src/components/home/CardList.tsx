import { ContentCutTwoTone } from '@mui/icons-material';
import AppCard from './Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';

const CardList: React.FC<any> = ({ items }) => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4 }}>
        {items.length &&
          items.map((item: any) => {
            const key = item.id;
            return (
              <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
                <AppCard props={item} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};
export default CardList;