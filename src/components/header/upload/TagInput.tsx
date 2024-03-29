'use client'
import React, { useState } from 'react';
import { TextField, Chip, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface TagInputProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagInput: React.FC<TagInputProps> = ({ tags, setTags }) => {
  const [tagInput, setTagInput] = useState<string>('');

  const handleTagInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue.endsWith('#')) {
      // 用户输入了 '#'，创建新标签
      const newTag = inputValue.slice(0, -1).trim(); // 移除 '#' 并去除空格
      if (newTag) {
        setTags([...tags, newTag]); // 添加标签到列表
      }
      setTagInput(''); // 清空输入框
    } else {
      setTagInput(inputValue); // 更新输入框值
    }
  };

  const handleDeleteTag = (tag: string) => {
    const updatedTags = tags.filter(t => t !== tag);
    setTags(updatedTags);
  };

  return (
    <div>
      <TextField
        margin="dense"
        id="tags"
        label="Tags"
        type="text"
        fullWidth
        value={tagInput}
        onChange={handleTagInput}
        placeholder="Enter tags separated by '#'"
      />
      <div>
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            variant="outlined"
            onDelete={() => handleDeleteTag(tag)}
            deleteIcon={<IconButton size="small"><Delete /></IconButton>}
            style={{ marginTop: '5px', marginRight: '5px', backgroundColor: tag.startsWith('#') ? 'lightblue' : 'inherit' }}
          />
        ))}
      </div>
    </div>
  );
};

export default TagInput;
