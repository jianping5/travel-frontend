import { Box, Typography } from "@mui/material";

function HistoryDetail() {
  const generatedContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.";

  return (
    <div>
      <Typography variant="h5" sx={{ mt: '10px' }}>Hunan ZhangJiaJie | two days | normal budget | couple | nature</Typography>
      <Typography variant="body1" sx={{ mt: '7px', color: 'gray' }}>2024-10-21 10:25</Typography>
      <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', p: 2, mt: '20px', mr:'250px', overflowY: 'auto' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'left' }}>Your Strategy</Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', textAlign: 'left', mt: '5px', minHeight: '500px' }}>{generatedContent}</Typography>
      </Box>
    </div>
  )
}

export default HistoryDetail;