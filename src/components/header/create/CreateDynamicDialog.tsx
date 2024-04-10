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
import { uploadFile } from '@/api/data/data-api';
import { createDynamic } from '@/api/social/social-api';
import { FileType } from '@/api/enum';


interface UploadVideoDialogProps {
  open: boolean;
  handleClose: () => void;
}

const CreateDynamicDialog: React.FC<UploadVideoDialogProps> = ({ open, handleClose }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [media, setMedia] = useState<File | null>(null);
  const [mediaUrl, setMediaUrl] = useState('')
  const [content, setContent] = useState<string>('')
  const [isMediaUpload, setIsMediaUpload] = useState(true); // 切换状态，默认为 true，即显示媒体上传组件


  // 上传文件
  const handleUploadFile = async (fileType: string, file: File) => {
    try {
      if (file != null) {
        const res = await uploadFile(fileType, file as File)
        const data = res.data
        setMediaUrl(data.fileUrl)
        console.log(data.fileUrl)
      }
    } catch (err) {
      console.log(err)
    }
  }

  // 创建社区动态
  const handelCreateDynamic = async () => {
    // 判断 fileType
    let fileType = 0
    if (isMediaUpload == false) {
      // 文本
      fileType = FileType.Text
    } else {
      if (media != null) {
        if (media.type.startsWith('image/')) {
          // 图片
          fileType = FileType.Picture
        } else {
          // 视频
          fileType = FileType.Video
        }
      }
    }
    try {
      const req: CommunityDynamicCreateReq = {
        // 顶部导航栏的创建的是个人动态
        communityId: 0,
        title: title,
        description: description,
        content: fileType == FileType.Text ? content : mediaUrl,
        fileType: fileType,
      }
      await createDynamic(req)
    } catch (err) {
      console.log(err)
    }
  }

  const handleToggle = () => {
    setIsMediaUpload(!isMediaUpload); // 切换状态
  };

  // 恢复初始值
  const handleInit = () => {
    setTitle('')
    setDescription('')
    setMedia(null)
    setContent("")
  }

  const handleCreate = () => {
    // 执行创建操作，可以将输入的数据提交到后端处理
    handelCreateDynamic()
    handleInit();
    handleClose(); // 关闭弹窗
  };

  return (
    <Dialog open={open} onClose={handleClose} fullScreen maxWidth='md' sx={{ maxWidth: '100%', margin: 'auto'}} >
      <DialogTitle>Create Dynamic</DialogTitle>
      <DialogContent sx={{ height: '100vh', pl: '300px', pr: '300px' }}>
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
          <UploadMediaButton onChange={(file, fileType) => {setMedia(file); handleUploadFile(fileType, file as File)}}/>
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
        <Button onClick={() => {handleInit(); handleClose();}}>Cancel</Button>
        <Button onClick={() => {handleCreate()}}>Create</Button>
      </DialogActions>
      <Button onClick={handleToggle} sx={{ position: 'absolute', top: 15, right: 15 }}>{isMediaUpload ? 'Switch to Text' : 'Switch to Media'}</Button>
    </Dialog>
  );
};

export default CreateDynamicDialog;
