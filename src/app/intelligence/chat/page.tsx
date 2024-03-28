'use client'
import TabList from "@/components/intelligence/TabList";
import ThemeContext from "@/context/ThemeContext";
import { Avatar, Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useRef, useState } from "react";
import SendIcon from '@mui/icons-material/Send';

type Message = {
  id: number;
  content: string;
  sender: string;
};

const initialMessages: Message[] = [
  // { id: 1, content: "Hello!", sender: "User" },
  { id: 1, content: "Hello! You can ask me some questions about travel.", sender: "Bot" }
];

const Chat = () => {
  const { setIntelligenceTabType }  = useContext(ThemeContext);
  const history = useRouter()
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  
  // 函数用于滚动到对话内容的底部
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      const newMessage: Message = {
        id: messages.length + 1,
        content: inputValue,
        sender: 'User'
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setInputValue('');
      
      // Simulate bot response (replace this with actual logic)
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          content: 'This is a bot response.Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.'+
          'Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.',
          sender: 'Bot'
        };
        setMessages(prevMessages => [...prevMessages, botResponse]);
      }, 1000);
    }
    scrollToBottom();
  };

  useEffect(() => {
    setIntelligenceTabType('chat')
    scrollToBottom();
  }, [messages])

  const onTabChange = (tabValue: string) => {
    history.push(`/intelligence/${tabValue}`)
    setIntelligenceTabType(tabValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.shiftKey) {
      // 如果按下的是 Shift + Enter，则在输入框中插入换行符
      e.preventDefault(); // 阻止默认的换行行为
      setInputValue((prevValue) => prevValue + '\n');
    } else if (e.key === 'Enter' && !e.shiftKey) {
      // 如果按下的是 Enter，但没有按下 Shift，则发送消息
      e.preventDefault(); // 阻止默认的提交行为
      handleMessageSend();
    }
  };

  return (
    <div>
      <TabList onTabChange={onTabChange}/>
      <Box sx={{ p: 2 }}>
        <Box sx={{ maxHeight: '70vh', overflowY: 'auto', minHeight: '70vh', borderRadius: '8px', mb: 2 }}>
          {messages.map((message) => (
            <Box key={message.id} sx={{ display: 'flex', alignItems: 'flex-start', mb: 5 }}>
              <Avatar alt={message.sender} src="https://yt3.googleusercontent.com/nkUy7yOWP3EOk-e7HbV2e2L6suWQq5-Ggctu3_pBQTSNkjVpm0SW-k34tobItcuJ-r1a1R_qig=s176-c-k-c0x00ffffff-no-rj" sx={{ mr: 1, width:'30px', height:'30px' }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{message.sender}</Typography>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>{message.content}</Typography>
              </Box>
            </Box>
          ))}
          {/* 用于滚动到底部 */}
          <div ref={messagesEndRef} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            value={inputValue}
            multiline
            onChange={(e) => setInputValue(e.target.value)}
            label="Type your message"
            variant="outlined"
            fullWidth
            onKeyDown={handleKeyPress} // 添加键盘事件监听
            sx={{ mr: 1 }}
          />
          <IconButton sx={{ borderRadius: '15px', height:'60px', width:'60px', color: 'black' }}  onClick={handleMessageSend}>
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  )
}

export default Chat;