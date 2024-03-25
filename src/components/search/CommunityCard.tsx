import { AiFillCheckCircle } from 'react-icons/ai';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import React from 'react';
import Typography from '@mui/material/Typography';

type AppCardProps = {
  url: string,
  title: string,
  channelTitle: string,
  videoId: number,
}

const AppCard: React.FC<AppCardProps> = ({ url, title, channelTitle, videoId }) => {
  const handleButtonClick = () => {
    console.log(123)
  }

  const truncatedTitle = title.length > 100 ? `${title.substring(0, 100)}...` : title;
  url = 'https://yt3.googleusercontent.com/ytc/AIdro_nlR3ivirsiC0Vaae1hteLwhVfKKkgCtAfkf901=s176-c-k-c0x00ffffff-no-rj'

  return (
      <Link href={`https://www.youtube.com/watch?v=${videoId}`} underline="none" sx={{ position: 'relative', display: 'inline-block' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'transparent', zIndex: 1 }}></div>
        <Card sx={{ display: 'flex', borderRadius: 0, boxShadow: 'none', border: 'none', position: 'relative', zIndex: 2 }}>
          <CardMedia component="img" sx={{width: 150, height: 150, }}  image={url} alt={title} />
          
          <CardContent sx={{ flex: 1, padding: 3}}>
            <Typography variant="h6" sx={{  color: '#000000', fontWeight: 'medium', fontSize: '1.2rem', lineHeight: '1.2', WebkitLineClamp: 2, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis', wordBreak: 'break-word' }}>
              {truncatedTitle}
            </Typography>
          
            <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.8rem'}}>
              100k members
            </Typography>

            <Typography variant="body2" sx={{ color: '#606060', marginTop: 2}}>
              Everything and anything manga! (manhwa/manhua is okay too!) Discuss weekly chapters, find/recommend a new series to read, post a picture of your collection, lurk, etc!
            </Typography>
          </CardContent>
        </Card>
      </Link>
  );
};

export default AppCard;




