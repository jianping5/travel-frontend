'use client'
import { RiVideoUploadFill } from 'react-icons/ri';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect, useState } from 'react';
import { IoCreateOutline } from "react-icons/io5";
import Typography from '@mui/material/Typography';
import useToggle from '../../hooks/useToggle';
import UploadVideoDialog from './upload/UploadVideoDialog';
import { FiPlay } from 'react-icons/fi';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import CreateDynamicDialog from './create/CreateDynamicDialog';

const Upload = () => {
  const { el, open, handleClick, handleClose } = useToggle();
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dynamicDialogOpen, setDynamicDialogOpen] = useState(false)

  const handleOpen = () => {
    setDialogOpen(true)
  }

  // 控制动态弹框打开
  const handleDynamicOpen = () => {
    setDynamicDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
    handleClose()
  }

  const handleCloseDynamicDialog = () => {
    setDynamicDialogOpen(false)
    handleClose()
  }

  return (
    <Box sx={{ px: 1 }}>
      <Button id="basic-button" onClick={(e) => handleClick(e)}>
        <RiVideoUploadFill size={24} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={el}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box sx={{ minWidth: 200 }}>
          <ListItem disablePadding>
            <ListItemButton onClick={handleOpen}>
              <ListItemIcon><FiPlay size={24}/></ListItemIcon>
              <ListItemText primary='Upload Video' sx={{ ml: '-20px'}} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleDynamicOpen}>
              <ListItemIcon><IoCreateOutline size={24}/></ListItemIcon>
              <ListItemText primary='Create Dynamic' sx={{ ml: '-20px'}} />
            </ListItemButton>
          </ListItem>
        </Box>
      </Menu>
      
      <UploadVideoDialog open={dialogOpen} handleClose={handleCloseDialog} />
      <CreateDynamicDialog open={dynamicDialogOpen} handleClose={handleCloseDynamicDialog} />
    </Box>
  );
};

export default Upload;