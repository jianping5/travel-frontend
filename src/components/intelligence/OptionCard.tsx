'use client'
import TabList from "@/components/intelligence/TabList";
import ThemeContext from "@/context/ThemeContext";
import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useRouter } from 'next/navigation'
import React from "react";
import { useContext, useEffect, useState } from "react";

const OptionCard = () => {
  const [age, setAge] = React.useState('');
  const [day, setDay] = React.useState('');
  const [budget, setBudget] = React.useState('');

  const handleAgeChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleDayChange = (event: SelectChangeEvent) => {
    setDay(event.target.value as string);
  };

  const handleBudgetChange = (event: SelectChangeEvent) => {
    setBudget(event.target.value as string);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', p: 2, m: 3, width: 250, height: 130 }}>
        <Typography variant="body1" sx={{ mb: 1}}>Age</Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleAgeChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', p: 2, m: 3, width: 250, height: 130 }}>
        <Typography variant="body1" sx={{ mb: 1}}>Day</Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Day</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={day}
            label="Day"
            onChange={handleDayChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', p: 2, m: 3, width: 250, height: 130 }}>
        <Typography variant="body1" sx={{ mb: 1}}>Budget</Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Budget</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={budget}
            label="Budget"
            onChange={handleBudgetChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}

export default OptionCard;