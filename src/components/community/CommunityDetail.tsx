'use client'
import React, { useState } from 'react';
import { Avatar, Button, Typography } from '@mui/material';
import CommunityInfo from './CommunityInfo';
import CardList from './CardList';
import CreateDynamicDialog from '../header/create/CreateDynamicDialog';

const CommunityDetail: React.FC<any> = ({ items }) => {
  const [dynamicDialogOpen, setDynamicDialogOpen] = useState(false)

  // 控制动态弹框打开
  const handleDynamicOpen = () => {
    setDynamicDialogOpen(true)
  }

  const handleCloseDynamicDialog = () => {
    setDynamicDialogOpen(false)
  }

  return (
    <div>
      <img src="https://styles.redditmedia.com/t5_2zf9m/styles/bannerBackgroundImage_h8gepdvfwqb61.png" alt="Cover Image" 
      style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src="https://styles.redditmedia.com/t5_2zf9m/styles/communityIcon_hebckbd64w811.png" alt="Community Avatar" style={{ width: '65px', height: '65px', borderRadius: '50%', marginRight: '8px' }} />
          <Typography variant="h4">Community Name</Typography>
        </div>
        <div>
          <Button onClick={handleDynamicOpen} variant="outlined" color="primary" sx={{ width: '200px', height: '45px', borderRadius: '100px' }}>Create a Post</Button>
          <CreateDynamicDialog open={dynamicDialogOpen} handleClose={handleCloseDynamicDialog} />
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ flex: '2' }}>
          {/* 社区动态列表 */}
          <CardList items={items} contentType='Dynamics' />
        </div>
        <div style={{ flex: '1', position: 'sticky', top: '20px', maxHeight: '60px'}}>
          <CommunityInfo/>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetail;
