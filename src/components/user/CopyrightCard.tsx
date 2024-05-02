import { timeAgo } from "@/utils/tool";
import { Box, CardMedia, Link, Typography } from "@mui/material";

type AppCardProps = {
  props: CopyrightView
}

const CopyrightCard: React.FC<AppCardProps> = ({ props }) => {
  const truncatedTitle = props.title.length > 200 ? `${props.title.substring(0, 200)}...` : props.title;

  return (
    <Box sx={{ marginTop: '10px'}}>
      <Link href={`/copyright/detail?id=${props.id}`} underline="none">
        <CardMedia component="img" sx={{width: '750px', height: '170px', objectFit: 'cover', borderRadius: '12px'}}  
        image={props.coverUrl} alt='image' />
        <Typography variant="h5" sx={{ fontSize: '1rem', fontWeight: 'medium', color:'black' }}> {truncatedTitle} </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '0.9rem', }}> {timeAgo(new Date(props.createTime).getTime())} </Typography>
      </Link>
    </Box>
  )
}

export default CopyrightCard;