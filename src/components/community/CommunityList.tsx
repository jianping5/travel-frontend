'use client'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';

export default function AlignItemsList() {
  const description = "I'll be in your neighborhood doing errands this"
  const truncatedDescription = description.length > 40 ? `${description.substring(0, 40)}...` : description;
  const url = 'https://yt3.googleusercontent.com/ytc/AIdro_nlR3ivirsiC0Vaae1hteLwhVfKKkgCtAfkf901=s176-c-k-c0x00ffffff-no-rj'

  return (
    <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      <Link href='/'>
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{ marginRight:'3%' }}>
            <Avatar alt="Remy Sharp" src={url} sx={{ width: 56, height: 56 }}/>
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <>
                {truncatedDescription}
                <br></br>
                <span style={{ marginLeft: '-2px', fontSize: '0.8rem', color: '#888888' }}>100k members</span> 
              </>
            }
          />
        </ListItem>
      </Link>
      <Link href='/'>
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{ marginRight:'3%' }}>
            <Avatar alt="Remy Sharp" src={url} sx={{ width: 56, height: 56 }}/>
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <>
                {truncatedDescription}
                <br></br>
                <span style={{ marginLeft: '-2px', fontSize: '0.8rem', color: '#888888' }}>100k members</span> 
              </>
            }
          />
        </ListItem>
      </Link>
      <Link href='/'>
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{ marginRight:'3%' }}>
            <Avatar alt="Remy Sharp" src={url} sx={{ width: 56, height: 56 }}/>
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <>
                {truncatedDescription}
                <br></br>
                <span style={{ marginLeft: '-2px', fontSize: '0.8rem', color: '#888888' }}>100k members</span> 
              </>
            }
          />
        </ListItem>
      </Link>
      <Link href='/'>
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{ marginRight:'3%' }}>
            <Avatar alt="Remy Sharp" src={url} sx={{ width: 56, height: 56 }}/>
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <>
                {truncatedDescription}
                <br></br>
                <span style={{ marginLeft: '-2px', fontSize: '0.8rem', color: '#888888' }}>100k members</span> 
              </>
            }
          />
        </ListItem>
      </Link>
      <Link href='/'>
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{ marginRight:'3%' }}>
            <Avatar alt="Remy Sharp" src={url} sx={{ width: 56, height: 56 }}/>
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <>
                {truncatedDescription}
                <br></br>
                <span style={{ marginLeft: '-2px', fontSize: '0.8rem', color: '#888888' }}>100k members</span> 
              </>
            }
          />
        </ListItem>
      </Link>
      <Link href='/'>
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{ marginRight:'3%' }}>
            <Avatar alt="Remy Sharp" src={url} sx={{ width: 56, height: 56 }}/>
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <>
                {truncatedDescription}
                <br></br>
                <span style={{ marginLeft: '-2px', fontSize: '0.8rem', color: '#888888' }}>100k members</span> 
              </>
            }
          />
        </ListItem>
      </Link>
      <Link href='/'>
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{ marginRight:'3%' }}>
            <Avatar alt="Remy Sharp" src={url} sx={{ width: 56, height: 56 }}/>
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <>
                {truncatedDescription}
                <br></br>
                <span style={{ marginLeft: '-2px', fontSize: '0.8rem', color: '#888888' }}>100k members</span> 
              </>
            }
          />
        </ListItem>
      </Link>
      
    </List>
  );
}