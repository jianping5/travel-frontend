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
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth='md' sx={{ maxWidth: '50%', margin: 'auto'}} >
      <DialogTitle>Create Video</DialogTitle>
      <DialogContent sx={{ height: '70vh' }}>
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
        {/* <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files?.[0] || null)}
        /> */}
        <UploadFileButton onChange={(file) => setVideo(file)}/>
        {/* <TextField
          margin="dense"
          id="tags"
          label="Tags"
          type="text"
          fullWidth
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        /> */}
        <TagInput tags={tags} setTags={setTags}/>

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleCreate}>Create</Button>
      </DialogActions>
    </Dialog>

  );
};

export default UploadVideoDialog;
