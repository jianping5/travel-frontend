'use client'
import { userTabItems } from '../../data/app.data';
import Box from '@mui/material/Box';
import React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';

type TabListProps = {
    onTabChange: (searchValue: string) => void;
}

const TabList: React.FC<TabListProps> = ( { onTabChange }) => {
  const { userHomeTabType } = useContext(ThemeContext);

  const handleChange = (event: any, newValue: string) => {
    onTabChange(newValue);
  };
  return (
    <Box>
      <Tabs
        value={userHomeTabType}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable tabs"
      >
        {userTabItems.map((item) => {
          return <Tab value={item.text} key={item.id} label={item.text} />;
        })}
      </Tabs>
    </Box>
  );
};

export default TabList;