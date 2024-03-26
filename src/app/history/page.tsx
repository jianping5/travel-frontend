import CardList from "@/components/history/CardList";
import { youtubeResponse } from "@/data/app.data";
import { Button, Card, Typography } from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";


function History() {

  const items = youtubeResponse.slice(0, 10)
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '2', position: 'relative' }}>
        <Typography variant="h4" sx={{ marginTop: '10px', marginBottom: '20px'}}> Watch history</Typography>
        <CardList items={items} contentType='Videos' />
      </div>
      <div style={{ flex: '1'}}>
      </div>
    </div>
  )
}

export default History;