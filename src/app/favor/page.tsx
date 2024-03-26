import CardList from "@/components/favor/CardList";
import { youtubeResponse } from "@/data/app.data";
import { Card, CardContent, Typography } from "@mui/material";


function Favor() {
  const items1 = youtubeResponse

  // todo: 考虑动态背景颜色，根据图片提取
  const bgcolor = 'white'

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1', position: 'sticky', top: '20px', maxHeight: '500px'}}>
        <Card sx={{ height:'85vh', borderRadius:'20px', width:'450px', marginLeft:'70px', bgcolor: {bgcolor} }}>
          <CardContent sx={{ margin: '10px' }}>
            <img src='https://i.ytimg.com/vi/CoQfichK5Iw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAFawqunbx8ovgHP6RWTQI9mnjjw'
             style={{ width:'400px', borderRadius: '20px'}}>
            </img>
            <Typography variant="h4" sx={{ marginTop: '10px' }}>
              Deep Focus Music To Improve Concentration
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div style={{ marginLeft:'80px'}}>
      </div>

      <div style={{ flex: '2', marginTop:'35px'}}>
        <CardList items={items1} contentType='Videos'/>
      </div>

    </div>
  )

}

export default Favor;