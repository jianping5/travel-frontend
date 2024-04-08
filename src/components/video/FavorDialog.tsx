'use client'
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormGroup, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { cancelFavor, createFavorite, favor, getFavoriteList } from '@/api/social/social-api';

interface FavorDialogProps {
  open: boolean;
  itemId: number;
  onClose: () => void;
}

const FavorDialog: React.FC<FavorDialogProps> = ({ open, itemId, onClose }) => {
  const [selectedFolders, setSelectedFolders] = useState<number[]>([]);
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [items, setItems] = useState<FavoriteListView[]>([])

  // 收藏
  const handleFavor = async (favoriteId: number = 0) => {
    try {
      const req: FavorReq = {
        favoriteId: favoriteId,
        itemId: itemId
      }
      await favor(req)
    } catch (err) {
      console.log(err)
    }
  }

  // 取消收藏
  const handleCancelFavor = async (favoriteId: number = 0) => {
    try {
      const req: FavorCancelReq = {
        favoriteId: favoriteId,
        itemId: itemId
      }
      await cancelFavor(req)
    } catch (err) {
      console.log(err)
    }
  }

  // 创建收藏夹
  const handleCreateFavorite = async () => {
    try {
      const req: FavoriteCreateReq = {
        name: newFolderName
      }
      await createFavorite(req)
    } catch (err) {
      console.log(err)
    }
    // 重置输入框和状态
    setNewFolderName('');
    setShowCreateFolder(false);
    // 获取最新收藏夹列表
    await handleGetFavoriteList()
  }


  const handleCheckboxChange = (event: any, folderId: number = 0) => {
    if (event.target.checked) {
      // 添加到选中的收藏夹列表中
      setSelectedFolders((prevSelected) => [...prevSelected, folderId]);
      // 调用收藏接口
      handleFavor(folderId)
    } else {
      // 从选中的收藏夹列表中移除
      setSelectedFolders((prevSelected) =>
        prevSelected.filter((folder) => folder !== folderId)
      );
      // 调用取消收藏接口
      handleCancelFavor(folderId)
    }
  };

  // 获取收藏夹列表
  const handleGetFavoriteList = async (userId: number = 0) => {
    try {
      const req: FavoriteListReq = {
        userId: userId,
        itemId: itemId
      }
      const response = await getFavoriteList(req)
      const data = response.data
      // 设置已收藏 ids
      const favoredIds = data.list.filter(item => item.isFavored).map(item => item.id);
      setSelectedFolders(favoredIds)
      // 设置收藏夹
      setItems(data.list || [])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    // 打开
    if (open) {
      handleGetFavoriteList()
    }
  }, [open])

  return (
    <Dialog open={open} onClose={() => {onClose();setNewFolderName('');setShowCreateFolder(false);}}>
      <DialogTitle>Favorite</DialogTitle>
      <DialogContent>
        <FormControl component="fieldset" fullWidth style={{ maxHeight: 270, overflowY: 'auto', width: '270px'}}>
          <FormGroup>
            {items.map((item) => (
              <FormControlLabel
                key={item.id}
                control={
                  <Checkbox
                    checked={selectedFolders.includes(item.id)}
                    onChange={(e) => handleCheckboxChange(e, item.id)}
                    name={item.name}
                  />
                }
                label={item.name}
              />
            ))}
          </FormGroup>
        </FormControl>
        {showCreateFolder && (
          <div>
            <TextField
              autoFocus
              margin="dense"
              label="New Folder Name"
              type="text"
              fullWidth
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
            />
            <Button onClick={() => handleCreateFavorite()}>Create</Button>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShowCreateFolder(!showCreateFolder)} sx={{ textTransform: 'none'}}>
          {showCreateFolder ? 'Cancel Create' : 'Create New Folder'}
        </Button>
      </DialogActions>
      <IconButton aria-label="close" onClick={() => {onClose();setNewFolderName('');setShowCreateFolder(false);}} sx={{ position: 'absolute', top: 5, right: 5 }}>
        <CloseIcon />
      </IconButton>
    </Dialog>
  );
};

export default FavorDialog;
