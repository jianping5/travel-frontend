'use client'
import { tradeTabItems } from '../../data/app.data';
import Box from '@mui/material/Box';
import React, { useContext } from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import ThemeContext from '@/context/ThemeContext';

type TabListProps = {
    onTabChange: (searchValue: string) => void;
}

const TabList: React.FC<TabListProps> = ( { onTabChange }) => {
  const { tradeTabType } = useContext(ThemeContext);

  const handleChange = (event: any, newValue: string) => {
    onTabChange(newValue);
  };
  return (
    <Box>
      <Tabs
        value={tradeTabType}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable tabs"
      >
        {tradeTabItems.map((item) => {
          return <Tab value={item.text} key={item.id} label={item.text} />;
        })}
      </Tabs>
    </Box>
  );
};

export default TabList;