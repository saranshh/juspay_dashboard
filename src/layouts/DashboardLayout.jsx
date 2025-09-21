import { Outlet } from "react-router";
import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Rigthbar from "../components/Rigthbar";
import RigthbarContent from "../components/RigthbarContent";

export default function DashboardLayout({ toggleTheme, mode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [rightBarOpen, setRightBarOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleRightBarToggle = () => setRightBarOpen(!rightBarOpen);
  const drawerWidth = 300;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          transition: "margin 0.3s ease",
          mr: !rightBarOpen ? `${-drawerWidth}px` : 0,
          overflow: "auto",
        }}
      >
        <Header
          mode={mode}
          setMode={toggleTheme}
          handleDrawerToggle={handleDrawerToggle}
          handleRightBarToggle={handleRightBarToggle}
        />
        <Box component="main" sx={{
          p: 3,
          bgcolor: "background.paper",
          overflow: "auto",
        }}>
          <Outlet />
        </Box>
      </Box>

      <Rigthbar mobileOpen={rightBarOpen} handleDrawerToggle={handleRightBarToggle} />

      {/* Mobile Drawer */}
      {/* <Drawer
        variant="temporary"
        anchor="right"
        open={rightBarOpen}
        onClose={handleRightBarToggle}
        ModalProps={{ keepMounted: true, }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
          overflow: "auto",
        }}
      >
        <RigthbarContent />
      </Drawer> */}
    </Box>
  );
}
