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
import UploadFileButton from './UploadFileButton';
import TagInput from './TagInput';


interface UploadVideoDialogProps {
  open: boolean;
  handleClose: () => void;
}

const UploadVideoDialog: React.FC<UploadVideoDialogProps> = ({ open, handleClose }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [video, setVideo] = useState<File | null>(null);

  const handleCreate = () => {
    // 执行创建操作，可以将输入的数据提交到后端处理
    console.log('创建标题:', title);
    console.log('创建简介:', description);
    console.log('创建标签:', tags);
    console.log('上传视频:', video);
    handleClose(); // 关闭弹窗
  };

  return (
    <Dialog open={open} onClose={handleClose} fullScreen maxWidth='md' sx={{ maxWidth: '100%', margin: 'auto'}} >
      <DialogTitle>Create Video</DialogTitle>
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
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* 视频上传组件 */}
        <UploadFileButton onChange={(file) => setVideo(file)}/>
        {/* 标签输入组件 */}
        <TagInput tags={tags} setTags={setTags}/>
      </DialogContent>
      <DialogActions sx={{ border: '1px solid #ccc' }}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleCreate}>Create</Button>
      </DialogActions>
    </Dialog>

  );
};

export default UploadVideoDialog;
