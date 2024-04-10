import { searchTabItems } from '../../data/app.data';
import Box from '@mui/material/Box';
import React, { useContext } from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import ThemeContext from '@/context/ThemeContext';

type TabListProps = {
    onTabChange: (searchValue: number) => void;
}

const TabList: React.FC<TabListProps> = ( { onTabChange }) => {
  const { searchTabType, setSearchTabType } = useContext(ThemeContext);

  const handleChange = (event: any, newValue: number) => {
    onTabChange(newValue);
  };
  return (
    <Box>
      <Tabs
        value={searchTabType}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable tabs"
      >
        {searchTabItems.map((item) => {
          return <Tab value={item.id} key={item.id} label={item.text} />;
        })}
      </Tabs>
    </Box>
  );
};

export default TabList;