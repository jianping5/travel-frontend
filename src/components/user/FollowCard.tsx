import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { follow } from '@/api/user/user-api';

import { getLoginUserId } from '@/utils/tool';

type AppCardProps = {
  props: UserInfoResp
  userId: number
}

const AppCard: React.FC<AppCardProps> = ({ props, userId }) => {
  const [isFollowed, setIsFollowed] = useState(props.isFollowed); // 初始化关注状态

  const loginUserId = getLoginUserId()

  // 关注
  const handleFollow = async () => {
    try {
      const req: FollowReq = {
        id: props.id,
        type: isFollowed // 切换关注状态
      }
      await follow(req);
      setIsFollowed(!isFollowed); // 更新状态为切换后的值
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div style={{ marginBottom: 10 }} >
      <Link href={`/user/home?id=${props.id}`} underline="none" sx={{ position: 'relative', display: 'inline-block' }}>
        <Card sx={{ display: 'flex', width: '800px', height: '107px', border: 'none', boxShadow: 'none', position: 'relative' }}>
          <CardMedia component="img" sx={{width: 100, height: 100, borderRadius: '50%' }}  image={props.avatar} alt="" />
          <div style={{ flex: '2'}}>
            <CardContent sx={{ flex: 1, padding: 1 }}>
              <Typography variant="h6" sx={{  color: '#000000', fontWeight: 'medium', fontSize: '1.2rem', lineHeight: '1.2', WebkitLineClamp: 2, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis', wordBreak: 'break-word' }}>
                {props.account}
              </Typography>

              <Typography variant="body2" sx={{ color: '#606060', marginTop: 1}}>
                {props.signature}
              </Typography>
            </CardContent>
          </div>
          <div style={{ display: 'flex', alignItems:'center', justifyContent: 'flex-end' }}>
            { loginUserId == userId &&
              <Button 
                variant={isFollowed ? 'outlined' : 'contained' }  
                onClick={ (e) => {e.preventDefault(); handleFollow()} } 
                sx={{ marginLeft: 'auto', width:'100px', height: '40px', borderRadius: '100px', color: isFollowed ? "black" : "",
                    border: isFollowed ? '1px solid black' : '1px solid black', backgroundColor: isFollowed ? '' : '#555555 !important'
                }}>
                {isFollowed ? "Followed" : "Follow"} 
              </Button>
            }
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default AppCard;
