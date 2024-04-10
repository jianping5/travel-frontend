'use client'
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface StreamingCardProps {
  content: string;
}

const StreamingCard: React.FC<StreamingCardProps> = ({ content }) => {
  const [streamingContent, setStreamingContent] = useState<string>('');

  useEffect(() => {
    const formattedContent = content.replace(/\n/g, '<br>'); // 将换行符替换为 <br>
    setStreamingContent(formattedContent);
  }, [content]);

  return (
    <Card>
      <CardContent>
        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: streamingContent }} />
      </CardContent>
    </Card>
  );
};

export default StreamingCard;
