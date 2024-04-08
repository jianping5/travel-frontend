'use client'
import { createContext } from 'react';

const ThemeContext = createContext({
  search: '',
  setSearch: (val: string) => {},
  mobileOpen: true,
  setMobileOpen: (val: boolean) => {},
  homeTabType: 0,
  setHomeTabType: (val: number) => {},
  dynamicTabType: 0,
  setDynamicTabType: (val: number) => {},
  searchTabType:'',
  setSearchTabType: (val: string) => {},
  userHomeTabType: '',
  setUserHomeTabType: (val: string) => {},
  intelligenceTabType: '',
  setIntelligenceTabType: (val: string) => {},
  tradeTabType: '',
  setTradeTabType: (val: string) => {}
});
export default ThemeContext;