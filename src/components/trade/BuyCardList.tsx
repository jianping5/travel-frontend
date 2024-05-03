import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useContext, useState } from 'react';
import BuyCard from './BuyCard';
import ThemeContext from '@/context/ThemeContext';

const BuyCardList: React.FC<{items: WorkView[]}> = ({ items }) => {
  const { mobileOpen } = useContext(ThemeContext);
  const [workItems, setWorkItems] = useState(items)

  // 当商品被移除时触发的回调函数
  const handleItemRemove = (removedItemId: number) => {
    // 根据被移除的商品 id 过滤掉被移除的商品
    const updatedItems = workItems.filter(item => item.id !== removedItemId);
    // 更新 BuyCardList 的 items prop
    setWorkItems(updatedItems);
  }

  return (
    <Box sx={{ mr: 3, mt: 2 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2 }}>
        {workItems.length &&
          workItems.map((item: any) => {
            return (
              <Grid key={item.id} item xs={12} sm={mobileOpen ? 3 : 4} md={mobileOpen ? 3 : 4} lg={mobileOpen ? 3 : 4}>
                <BuyCard item={item} onItemRemove={handleItemRemove} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};
export default BuyCardList;