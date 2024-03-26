"use client"
import SideList from "@/components/side/SideList";
import UserDetail from "@/components/user/UserDetail";
import ThemeContext from "@/context/ThemeContext";
import { appContentWrapper, appWrapper, flexColumnGrow } from "@/styles/styles";
import Box from "@mui/material/Box"
import { Children, useContext } from "react";

function User({
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
        </Box>
      </Box>
    </Box>
  );
}

export default User;