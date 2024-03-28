'use client'
import OptionCard from "@/components/intelligence/OptionCard";
import TabList from "@/components/intelligence/TabList";
import ThemeContext from "@/context/ThemeContext";
import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
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
  <Box sx={{ textAlign: 'center' }}>
    <Card sx={{ ml: 0, border: 'none', boxShadow: 'none' }}>
      <Typography variant="h3" sx={{ mb: 2 }}>Where to Fly?</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
        <CardRow/>
        <OptionCard/>
      </Box>
    </Card>
    <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: 'none', boxShadow: 'none' }}>
      <Button variant="contained" onClick={generateContent} sx={{ mb: 2, height: '45px', width:'250px', backgroundColor: '#2196f3 !important', textTransform: 'none', fontWeight: 'medium', fontSize: '1.2rem'}}>Generate Strategy</Button>
      {generatedContent && (
        <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', p: 2, overflowY: 'auto', width: '1350px', textAlign: 'left' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Your Strategy</Typography>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>{generatedContent}</Typography>
        </Box>
      )}
    </Card>
  </Box>
</Box>




  )
}

const CardRow = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <CustomeCard/>
      <CustomeCard/>
    </Box>
  );
};

const CustomeCard = () => {
  return (
    <Card sx={{  borderRadius: '8px', p: 3, m: 3, bgcolor: '#fefefe', border: '1px solid #ccc' }}>
      <Typography variant="body1">Word</Typography>
      <TextField label="Input" variant="outlined" fullWidth sx={{ mt: 1 }} />
    </Card>
  );
};

export default Strategy;