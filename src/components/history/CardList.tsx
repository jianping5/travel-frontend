import VideoCard from './VideoCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';

type CardListProps = {
  items?: HistoryView[],
  contentType: string
}

const CardList: React.FC<CardListProps> = ({ items, contentType }) => {
  const [historyItems, setHistoryItems] = useState<HistoryView[]>(items || [])

  const onHistoryDelete = (id: number) => {
    const updatedHistoryItems = historyItems?.filter(item => item.id !== id)
    setHistoryItems(updatedHistoryItems)
  }

  useEffect(() => {
    if (items == null) {
      setHistoryItems([])
    }
  }, [items])

  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4 }}>
        {historyItems?.length &&
          historyItems.map((item: any) => {
            const key = item.id
            switch(contentType) {
              case 'Videos':
                return (
                  <Grid key={key} item xs={12}>
                    <VideoCard item={item} onHistoryDelete={onHistoryDelete}/>
                  </Grid>
                );
            }
          })}
      </Grid>
    </Box>
  );
};
export default CardList;