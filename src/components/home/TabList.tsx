import { tabItems } from '../../data/app.data';
import Box from '@mui/material/Box';
import React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

type TabListProps = {
    onTabChange: (searchValue: number) => void;
}

const TabList: React.FC<TabListProps> = ( { onTabChange }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
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
        {tabItems.map((item) => {
          return <Tab value={item.id} key={item.id} label={item.text} />;
        })}
      </Tabs>
    </Box>
  );
};

export default TabList;