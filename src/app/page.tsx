'use client'
import { Box } from '@mui/material';
import { appWrapper } from '../styles/styles';
import NavMenu from '../components/header/NavMenu';

import React from 'react';
import SearchContext from '../context/SearchContext';
import Home from '../components/home/Home';

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const [search, setSearch] = React.useState('javascript');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onSearch = (val: string) => {
    setSearch(val);
  };

  return (
    <Box sx={appWrapper}>
      <SearchContext.Provider
        value={{
          searchText: search,
          onSearch: onSearch,
        }}
      >
        <NavMenu handleDrawerToggle={handleDrawerToggle} />
        <Home isOpen={mobileOpen}/>
      </SearchContext.Provider>
    </Box>
  );
}

export default App;