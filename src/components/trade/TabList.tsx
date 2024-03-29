'use client'
import { tradeTabItems } from '../../data/app.data';
import Box from '@mui/material/Box';
import React, { useContext } from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import ThemeContext from '@/context/ThemeContext';
import { Button } from '@mui/material';
import CreateDialog from './CreateDialog';

type TabListProps = {
    onTabChange: (searchValue: string) => void;
}

const TabList: React.FC<TabListProps> = ( { onTabChange }) => {
  const { tradeTabType } = useContext(ThemeContext);

  const handleChange = (event: any, newValue: string) => {
    onTabChange(newValue);
  };
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Tabs
        value={tradeTabType}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable tabs"
        sx={{ flexGrow: 1 }} // 标签栏占据剩余空间
      >
        {tradeTabItems.map((item) => (
          <Tab value={item.text} key={item.id} label={item.text} />
        ))}
      </Tabs>
      {/* 右侧按钮 */}
      <CreateDialog/>
    </Box>
  );
};

export default TabList;