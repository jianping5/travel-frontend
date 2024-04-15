'use client'
import TabList from "@/components/intelligence/TabList";
import ThemeContext from "@/context/ThemeContext";
import { Avatar, Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useRef, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { createConversation, getConversationList } from "@/api/intelligence/intelligence-api";

const Chat = () => {
  const { setIntelligenceTabType }  = useContext(ThemeContext);
  const history = useRouter()
  const [messages, setMessages] = useState<ConversationView[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string>('');

  // 获取对话
  const handleGetConversationList = async () => {
    try {
      const res = await getConversationList()
      const data = res.data
      setMessages(data.list || [])
    } catch (err) {
      console.log(err)
    }
  }

  // 创建会话
  const handleCreateConversation = async (content: string, isGenerated: boolean) => {
    try {
      const req: ConversationCreateReq = {
        content: content,
        isGenerated: isGenerated
      }
      await createConversation(req)
    } catch (err) {
      console.log(err)
    }
  }

  // 生成对话
  const handleGenerateConversation = async () => {
    try {
      const token = localStorage.getItem("token")
      const response = await fetch('http://localhost:1003/api/intelligence/conversation/generate', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json', // 设置请求的 Content-Type
              'Authorization': `Bearer ${token}`, // 设置 Authorization 请求头
          },
          body: JSON.stringify({content: inputValue, isGenerated: true}) // 添加请求的主体内容，如果有的话
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
          // todo：读取完毕，将结果插入数据库
          // setContent(partialContent); // 更新状态
          await handleCreateConversation(partialContent, true)
          await handleGetConversationList()
          setContent("")
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

  // 发送内容，获取结果
  const handleMessageSend = async () => {
    if (inputValue.trim() !== '') {
      scrollToBottom();
      await handleCreateConversation(inputValue, false)
      await handleGetConversationList()

      setInputValue('');
      
      // Simulate bot response (replace this with actual logic)
      await handleGenerateConversation()
    }
  };

  useEffect(() => {
    handleGetConversationList()
  }, [])

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setIntelligenceTabType('chat')
    scrollToBottom();
  }, [content])

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

  // 函数用于滚动到对话内容的底部
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <TabList onTabChange={onTabChange}/>
      <Box sx={{ p: 1 }}>
        <Box sx={{ maxHeight: '70vh', overflowY: 'auto', minHeight: '70vh', borderRadius: '8px', mb: 2 }}>
          {messages.map((message) => (
            <Box key={message.id} sx={{ display: 'flex', alignItems: 'flex-start', mb: 5 }}>
              <Avatar alt="" src="https://yt3.googleusercontent.com/nkUy7yOWP3EOk-e7HbV2e2L6suWQq5-Ggctu3_pBQTSNkjVpm0SW-k34tobItcuJ-r1a1R_qig=s176-c-k-c0x00ffffff-no-rj" sx={{ mr: 1, width:'30px', height:'30px' }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{message.isGenerated ? "Bot" : "User"}</Typography>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>{message.content}</Typography>
              </Box>
            </Box>
          ))}
          {content != "" && (
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 5 }}>
              <Avatar alt="" src="https://yt3.googleusercontent.com/nkUy7yOWP3EOk-e7HbV2e2L6suWQq5-Ggctu3_pBQTSNkjVpm0SW-k34tobItcuJ-r1a1R_qig=s176-c-k-c0x00ffffff-no-rj" sx={{ mr: 1, width:'30px', height:'30px' }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Bot</Typography>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>{content}</Typography>
              </Box>
            </Box>
          )}
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