import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { getLoginUserId } from '@/utils/tool';
import { follow } from '@/api/user/user-api';
import { Button } from '@mui/material';

type AppCardProps = {
  item: UserInfoView
}

const AppCard: React.FC<AppCardProps> = ({ item }) => {

  const [isFollowed, setIsFollowed] = useState(item.isFollowed); // 初始化关注状态

  // 关注
  const handleFollow = async () => {
    try {
      const req: FollowReq = {
        id: item.id,
        type: isFollowed // 切换关注状态
      }
      await follow(req);
      setIsFollowed(!isFollowed); // 更新状态为切换后的值
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Link href={`/user/home?id=${item.id}`} underline="none" sx={{ position: 'relative', display: 'inline-block' }}>
        <Card sx={{ display: 'flex', mb: '20px', width: '800px', border: 'none', boxShadow: 'none', position: 'relative' }}>
          <CardMedia component="img" sx={{width: 100, height: 100, borderRadius: '50%' }}  image={item.avatar} alt="" />
          <div style={{ flex: '2'}}>
            <CardContent sx={{ flex: 1, padding: 2 }}>
              <Typography variant="h6" sx={{  color: '#000000', fontWeight: 'medium', fontSize: '1.2rem', lineHeight: '1.2', WebkitLineClamp: 2, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis', wordBreak: 'break-word' }}>
                {item.account}
              </Typography>

              <Typography variant="body2" sx={{ color: '#606060', marginTop: 1}}>
                {item.signature}
              </Typography>
            </CardContent>
          </div>
          <div style={{ display: 'flex', alignItems:'center', justifyContent: 'flex-end' }}>
            <Button 
              variant={isFollowed ? 'outlined' : 'contained' }  
              onClick={ (e) => {e.preventDefault(); handleFollow()} } 
              sx={{ marginLeft: 'auto', width:'100px', height: '40px', borderRadius: '100px', color: isFollowed ? "black" : "",
                  border: isFollowed ? '1px solid black' : '1px solid black', backgroundColor: isFollowed ? '' : '#555555 !important'
              }}>
              {isFollowed ? "Followed" : "Follow"} 
            </Button>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default AppCard;




