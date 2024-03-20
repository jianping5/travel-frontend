'use client'
import React from 'react'
import ThemeContext from './ThemeContext'

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [search, setSearch] = React.useState('')
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const [homeTabSearch, setHomeTabSearch] = React.useState('All')

  const value = {
    search,
    setSearch,
    mobileOpen,
    setMobileOpen,
    homeTabSearch,
    setHomeTabSearch,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
