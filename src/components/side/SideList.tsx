'use client'
import { sideListItems } from '../../data/app.data';
import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { sideListWrapper } from '../../styles/styles';
import Link from 'next/link';

const SideList = () => {
  return (
    <Box sx={{ ...sideListWrapper, overflow: 'hidden' }}>
      {(true ? sideListItems: []).map((item) => {
         
        return (
          <React.Fragment key={item.id}>
            {
            // item.subdivision ? (
            //   <>
            //     <Divider />
            //     <Box sx={{ ml: 2, mt: 2 }}>
            //       <Typography
            //         sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
            //         variant="button"
            //         display="block"
            //         gutterBottom
            //       >
            //         {item.text}
            //       </Typography>
            //     </Box>
            //   </>
            // ) : 
            item.divider ? (
              <Divider sx={{ width: '210px'}}/>
            ) : (
              <nav aria-label="Side list items">
                <List sx={{ p: 0 }}>
                  <ListItem disablePadding>
                    <Link href={item.path ? item.path: '/'} passHref>
                      <ListItemButton sx={{ width: '210px', display: 'flex' }}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                </List>
              </nav>
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default SideList;