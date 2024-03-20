import { searchTabItems } from '../../data/app.data';
import Box from '@mui/material/Box';
import React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

type TabListProps = {
    onTabChange: (searchValue: string) => void;
}

const TabList: React.FC<TabListProps> = ( { onTabChange }) => {
  const [value, setValue] = React.useState('All');

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
    onTabChange(newValue);
  };
  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable tabs"
      >
        {searchTabItems.map((item) => {
          return <Tab value={item.text} key={item.id} label={item.text} />;
        })}
      </Tabs>
    </Box>
  );
};

export default TabList;