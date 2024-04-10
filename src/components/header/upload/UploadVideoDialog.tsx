import React, { useState } from 'react';
import { FiPlay } from 'react-icons/fi';
import {
  Box,
  Button,
  Card,
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
import UploadCoverButton from './UploadCoverButton';
import { ItemType } from '@/api/enum';
import { createContent } from '@/api/social/social-api';
import { uploadFile } from '@/api/data/data-api';


interface UploadVideoDialogProps {
  open: boolean;
  handleClose: () => void;
}

const UploadVideoDialog: React.FC<UploadVideoDialogProps> = ({ open, handleClose }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [video, setVideo] = useState<File | null>(null);
  const [cover, setCover] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState('')
  const [coverUrl, setCoverUrl] = useState('')

  // 恢复初始值
  const handleInit = () => {
    setTitle('')
    setDescription('')
    setTags([])
    setVideo(null)
    setCover(null)
  }

  // 上传文件
  const handleUploadFile = async (fileType: string, file: File) => {
    try {
      if (file != null) {
        const res = await uploadFile(fileType, file as File)
        const data = res.data
        if (fileType == 'video') {
          setVideoUrl(data.fileUrl)
        } else if (fileType == 'image') {
          setCoverUrl(data.fileUrl)
        }
        console.log(data.fileUrl)
      }
    } catch (err) {
      console.log(err)
    }
  }

  // 创建内容
  const handleCreateContent = async () => {
    try {
      const req: ContentCreateReq = {
        itemType: ItemType.VIDEO,
        title: title,
        coverUrl: coverUrl,
        content: videoUrl,
        description: description,
        tag: tags,
      }
      await createContent(req)
    } catch (err) {
      console.log(err)
    }
  }

  const handleCreate = () => {
    // 执行创建操作，可以将输入的数据提交到后端处理
    handleCreateContent()

    handleInit(); // 恢复初始值
    handleClose(); // 关闭弹窗
  };

  return (
    <Dialog open={open} onClose={handleClose} fullScreen maxWidth='md' sx={{ maxWidth: '100%', margin: 'auto'}} >
      <DialogTitle>Create Video</DialogTitle>
      <DialogContent sx={{ height: '100vh', pl: '300px', pr: '300px', pb: '70px' }}>
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
        <UploadFileButton onChange={(file) => {setVideo(file); handleUploadFile('video', file as File)}}/>
        {/* 封面上传组件 */}
        {video && <UploadCoverButton onChange={(file) => {setCover(file); handleUploadFile('image', file as File)}}/>}
        {/* 标签输入组件 */}
        <TagInput tags={tags} setTags={setTags}/>
      </DialogContent>
      <DialogActions sx={{ border: '1px solid #ccc' }}>
        <Button onClick={() => {handleInit(); handleClose()}}>Cancel</Button>
        <Button onClick={() => handleCreate()}>Create</Button>
      </DialogActions>
    </Dialog>

  );
};

export default UploadVideoDialog;
