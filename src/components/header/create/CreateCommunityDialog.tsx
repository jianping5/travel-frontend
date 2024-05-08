import React, { useState } from 'react';
import { FiPlay } from 'react-icons/fi';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { createCommunity } from '@/api/social/social-api';

interface CreateCommunityDialogProps {
  open: boolean;
  handleClose: () => void;
}

const CreateCommunityDialog: React.FC<CreateCommunityDialogProps> = ({ open, handleClose }) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  // 创建社区
  const handleCreateCommunity = async () => {
    try {
      const req: CommunityCreateReq = {
        name: name,
        description: description
      }
      await createCommunity(req)
    } catch (err) {
      console.log(err)
    }
  }

  // 恢复初始值
  const handleInit = () => {
    setName('')
    setDescription('')
  }

  const handleCreate = () => {
    // 执行创建操作，可以将输入的数据提交到后端处理
    handleCreateCommunity()
    handleInit();
    handleClose(); // 关闭弹窗
  };

  return (
    <Dialog open={open} onClose={handleClose} fullScreen maxWidth='md' sx={{ maxWidth: '100%', margin: 'auto'}} >
      <DialogTitle>Create Community</DialogTitle>
      <DialogContent sx={{ height: '100vh', pl: '300px', pr: '300px' }}>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions sx={{ border: '1px solid #ccc' }}>
        <Button onClick={() => {handleInit(); handleClose();}}>Cancel</Button>
        <Button onClick={() => {handleCreate()}}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateCommunityDialog;
