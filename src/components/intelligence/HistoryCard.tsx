'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import React from 'react';
import Typography from '@mui/material/Typography';
import { timeAgo } from '@/utils/tool';

type AppCardProps = {
  item: StrategyView
}

const AppCard: React.FC<AppCardProps> = ({ item }) => {
  // 使用正则表达式匹配标题内容
  const match = item.strategy.match(/^#\s*(.*?)\s*\n\n/);

  // 如果匹配成功，提取标题内容
  const title = match ? match[1] : "";

  return (
    <Link href={`/intelligence/history/detail?id=${item.id}`} underline="none" sx={{ position: 'relative', display: 'inline-block' }}>
      <Card sx={{ ml: 3, display: 'flex', borderRadius: '7px', width:'1000px', position: 'relative', mt: 2, border: '1px solid #ccc' }}>
        <CardContent sx={{ flex: 1, padding: 1, marginLeft: ''}}>
          <List sx={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
            <ListItem sx={{ alignItems: 'center', marginTop: '10px' }}>
              <Typography variant="h3" sx={{  fontSize: '1.3rem'}}>
                {title}
              </Typography>
            </ListItem>

            <ListItem sx={{ marginTop: '-10px'}}>
              <Typography variant="subtitle1" sx={{ color: 'gray', fontWeight: 'medium', fontSize: '0.8rem' }}>
                  {timeAgo(new Date(item.createTime).getTime())}
              </Typography>
            </ListItem>

            <ListItem sx={{ marginTop: '-10px'}}>
              <Typography variant="h6" sx={{ color: '', fontWeight: 'medium', fontSize: '1rem' }}>
                {item.duration}   |   {item.budget} budget   |   {item.tripGroup}   |   {item.tripMood}
              </Typography>
            </ListItem>

          </List>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AppCard;
