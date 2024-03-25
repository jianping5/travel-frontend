'use client'
import { createContext } from 'react';

const ThemeContext = createContext({
  search: '',
  setSearch: (val: string) => {},
  mobileOpen: true,
  setMobileOpen: (val: boolean) => {},
  homeTabType: '',
  setHomeTabType: (val: string) => {},
  searchTabType:'',
  setSearchTabType: (val: string) => {},
  userHomeTabType: '',
  setUserHomeTabType: (val: string) => {},
});
export default ThemeContext;