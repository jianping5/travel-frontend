'use client'
import { Box } from '@mui/system';
import { BsFillMicFill } from 'react-icons/bs';
import { Button, InputAdornment, OutlinedInput, useScrollTrigger } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { flexAlignCenter } from '../../styles/styles';
import ThemeContext from '../../context/ThemeContext';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const { search, setSearch } = useContext(ThemeContext)
  const [ searchInputValue, setSearchInputValue ] = useState('')
  const history = useRouter()

  const handleSearch = () => {
    if (searchInputValue.trim() !== '') {
      setSearch(searchInputValue)
      history.push(`/search?q=${searchInputValue}`);
    }
  }
  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    setSearchInputValue(search)
  }, [search])

  return (
    <Box sx={flexAlignCenter}>
      <OutlinedInput
        onChange={(e) => setSearchInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search"
        value={searchInputValue}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              type="button"
              onClick={handleSearch}
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