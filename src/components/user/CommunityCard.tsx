import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { formatNumber, getLoginUserId } from '@/utils/tool';
import { joinCommunity, quitCommunity } from '@/api/social/social-api';

type AppCardProps = {
  props: CommunityView
  userId: number
}

const AppCard: React.FC<AppCardProps> = ({ props, userId }) => {
  const [isJoined, setIsJoined] = useState(props.isJoined)

  const loginUserId = getLoginUserId()

  // 加入/退出社区
  const handleJoinOrQuitCommunity = async (isJoined: boolean = false) => {
    try {
      if (isJoined == false) {
        const req: CommunityJoinReq = {
          communityId: props.id,
          role: 0
        }
        await joinCommunity(req)
        setIsJoined(true)
      } else {
        const req: CommunityQuitReq = {
          communityId: props.id,
        }
        await quitCommunity(req)
        setIsJoined(false)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const truncatedName = props.name.length > 100 ? `${props.name.substring(0, 100)}...` : props.name;
  const truncatedDesc = props.description.length > 77 ? `${props.description.substring(0, 77)}...` : props.description;

  return (
    <div style={{ marginBottom: 10 }}>
      <Link href={`/community/detail?id=${props.id}`} underline="none" sx={{ position: 'relative', display: 'inline-block' }}>
        <Card sx={{ display: 'flex', borderRadius: 0, width: '800px', height: '107px', boxShadow: 'none', border: 'none', position: 'relative' }}>
          <CardMedia component="img" sx={{width: 100, height: 100, borderRadius: '50%' }}  image={props.avatar} alt="" />
          <div style={{ flex: '2'}}>
            <CardContent sx={{ flex: 1, padding: 1}}>
              <Typography variant="h6" sx={{  color: '#000000', fontWeight: 'medium', fontSize: '1.2rem' }}>
                {truncatedName}
              </Typography>

              <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.8rem'}}>
                {formatNumber(props.memberCount)} members
              </Typography>

              <Typography variant="body2" sx={{ color: '#606060', marginTop: 1}}>
                {truncatedDesc}
              </Typography>
            </CardContent>
          </div>
          <div style={{ display: 'flex', alignItems:'center', justifyContent: 'flex-end' }}>
            {/* <Button variant='outlined' sx={{ width:'100px'}} onClick={(e) => {e.preventDefault(); console.log(123)}}>Join</Button> */}
            {loginUserId == userId && 
              <Button variant={isJoined ? 'outlined' : 'contained' }  onClick={(e) => { e.preventDefault(); handleJoinOrQuitCommunity(isJoined) }} 
                sx={{ marginLeft: 'auto', width:'100px', height: '40px', borderRadius: '100px', color: isJoined ? "black" : "",
                    border: isJoined ? '1px solid black' : '1px solid black', backgroundColor: isJoined ? '' : '#555555 !important'
                }}>
                {isJoined ? "Joined" : "Join"} 
              </Button>
            }
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default AppCard;




