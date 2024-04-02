'use client'
// import { AiFillYoutube } from 'react-icons/ai';
import { FaCanadianMapleLeaf, FaUserCircle } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useEffect, useState } from 'react';
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
import Link from "next/link";
import { Button } from "@mui/material";
import AuthDialog from "./AuthDialog";

const NavMenu = () => {
  const { mobileOpen, setMobileOpen } = useContext(ThemeContext);
  const [ loginStatus, setLoginStatus ] = useState("false")
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setLoginStatus(localStorage.getItem("loginStatus") || "false")
  }, [loginStatus])

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
            <Link href='/' style={{ display:'flex'}}>
              <FaCanadianMapleLeaf size={27} style={{marginTop: '3px'}} />
              <Typography variant="h6" component="div" sx={logoText}>
                Travel
              </Typography>
            </Link>
          </Box>
          <Box sx={hideOnMobile}>
            <SearchBar />
          </Box>
          <Box sx={hideOnMobile}>
            {loginStatus == "true" ? 
              <>
                <Upload />
                <NotificationsList />
                <UserProfile onLogout={() => setLoginStatus("false")} />
              </> : 
              <>
                <Button onClick={handleToggle} sx={{ border: '1px solid #ddd', borderRadius: '20px', textTransform: 'none', fontWeight: 'bold', fontSize: '1rem', pl: '10px', pr: '10px'}}>
                  <RxAvatar size={27} style={{ marginRight: '5px'}} /> Sign in
                </Button>
                <AuthDialog open={open} onClose={() => setOpen(false)} onLogin={() => setLoginStatus("true")}/>
              </>
            }
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavMenu;