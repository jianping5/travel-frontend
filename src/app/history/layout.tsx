"use client"
import SideList from "@/components/side/SideList";
import ThemeContext from "@/context/ThemeContext";
import { appContentWrapper, appWrapper, flexColumnGrow } from "@/styles/styles";
import { Button, Card, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box"
import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

function HistoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { mobileOpen } = useContext(ThemeContext);
  
  const sideBarWidth = mobileOpen ? '70px' : '250px';
  return (
    <Box sx={appWrapper}>
      <Box component="main" sx={appContentWrapper}>
        <Box
          component="div"
          sx={{
            flexBasis: sideBarWidth,
            flexGrow: 0,
            flexShrink: 0,
            overflowY: 'auto',
          }}
        >
          <SideList />
        </Box>
        <Box component="div" sx={flexColumnGrow}>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              p: 1,
              overflowY: 'auto',
              overflowX: 'hidden',
              width: `calc(100vw - ${sideBarWidth})`,
            }}
          >
            {children}
          </Box>
          <Box
            component="div"
            style={{
              position: 'absolute',
              top: 150,
              right: 150,
              width: '300px', // 调整卡片宽度
               // 或者根据需要调整高度
              boxShadow: 'none', // 阴影效果
              overflowY: 'auto',
            }}
          >
            {/* 这里放置右侧的卡片内容 */}
            <Card sx={{ marginLeft:'10px', top:'100px', boxShadow: 'none', border: 'none', position: 'sticky' }}>
            <Button variant="text" sx={{ textTransform: 'none', color: 'black', borderRadius: '50px' }}>
              <RiDeleteBin6Line style={{ marginRight: '10px', fontSize: '1.5rem', color: 'black' }} />
              <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 'medium', color: 'black' }}>Clear all watch history</Typography>
            </Button>
            </Card>
          </Box> 
        </Box>
      </Box>
    </Box>
  );
}

export default HistoryLayout;