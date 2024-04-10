import { Box, CardMedia, Link, Typography } from "@mui/material";


type AppCardProps = {
  props: FavoriteListView
}

const FavorCard: React.FC<AppCardProps> = ({ props }) => {

  return (
    <Box sx={{ marginTop: '10px'}}>
      <Link href={`/favor?id=${props.id}`} underline='none'>
        <CardMedia component="img" sx={{width: '750px', height: '170px', objectFit: 'cover', borderRadius: '10px'}}  
        image={props.coverUrl} alt='image' />
        <Typography variant="h5" sx={{ margin:'2px', fontSize: '1.2rem', fontWeight: 'medium', color: 'black' }}> {props.name} </Typography>
      </Link>
    </Box>
  )
}

export default FavorCard;