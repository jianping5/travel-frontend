'use client'
import OptionCard from "@/components/intelligence/OptionCard";
import TabList from "@/components/intelligence/TabList";
import ThemeContext from "@/context/ThemeContext";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useRouter } from 'next/navigation'
import React from "react";
import { useContext, useEffect, useState } from "react";

const Strategy = () => {
  const { setIntelligenceTabType }  = useContext(ThemeContext);
  const history = useRouter()

  useEffect(() => {
    setIntelligenceTabType('strategy')
  }, [])

  const [generatedContent, setGeneratedContent] = useState<string>("");

  const generateContent = () => {
    // 模拟数据生成代码，这里用简单的示例代替
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.";
    setGeneratedContent(content);
  };

  const onTabChange = (tabValue: string) => {
    history.push(`/intelligence/${tabValue}`)
    setIntelligenceTabType(tabValue);
  };

  return (
    <Box>
      <TabList onTabChange={onTabChange}/>
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>Where to Fly?</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
          <CardRow/>
          <OptionCard/>
        </Box>
        <Button variant="outlined" onClick={generateContent} sx={{ mb: 5, height: '45px', width:'250px' }}>Generate Strategy</Button>
        {generatedContent && (
          <div>
            <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', p: 2, ml: '250px', mr:'250px', overflowY: 'auto' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'left' }}>Your Strategy</Typography>
              <Typography variant="body1" sx={{ whiteSpace: 'pre-line', textAlign: 'left' }}>{generatedContent}</Typography>
            </Box>
          </div>

        )}
      </Box>
    </Box>
  )
}

const CardRow = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <Card/>
      <Card/>
    </Box>
  );
};

const Card = () => {
  return (
    <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', p: 2, m: 3 }}>
      <Typography variant="body1">Word</Typography>
      <TextField label="Input" variant="outlined" fullWidth sx={{ mt: 1 }} />
    </Box>
  );
};

export default Strategy;