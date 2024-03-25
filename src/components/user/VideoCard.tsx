import { Box, CardMedia, Typography } from "@mui/material";


type AppCardProps = {
  url: string,
  title: string,
  channelTitle: string,
  videoId: number,
}

const VideoCard: React.FC<AppCardProps> = ({ url, title, channelTitle, videoId }) => {
  const truncatedTitle = title.length > 200 ? `${title.substring(0, 200)}...` : title;

  return (
    <Box>
      <CardMedia component="img" sx={{width: '750px', height: '150px', objectFit: 'cover', borderRadius: '17px'}}  
       image={url} alt='image' />
      <Typography variant="h5" sx={{ fontSize: '1rem', fontWeight: 'medium' }}> {truncatedTitle} </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ fontSize: '0.9rem', }}> 100k likes · 1 day ago </Typography>
    </Box>
  )
}

export default VideoCard;