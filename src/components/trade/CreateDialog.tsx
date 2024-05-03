import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import WorkCard from './WorkCard';
import { getCopyrightDetail } from '@/api/social/social-api';
import { createWork } from '@/api/trade/trade-api';
import { approve, list } from '@/utils/contract';

function CreateWorkDialog() {
  const [workUrl, setWorkUrl] = useState('');
  const [price, setPrice] = useState('');
  const [open, setOpen] = useState(false)
  const [isValid, setIsValid] = useState(false); // 用于存储 URL 是否有效的状态
  const [copyrightDetail, setCopyrightDetail] = useState<CopyrightDetailResp>()

  // 创建商品
  const handleCreateWork = async () => {
    try {
      const req: WorkCreateReq = {
        copyrightId: copyrightDetail?.copyright.id || 0,
        price: price,
      }
      await createWork(req)
    } catch (err) {
      console.log(err)
    }
  }

  const handleCreate = async () => {
    // 处理创建商品逻辑
    await handleCreateWork()

    // 关闭弹窗
    handleClose();
  };

  const handleCancel = () => {
    // 关闭弹窗
    setOpen(false);
    setPrice('')
    setWorkUrl('')
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
    const urlRegex = /^http:\/\/travel\/copyright\/\d+$/;
    setIsValid(urlRegex.test(workUrl));
  }, [workUrl]);

  // 获取版权详情
  const handleGetCopyrightDetail = async (id: number) => {
    try {
      const req: CopyrightDetailReq = {
        id: id
      }
      const res = await getCopyrightDetail(req)
      const data = res.data
      setCopyrightDetail(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (isValid) {
      // 获取版权 id
      const parts = workUrl.split("/");
      const id = parts[parts.length - 1];
      handleGetCopyrightDetail(parseInt(id))
    }
  }, [isValid])

  return (
    <div style={{ marginRight: 20 }}>
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
        <DialogContent sx={{ width:'500px', height: '290px'}}>
          <TextField
            margin="normal"
            id="work"
            label="Work URL"
            fullWidth
            value={workUrl}
            onChange={(e) => setWorkUrl(e.target.value)}
            placeholder='e.g. http://travel/copyright/123'
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
          {/* 根据 URL 是否有效以及 copyrightDetail 是否已存在决定是否显示 WorkCard */}
          {isValid && copyrightDetail && 
          <WorkCard item={copyrightDetail} />} 

        </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={() => handleCreate()}>Create</Button>
      </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateWorkDialog;
