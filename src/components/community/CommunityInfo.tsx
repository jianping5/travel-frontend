'use client'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import VideoCard from '../video/VideoCard';
import { Avatar, Button, Card, CardContent, Divider, Typography } from '@mui/material';
import { getCommunityDetail, joinCommunity, quitCommunity } from '@/api/social/social-api';
import { formatNumber } from '@/utils/tool';


const CommunityInfo: React.FC<any> = ({ id }) => {
  const [communityDetail, setCommunityDetail] = useState<CommunityDetailResp>()

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

  // 加入/退出社区
  const handleJoinOrQuitCommunity = async (isJoined: boolean = false) => {
    try {
      if (isJoined == false) {
        const req: CommunityJoinReq = {
          communityId: id,
          role: 0
        }
        await joinCommunity(req)
      } else {
        const req: CommunityQuitReq = {
          communityId: id,
        }
        await quitCommunity(req)
      }
      await handleGetCommunityDetail()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetCommunityDetail()
  }, [id])

  return (
    <Card sx={{ borderRadius: '10px', bgcolor: '#fefefe'}}>
      <CardContent sx={{ display: 'flex'}}>
        <Typography sx={{ marginLeft: '10px', fontSize: '1.7rem', fontWeight: 'medium' }}>{communityDetail?.community.name}</Typography>
        <Button variant={communityDetail?.community.isJoined ? 'outlined' : 'contained' }  onClick={() => handleJoinOrQuitCommunity(communityDetail?.community.isJoined)} 
          sx={{ marginLeft: 'auto', width:'100px', height: '40px', borderRadius: '100px', color: communityDetail?.community.isJoined ? "black" : "",
              border: communityDetail?.community.isJoined ? '1px solid black' : '1px solid black', backgroundColor: communityDetail?.community.isJoined ? '' : '#555555 !important'
          }}>
          {communityDetail?.community.isJoined ? "Joined" : "Join"} 
        </Button>
      </CardContent>
      <Divider/>
      <CardContent>
        <Typography sx={{ fontSize: '0.9 rem'}}>
          {communityDetail?.community.description}
        </Typography>
      </CardContent>
      <Divider/>
      <CardContent>
        <Typography sx={{ fontSize: '0.9 rem', textAlign: 'center' }}>
          {formatNumber(communityDetail?.community.memberCount)} members
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CommunityInfo;