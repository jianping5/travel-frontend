'use client'
import { createStrategy } from "@/api/intelligence/intelligence-api";
import OptionCard from "@/components/intelligence/OptionCard";
import TabList from "@/components/intelligence/TabList";
import ThemeContext from "@/context/ThemeContext";
import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useRouter } from 'next/navigation'
import React, { useRef } from "react";
import { useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Strategy = () => {
  // const { setIntelligenceTabType }  = useContext(ThemeContext);
  const [budget, setBudget] = useState('');
  const [tripGroup, setTripGroup] = useState('');
  const [tripType, setTripType] = useState('');
  const [destination, setDestination] = useState('')
  const [duration, setDuration] = useState('')
  const [content, setContent] = useState('')
  const contentEndRef = useRef<HTMLDivElement>(null);

  // 创建攻略
  const handleCreateStrategy = async (content: string) => {
    try {
      const req: StrategyCreateReq = {
        destination,
        duration,
        budget,
        tripGroup,
        tripMood: tripType,
        strategy: content,
      }
      await createStrategy(req)
    } catch (err) {
      console.log(err)
    }
  }

  // 生成攻略
  const handleGenerateStrategy = async () => {
    try {
      const token = localStorage.getItem("token")
      const response = await fetch('http://localhost:1003/api/intelligence/strategy/generate', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json', // 设置请求的 Content-Type
              'Authorization': `Bearer ${token}`, // 设置 Authorization 请求头
          },
          body: JSON.stringify({destination, duration, budget, tripGroup, tripMood: tripType }) 
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const reader = response.body?.getReader(); 
      if (!reader) {
        throw new Error('Failed to get reader from response body');
      }
      const decoder = new TextDecoder();
      let partialContent = '';
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          console.log(partialContent)
          // todo：读取完毕，将结果插入数据库
          await handleCreateStrategy(partialContent)
          // await handleGetConversationList()
          // setContent("")
          break; // 如果读取完成，跳出循环
        }
        if (value) {
          const text = decoder.decode(value, { stream: true });
          const jsonData = JSON.parse(text.substring(6));
          partialContent += jsonData.result;
          setContent(partialContent)
        }
      }
    } catch (error) {
      // todo：错误处理，前端优化
      console.error('Error:', error);
    }
  }

  const handleBudgetChange = (event: SelectChangeEvent) => {
    setBudget(event.target.value as string);
  };

  const handleTripGroupChange = (event: SelectChangeEvent) => {
    setTripGroup(event.target.value as string);
  };

  const handleTripTypeChange = (event: SelectChangeEvent) => {
    setTripType(event.target.value as string);
  };
  const history = useRouter()

  useEffect(() => {
    scrollToBottom()
  }, [content])

  const generateContent = async () => {
    // 模拟数据生成代码，这里用简单的示例代替
    // const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.";
    // setGeneratedContent(content);
    await handleGenerateStrategy()
  };

  const onTabChange = (tabValue: string) => {
    history.push(`/intelligence/${tabValue}`)
  };

  // 函数用于滚动到对话内容的底部
  const scrollToBottom = () => {
    if (contentEndRef.current) {
      contentEndRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <Box>
      <TabList onTabChange={onTabChange} intelligenceTabType="strategy" />
      <Box sx={{ textAlign: 'center' }}>
        <Card sx={{ border: 'none', boxShadow: 'none' }}>
          <Typography variant="h3" sx={{ mb: 2 }}>Where to Travel?</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <Card sx={{  borderRadius: '8px', p: 3, m: 3, bgcolor: '', border: '1px solid #ccc' }}>
              <Typography variant="body1">Destination</Typography>
              <TextField value={destination} onChange={(e) => setDestination(e.target.value)} label="Input" variant="outlined" fullWidth sx={{ mt: 1 }} />
            </Card>
            <Card sx={{  borderRadius: '8px', p: 3, m: 3, bgcolor: '', border: '1px solid #ccc' }}>
              <Typography variant="body1">Duration</Typography>
              <TextField value={duration} onChange={(e) => setDuration(e.target.value)} label="Input" variant="outlined" fullWidth sx={{ mt: 1 }} />
            </Card>
          </Box>
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
                    <MenuItem value={'Low'}>Low</MenuItem>
                    <MenuItem value={'Medium'}>Medium</MenuItem>
                    <MenuItem value={'High'}>High</MenuItem>
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
                    <MenuItem value={'Solo'}>Solo</MenuItem>
                    <MenuItem value={'Couple'}>Couple</MenuItem>
                    <MenuItem value={'Friends'}>Friends</MenuItem>
                    <MenuItem value={'Family'}>Family</MenuItem>
                  </Select>
                </FormControl>
              </Card>
              <Card sx={{ borderRadius: '8px', p: 3, m: 3, width: 270, height: 137, border: '1px solid #ccc' }}>
                <Typography variant="body1" sx={{ mb: 1}}>Trip Type</Typography>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Trip Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tripType}
                    label="TripType"
                    onChange={handleTripTypeChange}
                  >
                    <MenuItem value={'General'}>General</MenuItem>
                    <MenuItem value={'Museums & History'}>Museums & History</MenuItem>
                    <MenuItem value={'Architecture'}>Architecture</MenuItem>
                    <MenuItem value={'Food'}>Food</MenuItem>
                    <MenuItem value={'Nature'}>Nature</MenuItem>
                  </Select>
                </FormControl>
              </Card>
            </Box>
          </Box>
        </Card>
        <Card sx={{ ml: 3, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: 'none', boxShadow: 'none', mr: 7, mb: 5 }}>
          <Button variant="contained" onClick={() => generateContent()} sx={{ mb: 2, height: '45px', width:'250px', backgroundColor: '#2196f3 !important', textTransform: 'none', fontWeight: 'medium', fontSize: '1.2rem'}}>Generate Strategy</Button>
          {content && (
            <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', p: 2, overflowY: 'auto', width: '100%', textAlign: 'left' }}>
              {/* <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Your Strategy</Typography> */}
              <ReactMarkdown className='markdown'>{content}</ReactMarkdown>
            </Box>
          )}
          {/* 用于滚动到底部 */}
          <div ref={contentEndRef} />
        </Card>
      </Box>
    </Box>
  )
}

const CardRow = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <CustomeCard tip="Destination"/>
      <CustomeCard tip="Duration"/>
    </Box>
  );
};

const CustomeCard: React.FC<{tip:string}> = ({tip}) => {
  return (
    <Card sx={{  borderRadius: '8px', p: 3, m: 3, bgcolor: '', border: '1px solid #ccc' }}>
      <Typography variant="body1">{tip}</Typography>
      <TextField label="Input" variant="outlined" fullWidth sx={{ mt: 1 }} />
    </Card>
  );
};


export default Strategy;