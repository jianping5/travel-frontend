'use client'
import React, { useEffect } from 'react'
import ThemeContext from './ThemeContext'

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [search, setSearch] = React.useState('')
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const [homeTabType, setHomeTabType] = React.useState(0)
  const [searchTabType, setSearchTabType] = React.useState('Videos')
  const [userHomeTabType, setUserHomeTabType] = React.useState('home')
  const [intelligenceTabType, setIntelligenceTabType] = React.useState('chat')
  const [tradeTabType, setTradeTabType] = React.useState('home')
  const [dynamicTabType, setDynamicTabType] = React.useState(0)

  const value = {
    search,
    setSearch,
    mobileOpen,
    setMobileOpen,
    homeTabType,
    setHomeTabType,
    searchTabType,
    setSearchTabType,
    userHomeTabType,
    setUserHomeTabType,
    intelligenceTabType,
    setIntelligenceTabType,
    tradeTabType,
    setTradeTabType,
    dynamicTabType,
    setDynamicTabType
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
