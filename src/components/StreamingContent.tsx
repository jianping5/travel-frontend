'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

interface StreamingCardProps {
  content: string;
}

const StreamingCard: React.FC<StreamingCardProps> = ({ content }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 当内容更新时，将滚动条滚动到底部
    if (cardRef.current) {
      cardRef.current.scrollTop = cardRef.current.scrollHeight;
    }
  }, [content]);

  return (
    <Card>
      <CardContent ref={cardRef} style={{ overflowY: 'auto', maxHeight: '400px' }}>
        {/* <Typography variant="body1" dangerouslySetInnerHTML={{ __html: streamingContent }} /> */}
        <ReactMarkdown>{content}</ReactMarkdown>
      </CardContent>
    </Card>
  );
};

export default StreamingCard;
