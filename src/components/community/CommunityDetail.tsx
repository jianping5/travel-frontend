'use client'
import React, { useEffect, useState } from 'react';
import { Avatar, Button, Card, Divider, MenuItem, Select, Typography } from '@mui/material';
import CommunityInfo from './CommunityInfo';
import CardList from './CardList';
import CreateDynamicDialog from '../header/create/CreateDynamicDialog';
import { getCommunityDetail, listSpecificDynamic } from '@/api/social/social-api';
import CompactViewList from './CompactViewList';

const CommunityDetail: React.FC<any> = ({ id }) => {
  const [dynamicDialogOpen, setDynamicDialogOpen] = useState(false)
  const [communityDetail, setCommunityDetail] = useState<CommunityDetailResp>()
  const [sortBy, setSortBy] = useState(0); // 默认选择 'Newest'
  const [dynamicList, setDynamicList] = useState<CommunityDynamicView[]>([])
  const [view, setView] = useState(0)


  // 获取指定社区动态列表
  const handleListSpecificDynamic = async (sortType: number = 0) => {
    try {
      const req: CommunityDynamicSpecificListReq = {
        sortType: sortType,
        communityId: id,
        pageNum: 1,
        pageSize: 10,
      }
      const response = await listSpecificDynamic(req)
      const data = response.data
      setDynamicList(data.list || [])
    } catch (err) {
      console.log(err)
    }
  }

  // 获取社区详情
  const handleGetCommunityDetail = async () => {
    try {
      const req: CommunityDetailReq = {
        id: id
      }
      const response = await getCommunityDetail(req)
      const data = response.data
      setCommunityDetail(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleListSpecificDynamic()
    handleGetCommunityDetail()
  }, [id])

  // 控制动态弹框打开
  const handleDynamicOpen = () => {
    setDynamicDialogOpen(true)
  }

  const handleCloseDynamicDialog = () => {
    setDynamicDialogOpen(false)
  }

  // 处理下拉框选择
  const handleSortByChange = (event: any) => {
    setSortBy(event.target.value);
    handleListSpecificDynamic(event.target.value)
  };

  // 处理下拉框选择
  const handleViewChange = (event: any) => {
    setView(event.target.value);
  };

  return (
    <div>
      <img src="https://styles.redditmedia.com/t5_2zf9m/styles/bannerBackgroundImage_h8gepdvfwqb61.png" alt="Cover Image" 
      style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px' }} />
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={communityDetail?.community.avatar} alt="Community Avatar" style={{ width: '65px', height: '65px', borderRadius: '50%', marginRight: '8px' }} />
          <Typography variant="h4">{communityDetail?.community.name}</Typography>
        </div>
        <div>
          <Button onClick={handleDynamicOpen} variant="outlined" color="primary" sx={{ width: '200px', height: '45px', borderRadius: '100px' }}>Create a Post</Button>
          <CreateDynamicDialog open={dynamicDialogOpen} handleClose={handleCloseDynamicDialog} />
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ flex: '2' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
            {/* <Typography variant="h6" sx={{ marginRight: '8px' }}>Sort by:</Typography> */}
            <Select value={sortBy} onChange={handleSortByChange} 
              sx={{ width: '115px', height: '37px', border: 'none', mr: '10px' }}>
              <MenuItem value={0}>Newest</MenuItem>
              <MenuItem value={1}>Popular</MenuItem>
              <MenuItem value={2}>Oldest</MenuItem>
            </Select>
            <Select value={view} onChange={handleViewChange} 
              sx={{ width: '115px', height: '37px', border: 'none', mr: '10px' }}>
              <MenuItem value={0}>Compact</MenuItem>
              <MenuItem value={1}>Card</MenuItem>
            </Select>
          </div>
          <Divider sx={{ mb: '10px', mr: '10px' }} /> {/* 分割线 */}
          {/* 社区动态列表 */} 
          {view == 0 ? (
              <CompactViewList items={dynamicList} />
            ) : (
              <CardList items={dynamicList} />
            )}
        </div>
        <div style={{ flex: '1', position: 'sticky', top: '20px', maxHeight: '100vh'}}>
        {/* <div style={{ flex: '1' }}> */}
          {/* <div style={{ width: '400px', position: 'fixed', right: '20px', top: '327px', bottom: '0', maxHeight: '100vh', overflowY: 'auto' }}> */}
            <CommunityInfo id={id}/>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default CommunityDetail;
