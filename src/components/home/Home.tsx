import Box from '@mui/material/Box';
import React, { useState, useEffect, useContext } from 'react';
import SideList from '../side/SideList';
import { appContentWrapper, flexColumnGrow } from '../../styles/styles';
import TabList from './TabList';
import CardList from './CardList';
import { getYoutubeAPIData } from '../../api/axios';
import SearchContext from '../../context/SearchContext';

type HomeProps = {
  isOpen: Boolean
}

const Home: React.FC<HomeProps> = ({ isOpen }) => {
  const [hide, setHide] = useState(false);
  const [youtubeData, setYoutubeData] = useState([]);
  const { searchText, onSearch } = useContext(SearchContext);

  useEffect(() => {
    getYoutubeAPIData(searchText).then((response) => {
      setYoutubeData(response.data.items);
    });
  }, [searchText]);

  // if (!youtubeData.length) {
  //   return;
  // }

  const items1 = youtubeData.slice(0, 15);

  const hideShorts = () => {
    setHide(true);
  };

  const undoHide = () => {
    setHide(false);
  };

  const onTabChange = (searchValue: string) => {
    onSearch(searchValue);
  };

  const sideBarWidth = isOpen ? '70px' : '250px';
  return (
    <Box component="main" sx={appContentWrapper}>
      <Box
        component="div"
        sx={{
          flexBasis: sideBarWidth,
          flexGrow: 0,
          flexShrink: 0,
          overflowY: 'auto',
        }}
      >
        <SideList />
      </Box>
      <Box component="div" sx={flexColumnGrow}>
        <Box
          sx={{
            my: 2,
            width: `calc(100vw - ${sideBarWidth})`,
          }}
        >
          <TabList onTabChange={onTabChange} />
        </Box>
        <Box
          component="div"
          sx={{
            flexGrow: 1,
            p: 1,
            overflowY: 'auto',
            overflowX: 'hidden',
            width: `calc(100vw - ${sideBarWidth})`,
          }}
        >
          <CardList items={items1} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;