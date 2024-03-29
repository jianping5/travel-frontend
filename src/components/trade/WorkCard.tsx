import { Box, CardMedia, Typography } from "@mui/material";


type AppCardProps = {
  url: string,
  title: string,
  channelTitle: string,
  videoId: number,
}

const WorkCard: React.FC<AppCardProps> = ({ url, title, channelTitle, videoId }) => {
  const truncatedTitle = title.length > 70 ? `${title.substring(0, 70)}...` : title;

  return (
    <Box sx={{ marginTop: '10px', display: 'flex'}}>
      <div style={{ flex: '2'}}>
      <CardMedia component="img" sx={{width: '170px', height: '100px', objectFit: 'cover', borderRadius: '12px'}}  
       image={url} alt='image' />
      </div>
      <div style={{ flex: '3'}}>
        <Typography variant="h5" sx={{ fontSize: '1rem', fontWeight: 'medium', mb: '12px' }}> {truncatedTitle} </Typography>
        <Typography variant="body1" sx={{ fontSize: '0.9rem', fontWeight: 'medium' }}>User: jianping5</Typography>
        <Typography variant="body2" sx={{ fontSize: '0.9rem',fontWeight: 'medium' }}>Likes: 100k likes</Typography>
      </div>
    </Box>
  )
}

export default WorkCard;