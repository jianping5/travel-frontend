import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import WorkCard from './WorkCard';

function CreateWorkDialog() {
  const [work, setWork] = useState('');
  const [price, setPrice] = useState('');
  const [open, setOpen] = useState(false)
  const [validUrl, setValidUrl] = useState(false); // 用于存储 URL 是否有效的状态

  const handleCreate = () => {
    // 处理创建商品逻辑
    console.log('Selected Work:', work);
    console.log('Price:', price);

    // 关闭弹窗
    handleClose();
  };

  const handleCancel = () => {
    // 关闭弹窗
    setOpen(false);
    setPrice('')
    setWork('')
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    setPrice('')
  };

  const handleButtonClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    // 使用正则表达式检查 URL 是否有效
    const urlRegex = /^https:\/\/travel\/\d+$/;
    setValidUrl(urlRegex.test(work));
  }, [work]);

  return (
    <div>
      <Button
        variant="text"
        onClick={handleButtonClick}
        sx={{
          mt: 1,
          width: '100%',
          height: '40px',
          borderRadius: '10px',
          fontWeight: 'medium',
          fontSize: '1.1rem'
        }}
      >
        Create a work
      </Button>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>Create Work</DialogTitle>
        <DialogContent sx={{ width:'500px', height: '300px'}}>
          <TextField
            margin="normal"
            id="work"
            label="Work URL"
            fullWidth
            value={work}
            onChange={(e) => setWork(e.target.value)}
            placeholder='e.g. https://travel/123'
          />
          <TextField
            margin="normal"
            id="price"
            label="Price"
            type="number"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {/* 根据 URL 是否有效决定是否显示 WorkCard */}
          {validUrl && 
          <WorkCard 
            url='https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800'
            title='Ambient Study Music To Concentrate - Music for Studying, Concentration and Memory'
            channelTitle=''
            videoId={123}/>} 

        </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleCreate}>Create</Button>
      </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateWorkDialog;
