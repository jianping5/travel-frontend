'use client'
import StreamingCard from '@/components/StreamingContent';
import { Stream } from '@mui/icons-material';
import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react';


const IndexPage: React.FC = () => {
  const [content, setContent] = useState<string>('');

  const fetchData = async () => {
    try {
        const token = localStorage.getItem("token")
        const response = await fetch('http://localhost:1003/api/intelligence/conversation/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // 设置请求的 Content-Type
                'Authorization': `Bearer ${token}`, // 设置 Authorization 请求头
            },
            body: JSON.stringify({}) // 添加请求的主体内容，如果有的话
        });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const reader = response.body?.getReader(); // 添加了安全导航符
      if (!reader) {
        throw new Error('Failed to get reader from response body');
      }
      const decoder = new TextDecoder();
      let result = '';
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          console.log(123123123)
          break; // 如果读取完成，跳出循环
        }
        if (value) {
          // result += decoder.decode(value, { stream: true });
          // setContent(result); // 更新状态
          const text = decoder.decode(value, { stream: true });
          const jsonData = JSON.parse(text.substring(6));
          if (jsonData.result) {
              result += jsonData.result;
              setContent(result); // 更新状态
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    console.log("哈哈哈")
    fetchData();
  }, []);

  return (
    <div>
      <StreamingCard content={content} />
    </div>
  );
};

export default IndexPage;
