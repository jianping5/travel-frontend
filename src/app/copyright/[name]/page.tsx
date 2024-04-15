'use client'
import { Box, Button, Card, CardMedia, Divider, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { HiOutlineShoppingCart } from "react-icons/hi";

function CopyrightDetail() {

  // 模拟一些数据
  const data = [
    { event: 'Event 1', price: '$10', from: 'Alice', to: 'Bob', date: '2024-03-20' },
    { event: 'Event 2', price: '$15', from: 'Charlie', to: 'David', date: '2024-03-21' },
    { event: 'Event 3', price: '$20', from: 'Eve', to: 'Frank', date: '2024-03-22' },
  ];


  return (
    <div>
      <div style={{ display: 'flex', marginBottom: 17 }}>
        <div style={{}}>
          <Card sx={{ width: '600px', height: '500px', borderRadius: '10px', ml: 5, mt: 5, border:'1px solid #ccc', backgroundColor: '#fefefe' }}>
            <CardMedia 
            component="img" 
            image='https://cdn.pixabay.com/photo/2017/02/22/16/20/new-zealand-2089838_1280.jpg' 
            alt='image' 
            sx={{ objectFit: 'contain', width: '100%', height:'100%' }}
            />
          </Card>
        </div>

        <div style={{ flex: '1' }}>
          <Box sx={{ ml: '10px', mt: 5}}>
            <Typography variant="h5" >Travel Log</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'medium', fontSize: '1rem', color: '#242424'}}>Owned by jianping5</Typography>
            <Card sx={{ mt: 2, mr: 3, p: 1, height:'200px', borderRadius: '9px', border:'1px solid #ccc', backgroundColor: '#fefefe' }}>
              <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', m: 1}}> Sales on 2024-10-5 10:25 </Typography>
              <Divider/>
              <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', m: 1, color: '#777' }}> Current price </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, fontSize: '1.7rem', m: 1 }}> $123567 </Typography>
              <Button variant="contained" sx={{ borderRadius: '10px', ml:1, backgroundColor: '#2196f3 !important', width:'300px', height:'50px', textTransform: 'none', fontWeight: 'medium', fontSize: '1rem'}} endIcon={<HiOutlineShoppingCart />}>
                Buy now / Sell now
              </Button>
            </Card>
            <Card sx={{ mt: 3, mr: 3, p: 1, height:'200px', borderRadius: '9px', border:'1px solid #ccc', backgroundColor: '#fefefe' }}>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem', m: 1, fontWeight: 'bold'}}> Description </Typography>
              <Divider/>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', m: 1}}> Supports creator This listing is paying the collection creator their suggested creator earnings. </Typography>
            </Card>
          </Box>
        </div>

      </div>

      <div>
        <Card sx={{ ml: 5, mr: 3, p: 1, borderRadius: '9px', border:'1px solid #ccc', backgroundColor: '#fefefe' }}>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem', m: 1,  fontWeight: 'bold' }}> Trade record </Typography>
          <Divider/>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Event</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>From</TableCell>
                <TableCell>To</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.event}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.from}</TableCell>
                  <TableCell>{row.to}</TableCell>
                  <TableCell>{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>

  )
}

export default CopyrightDetail;