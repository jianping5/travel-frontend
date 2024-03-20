'use client'
import { createContext } from 'react';

const SearchContext = createContext({
  search: '',
  setSearch: (val: string) => {},
  mobileOpen: true,
  setMobileOpen: (val: boolean) => {},
  homeTabSearch: '',
  setHomeTabSearch: (val : string) => {},
});
export default SearchContext;