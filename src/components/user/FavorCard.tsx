import { Box, CardMedia, Typography } from "@mui/material";


type AppCardProps = {
  url: string,
  title: string,
  channelTitle: string,
  videoId: number,
}

const FavorCard: React.FC<AppCardProps> = ({ url, title, channelTitle, videoId }) => {

  return (
    <Box>
      <CardMedia component="img" sx={{width: '750px', height: '150px', objectFit: 'cover', borderRadius: '17px'}}  
       image={url} alt='image' />
      <Typography variant="h5" sx={{ margin:'1px', fontSize: '1.2rem', fontWeight: 'medium' }}> Travel Music </Typography>
    </Box>
  )
}

export default FavorCard;