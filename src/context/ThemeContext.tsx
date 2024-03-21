'use client'
import { createContext } from 'react';

const SearchContext = createContext({
  search: '',
  setSearch: (val: string) => {},
  mobileOpen: true,
  setMobileOpen: (val: boolean) => {},
  homeTabType: '',
  setHomeTabType: (val : string) => {},
  searchTabType:'',
  setSearchTabType: (val : string) => {},
});
export default SearchContext;