'use client'
import { intelligenceTabItems } from '../../data/app.data';
import Box from '@mui/material/Box';
import React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';

type TabListProps = {
    onTabChange: (searchValue: string) => void;
    intelligenceTabType: string;
}

const TabList: React.FC<TabListProps> = ( { onTabChange, intelligenceTabType }) => {
  // const { intelligenceTabType } = useContext(ThemeContext);

  const handleChange = (event: any, newValue: string) => {
    onTabChange(newValue);
  };
  return (
    <Box>
      <Tabs
        value={intelligenceTabType}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable tabs"
      >
        {intelligenceTabItems.map((item) => {
          return <Tab value={item.text} key={item.id} label={item.text} />;
        })}
      </Tabs>
    </Box>
  );
};

export default TabList;