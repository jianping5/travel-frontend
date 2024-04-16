'use client'
import TabList from "@/components/intelligence/TabList";
import ThemeContext from "@/context/ThemeContext";
import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useRouter } from 'next/navigation'
import React from "react";
import { useContext, useEffect, useState } from "react";

const OptionCard = () => {
  const [budget, setBudget] = React.useState('');
  const [tripGroup, setTripGroup] = React.useState('');
  const [tripMood, setTripMood] = React.useState('');

  const handleBudgetChange = (event: SelectChangeEvent) => {
    setBudget(event.target.value as string);
  };

  const handleTripGroupChange = (event: SelectChangeEvent) => {
    setTripGroup(event.target.value as string);
  };

  const handleTripMoodChange = (event: SelectChangeEvent) => {
    setTripMood(event.target.value as string);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <Card sx={{ borderRadius: '8px', p: 3, m: 3, width: 270, height: 137, border: '1px solid #ccc' }}>
        <Typography variant="body1" sx={{ mb: 1}}>Bugdet</Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Bugdet</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={budget}
            label="Bugdet"
            onChange={handleBudgetChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Card>
      <Card sx={{ borderRadius: '8px', p: 3, m: 3, width: 270, height: 137, border: '1px solid #ccc' }}>
        <Typography variant="body1" sx={{ mb: 1}}>Trip Group</Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Trip Group</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tripGroup}
            label="TripGroup"
            onChange={handleTripGroupChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Card>
      <Card sx={{ borderRadius: '8px', p: 3, m: 3, width: 270, height: 137, border: '1px solid #ccc' }}>
        <Typography variant="body1" sx={{ mb: 1}}>Trip Mood</Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Trip Mood</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tripMood}
            label="TripMood"
            onChange={handleTripMoodChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Card>
    </Box>
  )
}

export default OptionCard;