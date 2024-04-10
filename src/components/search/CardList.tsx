import VideoCard from './VideoCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import CommunityCard from './CommunityCard';
import PeopleCard from './PeopleCard';
import CopyrightCard from './CopyrightCard';
import DynamicCard from './DynamicCard';
import { ItemType } from '@/api/enum';

interface CardListProps {
  item?: SearchResp,
  contentType: ItemType
}

const CardList: React.FC<CardListProps> = ({ item, contentType }) => {

  switch(contentType) {
    case ItemType.VIDEO:
      return (
        <Box sx={{marginRight: '35%'}}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4 }}>
            {item?.contentList?.length && 
              item?.contentList.map(item => {
                const key = item.id
                return (
                  <Grid key={key} item xs={12}>
                    <VideoCard item={item}/>
                  </Grid>
                )
              })
            }
          </Grid>
        </Box>
      );
    case ItemType.COMMUNITY:
      return (
        <Box sx={{marginRight: '35%'}}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4 }}>
            {item?.communityList?.length && 
              item?.communityList.map(item => {
                const key = item.id
                return (
                  <Grid key={key} item xs={12}>
                    <CommunityCard item={item}/>
                  </Grid>
                )
              })
            }
          </Grid>
        </Box>
      );
    case ItemType.COPYRIGHT:
      return (
        <Box sx={{marginRight: '35%'}}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4 }}>
            {item?.copyrightList?.length && 
              item?.copyrightList.map(item => {
                const key = item.id
                return (
                  <Grid key={key} item xs={12}>
                    <CopyrightCard item={item}/>
                  </Grid>
                )
              })
            }
          </Grid>
        </Box>
      );
    case ItemType.DYNAMIC:
      return (
        <Box sx={{marginRight: '35%'}}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4 }}>
            {item?.dynamicList?.length && 
              item?.dynamicList.map(item => {
                const key = item.id
                return (
                  <Grid key={key} item xs={12}>
                    <DynamicCard item={item}/>
                  </Grid>
                )
              })
            }
          </Grid>
        </Box>
      );
    case ItemType.USER:
      return (
        <Box sx={{marginRight: '35%'}}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4 }}>
            {item?.userList?.length && 
              item?.userList.map(item => {
                const key = item.id
                return (
                  <Grid key={key} item xs={12}>
                    <PeopleCard item={item}/>
                  </Grid>
                )
              })
            }
          </Grid>
        </Box>
      );   
  }
};
export default CardList;