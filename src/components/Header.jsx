import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  InputBase,
  Badge,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import HistoryIcon from "@mui/icons-material/History";
import PeopleIcon from "@mui/icons-material/People";
import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';import { useLocation } from "react-router";
import SearchComponent from "./SearchComponent";

export default function Header({
  mode,
  setMode,
  handleDrawerToggle,
  handleRightBarToggle,
}) {
  const location = useLocation()

  const pathName = location.pathname.split('/')[1]

  console.log(pathName)

  const finalPathName = pathName ? pathName?.at(0)?.toUpperCase() + pathName?.slice(1)?.toLowerCase() : ''

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Toolbar sx={{ minHeight: 56, px: 2 }}>
        {/* LEFT: Sidebar toggle + Breadcrumb */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
            Dashboards /
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }} >
            {finalPathName === 'Dashboard' ? '' : finalPathName}
          </Typography>
        </Box>

        {/* CENTER: Search */}
        <SearchComponent />

        {/* RIGHT: Actions */}
        <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
          <IconButton
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            color="inherit"
          >
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <IconButton color="inherit">
            <HistoryIcon />
          </IconButton>

          <IconButton color="inherit">
            <NotificationsNoneRoundedIcon />
          </IconButton>

          <IconButton color="inherit" onClick={handleRightBarToggle}>
            <ViewSidebarOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
