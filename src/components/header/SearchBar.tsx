import { Box } from '@mui/system';
import { BsFillMicFill } from 'react-icons/bs';
import { Button, InputAdornment, OutlinedInput } from '@mui/material';
import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import { flexAlignCenter, searchBar } from '../../styles/styles';
import SearchContext from '../../context/SearchContext';

export default function SearchBar() {
  const ctx = useContext(SearchContext);
  const [search, setSearch] = React.useState('');

  return (
    <Box sx={flexAlignCenter}>
      <OutlinedInput
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              type="button"
              onClick={() => ctx.onSearch(search)}
              sx={{ backgroundColor: '#eee', borderRadius: 100 }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        sx={{ width: '600px', borderRadius: 20, height: 40 }} // 自定义样式：设置宽度和边框圆角
      />
      <Button sx={{ minWidth: 'auto' }}>
        <BsFillMicFill size={18} />
      </Button>
    </Box>
  );
}