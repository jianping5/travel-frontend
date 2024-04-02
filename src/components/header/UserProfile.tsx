import { FaUserCircle } from 'react-icons/fa';
import { userProfileItems } from '../../data/app.data';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import React from 'react';
import Typography from '@mui/material/Typography';
import { inlineText } from '../../styles/styles';
import useToggle from '../../hooks/useToggle';
import { GrChannel } from 'react-icons/gr';
import { SiReasonstudios } from 'react-icons/si';
import { logout } from '@/api/user/user-api';

type Props = {
  onLogout: () => void;
}

const UserProfile: React.FC<Props> = ({ onLogout }) => {
  const { el, open, handleClick, handleClose } = useToggle();

  const signOut = () => {
    logout()
    onLogout()
  }

  return (
    <Box sx={{ px: 1 }}>
      <Button id="basic-button" onClick={handleClick}>
        <FaUserCircle size={24} />
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
        <ListItem sx={{ pt: 0, pb: 1 }} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Channel avatar"
              src={`https://i.pravatar.cc/150?img=2`}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Oh my Javascript"
            secondary={
              <React.Fragment>
                <Typography sx={inlineText} component="span">
                  <Link href="#" underline="none">
                    Manage Your Google Account
                  </Link>
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Box sx={{ minWidth: 300, borderTop: '1px solid #ddd' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><GrChannel size={24}/></ListItemIcon>
              <ListItemText primary='Your space' sx={{ ml: '20px'}} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={signOut}>
              <ListItemIcon><SiReasonstudios size={24}/></ListItemIcon>
              <ListItemText primary='Sign out' sx={{ ml: '20px'}} />
            </ListItemButton>
          </ListItem>
        </Box>
      </Menu>
    </Box>
  );
};

export default UserProfile;