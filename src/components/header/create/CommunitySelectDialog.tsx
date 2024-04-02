'use client'
import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

interface CommunitySelectDialogProps {
  onSelect: (community: string) => void;
}

const CommunitySelectDialog: React.FC<CommunitySelectDialogProps> = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSelect = (community: string) => {
    onSelect(community);
  };

  // 模拟社区数据，实际应该从后端获取
  const communities = [
    'Community 1',
    'Community 2',
    'Community 3',
    'Community 4',
    'Community 5',
  ];

  // 模拟搜索功能
  const filteredCommunities = communities.filter((community) =>
    community.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <TextField
        autoFocus
        margin="dense"
        id="search"
        label="Search Community"
        type="text"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <DialogContent>
        {filteredCommunities.map((community, index) => (
          <Button
            key={index}
            fullWidth
            variant="outlined"
            onClick={() => handleSelect(community)}
          >
            {community}
          </Button>
        ))}
      </DialogContent>
    </>
  );
};

export default CommunitySelectDialog;
