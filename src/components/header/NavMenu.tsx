'use client'
// import { AiFillYoutube } from 'react-icons/ai';
import { FaCanadianMapleLeaf } from "react-icons/fa";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  appBar,
  toolbarWrapper,
  flexAlignCenter,
  logoText,
  hideOnMobile,
} from '../../styles/styles';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import Upload from './Upload'
import NotificationsList from './NotificationList';
import ThemeContext from '@/context/ThemeContext';

const NavMenu = () => {
  const { mobileOpen, setMobileOpen } = useContext(ThemeContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar component="nav" sx={appBar}>
      <Toolbar>
        <Box sx={toolbarWrapper}>
          <Box sx={flexAlignCenter}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <FaCanadianMapleLeaf size={27} />
            <Typography variant="h6" component="div" sx={logoText}>
              Travel
            </Typography>
          </Box>
          <Box sx={hideOnMobile}>
            <SearchBar />
          </Box>
          <Box sx={hideOnMobile}>
            <Upload />
            <NotificationsList />
            <UserProfile />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavMenu;