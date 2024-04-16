'use client'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { formatNumber } from '@/utils/tool';
import { listCommunity } from '@/api/social/social-api';

export default function AlignItemsList() {
  const [communityList, setCommunityList] = useState<CommunityView[]>([])

  // 获取用户加入社区列表
  const handleListCommunity = async () => {
    try {
      const req: CommunityListReq = {
        // -1 表示查询所有社区
        userId: -1
      }
      const response = await listCommunity(req)
      const data = response.data
      setCommunityList(data.list || [])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleListCommunity()
  }, [])

  return (
    <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      {communityList.map(community => 
        <Link key={community.id} href={`/community/detail?id=${community.id}`} >
          <ListItem alignItems="flex-start">
            <ListItemAvatar sx={{ marginRight:'3%' }}>
              <Avatar alt="Remy Sharp" src={community.avatar} sx={{ width: 56, height: 56 }}/>
            </ListItemAvatar>
            <ListItemText
              primary={ community.name }
              secondary={
                <>
                  { community.description.length > 40 ? `${community.description.substring(0, 40)}...` : community.description }
                  <br></br>
                  <span style={{ marginLeft: '-2px', fontSize: '0.8rem', color: '#888888' }}>{formatNumber(community.memberCount)} members</span> 
                </>
              }
            />
          </ListItem>
        </Link>
      )}

    </List>
  );
}