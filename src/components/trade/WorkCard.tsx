import { timeAgo } from "@/utils/tool";
import { Box, CardMedia, Typography } from "@mui/material";


type AppCardProps = {
  item: CopyrightDetailResp
}

const WorkCard: React.FC<AppCardProps> = ({ item }) => {
  const truncatedTitle = item?.copyright?.title?.length > 70 ? `${item?.copyright.title.substring(0, 70)}...` : item?.copyright.title;

  return (
    <Box sx={{ marginTop: '10px', display: 'flex'}}>
      <div style={{ flex: '2'}}>
      <CardMedia component="img" sx={{width: '170px', height: '100px', objectFit: 'cover', borderRadius: '7px'}}  
       image={item.copyright.coverUrl} alt='image' />
      </div>
      <div style={{ flex: '3'}}>
        <Typography variant="h5" sx={{ fontSize: '1rem', fontWeight: 'medium', mb: '12px' }}> {truncatedTitle} </Typography>
        <Typography variant="body1" sx={{ fontSize: '0.9rem', fontWeight: 'medium' }}>User: {item.userInfo.account}</Typography>
        <Typography variant="body2" sx={{ fontSize: '0.9rem',fontWeight: 'medium' }}>Created: {timeAgo(new Date(item.copyright.createTime).getTime())}</Typography>
      </div>
    </Box>
  )
}

export default WorkCard;