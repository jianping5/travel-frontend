import React, { Children, useContext, useEffect, useState } from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';
import TabList from './TabList';
import UserContent from './UserContent';
import { useRouter } from 'next/navigation'
import { follow } from '@/api/user/user-api';
import { getLoginUserId } from '@/utils/tool';

const UserDetail: React.FC<any> = ({ id, userHomeTabType, userInfo, children }) => {
  const [isFollowed, setIsFollowed] = useState<boolean>(userInfo?.isFollowed); // 初始化关注状态
  // const { setSearch, setUserHomeTabType } = useContext(ThemeContext);

  const history = useRouter()

  const loginUserId = getLoginUserId()

  // 关注
  const handleFollow = async () => {
    try {
      const req: FollowReq = {
        id: id,
        type: isFollowed// 切换关注状态
      }
      await follow(req);
      setIsFollowed(!isFollowed); // 更新状态为切换后的值
    } catch (err) {
      console.log(err)
    }
  }

  const onTabChange = (tabValue: string) => {
    history.push(`/user/${tabValue}?id=${id}`)
    // setUserHomeTabType(tabValue);
  };
  
  return (
    <div style={{ marginLeft: '5%', marginRight: '10%' }}>
      <img src="https://styles.redditmedia.com/t5_2zf9m/styles/bannerBackgroundImage_h8gepdvfwqb61.png" alt="Cover Image" 
      style={{ width: '100%', height: '190px', objectFit: 'cover', borderRadius: '12px' }} />

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
        <Avatar src={userInfo?.avatar} alt="Community Avatar" 
        sx={{ width: '120px', height: '120px', borderRadius: '50%', marginRight: '16px' }} />
        <div>
          <Typography variant="h5"  sx={{ fontWeight:'bold', mb: '7px' }}> {userInfo?.account} </Typography>
          <Typography variant="body1" sx={{ fontSize:'1rem', color:'gray', mb:'7px' }}> {userInfo?.signature} </Typography>
          { loginUserId != id &&
              <Button 
                variant={isFollowed ? 'outlined' : 'contained' }  
                onClick={ () => handleFollow() } 
                sx={{ marginLeft: 'auto', width:'120px', height: '35px', borderRadius: '50px', color: isFollowed ? "black" : "",
                    border: isFollowed ? '1px solid black' : '1px solid black', backgroundColor: isFollowed? '' : '#555555 !important'
                }}>
                {isFollowed ? "Followed" : "Follow"} 
              </Button>
            }
        </div>
      </div>

      {/* Tab 栏 */}
      <TabList onTabChange={onTabChange} userHomeTabType={userHomeTabType} />

      {/* 内容 */}
      {children}

    </div>
  );
};

export default UserDetail;
