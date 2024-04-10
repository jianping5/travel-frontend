import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { formatNumber } from '@/utils/tool';
import { joinCommunity, quitCommunity } from '@/api/social/social-api';
import { Button } from '@mui/material';

type AppCardProps = {
  item: CommunityView
}

const AppCard: React.FC<AppCardProps> = ({ item }) => {

  const [isJoined, setIsJoined] = useState(item.isJoined)

  // 加入/退出社区
  const handleJoinOrQuitCommunity = async (isJoined: boolean = false) => {
    try {
      if (isJoined == false) {
        const req: CommunityJoinReq = {
          communityId: item.id,
          role: 0
        }
        await joinCommunity(req)
        setIsJoined(true)
      } else {
        const req: CommunityQuitReq = {
          communityId: item.id,
        }
        await quitCommunity(req)
        setIsJoined(false)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const truncatedTitle = item.name.length > 100 ? `${item.name.substring(0, 100)}...` : item.name;

  return (
      <Link href={`/community/detail?id=${item.id}`} underline="none" sx={{ position: 'relative', display: 'inline-block' }}>
        <Card sx={{ display: 'flex', borderRadius: 0, width: '800px', boxShadow: 'none', border: 'none', position: 'relative', zIndex: 2 }}>
          <CardMedia component="img" sx={{width: 100, height: 100, borderRadius: '50%' }}  image={item.avatar} alt="" />
          <div style={{ flex: '2'}}>
            <CardContent sx={{ flex: 1, padding: 1}}>
              <Typography variant="h6" sx={{  color: '#000000', fontWeight: 'medium', fontSize: '1.2rem', lineHeight: '1.2' }}>
                {truncatedTitle}
              </Typography>
            
              <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.8rem'}}>
                {formatNumber(item.memberCount)} members
              </Typography>

              <Typography variant="body2" sx={{ color: '#606060', marginTop: 0.5}}>
                {item.description}
              </Typography>
            </CardContent>
          </div>
          <div style={{ display: 'flex', alignItems:'center', justifyContent: 'flex-end' }}>
            <Button variant={isJoined ? 'outlined' : 'contained' }  onClick={(e) => { e.preventDefault(); handleJoinOrQuitCommunity(isJoined) }} 
              sx={{ marginLeft: 'auto', width:'100px', height: '40px', borderRadius: '100px', color: isJoined ? "black" : "",
                  border: isJoined ? '1px solid black' : '1px solid black', backgroundColor: isJoined ? '' : '#555555 !important'
              }}>
              {isJoined ? "Joined" : "Join"} 
            </Button>
          </div>
        </Card>
      </Link>
  );
};

export default AppCard;




