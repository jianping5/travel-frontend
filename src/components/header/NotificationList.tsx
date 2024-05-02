import { BsBellFill } from 'react-icons/bs';
import { notificationData } from '../../data/app.data';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import useToggle from '../../hooks/useToggle';
import { notificationWrapper, inlineText } from '../../styles/styles';
import { getMessageList } from '@/api/social/social-api';
import { timeAgo } from '@/utils/tool';
import { CardMedia } from '@mui/material';

const NotificationsList = () => {
  const [messageResp, setMessageResp] = useState<MessageListResp>()
  const { el, open, handleClick, handleClose } = useToggle();

  // 获取消息列表
  const handleGetMessageList = async () => {
    try {
      const res = await getMessageList()
      const data = res.data
      setMessageResp(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleMessageClick = (e: any) => {
    handleClick(e)
     handleGetMessageList()
  }


  return (
    <Box sx={{ px: 1 }}>
      <Button id="basic-button" onClick={(e) => handleMessageClick(e)}>
        <BsBellFill size={24} />
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
        <List sx={notificationWrapper}>
          {messageResp?.list?.map((message) => {
            return (
              <Link href={`/video?id=${message.itemId}`} key={message.id} underline="none">
                <Box sx={{ display: 'flex', ml: 1, mb: 2 }}>
                  <ListItemAvatar sx={{ mr: 1 }}>
                    <CardMedia component="img" sx={{width: '100px', height: '70px', objectFit: 'cover', borderRadius: '5px'}}  image={message.coverUrl} alt='' />
                  </ListItemAvatar>
                  <ListItemText
                    primary={message.title}
                    secondary={
                      <React.Fragment>
                        <Box component="span">
                          <Typography sx={inlineText} component="span">
                          {message.account} • {timeAgo(new Date(message.createTime).getTime())}
                          </Typography>
                        </Box>
                      </React.Fragment>
                    }
                  />
                </Box>
              </Link>
            );
          })}
        </List>
      </Menu>
    </Box>
  );
};

export default NotificationsList;