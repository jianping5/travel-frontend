'use client'
import React from 'react'
import ThemeContext from './ThemeContext'

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [search, setSearch] = React.useState('')
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const [homeTabType, setHomeTabType] = React.useState('All')
  const [searchTabType, setSearchTabType] = React.useState('Videos')
  const [userHomeTabType, setUserHomeTabType] = React.useState('home')

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
    setUserHomeTabType
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
