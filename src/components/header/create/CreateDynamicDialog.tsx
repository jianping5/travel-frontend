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
import UploadMediaButton from './UploadMediaButton';


interface UploadVideoDialogProps {
  open: boolean;
  handleClose: () => void;
}

const CreateDynamicDialog: React.FC<UploadVideoDialogProps> = ({ open, handleClose }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [video, setVideo] = useState<File | null>(null);
  const [content, setContent] = useState<string>('')
  const [isMediaUpload, setIsMediaUpload] = useState(true); // 切换状态，默认为 true，即显示媒体上传组件

  const handleToggle = () => {
    setIsMediaUpload(!isMediaUpload); // 切换状态
  };

  const handleCreate = () => {
    // 执行创建操作，可以将输入的数据提交到后端处理
    console.log('创建标题:', title);
    console.log('创建简介:', description);
    console.log('上传视频:', video);
    handleClose(); // 关闭弹窗
  };

  return (
    <Dialog open={open} onClose={handleClose} fullScreen maxWidth='md' sx={{ maxWidth: '100%', margin: 'auto'}} >
      <DialogTitle>Create Dynamic</DialogTitle>
      <DialogContent sx={{ height: '100vh', pl: '500px', pr: '500px' }}>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
        {isMediaUpload ? (
          <UploadMediaButton onChange={(file) => setVideo(file)}/>
        ) : (
          <TextField
            margin="dense"
            id="content"
            label="Content"
            rows={17}
            multiline
            type="text"
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        )}
      </DialogContent>
      <DialogActions sx={{ border: '1px solid #ccc' }}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleCreate}>Create</Button>
      </DialogActions>
      <Button onClick={handleToggle} sx={{ position: 'absolute', top: 15, right: 15 }}>{isMediaUpload ? 'Switch to Text' : 'Switch to Media'}</Button>
    </Dialog>
  );
};

export default CreateDynamicDialog;
