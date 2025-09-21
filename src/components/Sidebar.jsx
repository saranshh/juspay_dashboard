import React, { useState } from "react";
import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  Avatar,
  Divider,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Dashboard,
  ShoppingCart,
  Folder,
  MenuBook,
  Person,
  AccountBox,
  People,
  Description,
  Group,
  Article,
  Share,
} from "@mui/icons-material";
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import RememberMeOutlinedIcon from '@mui/icons-material/RememberMeOutlined';

import { Link, useLocation } from "react-router";

const drawerWidth = 260;

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const [openMenu, setOpenMenu] = useState({});
  const location = useLocation();

  const handleClick = (menu) => {
    setOpenMenu((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const renderMenuItem = (to, icon, label, children) => {
    const isActive = location.pathname === to;

    if (children) { 
      return (
        <>
          <ListItemButton onClick={() => handleClick(label)} style={{ borderRadius: 1,padding:8, justifyContent: 'space-between' }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ListItemIcon>{icon}</ListItemIcon>
              <Typography
                color="text.primary"
                style={{ fontSize: "14px" }}
              >
                {label}
              </Typography>
            </Box>
            {openMenu[label] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openMenu[label]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {children.map((child) => (
                <ListItemButton
                  key={child.label}
                  component={Link}
                  to={child.to}
                  sx={{ pl: 7 }}
                >
                  <ListItemText
                    primary={child.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      color: "text.secondary",
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </>
      );
    }

    return (
      <ListItemButton
        component={Link}
        to={to}
        selected={isActive}
        sx={{ borderRadius: 1, padding: 1 }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <Typography
          color="text.primary"
          style={{ fontSize: "14px" }}
        >
          {label}
        </Typography>
      </ListItemButton>
    );
  };

  const drawerContent = (
    <Box sx={{ p: 2 }}>
      {/* Profile / Logo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Avatar sx={{ mr: 1 }} src="/assets/avater1.jpg"/>
        <Typography variant="subtitle1" >
          ByeWind
        </Typography>
      </Box>

      {/* Favorites */}
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ pl: 2, mt: 2 }}
      >
        Favorites
      </Typography>
      <List>
        {renderMenuItem("/overview", <Dashboard />, "Overview")}
        {renderMenuItem("/projects", <FolderOpenRoundedIcon />, "Projects")}
      </List>

      {/* Dashboards */}
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ pl: 2, mt: 2 }}
      >
        Dashboards
      </Typography>
      <List>
        {renderMenuItem("/default", <PieChartOutlineIcon />, "Default")}
        {renderMenuItem("/ecommerce", <LocalMallOutlinedIcon />, "eCommerce")}
        {renderMenuItem("/orders", <LocalMallOutlinedIcon />, "Orders")}
        {renderMenuItem("/projects", <FolderOpenRoundedIcon />, "Projects")}
        {renderMenuItem("/courses", <MenuBookIcon />, "Online Courses")}
      </List>

      {/* Pages */}
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ pl: 2, mt: 2 }}
      >
        Pages
      </Typography>
      <List>
        {renderMenuItem("/profile", <RememberMeOutlinedIcon />, "User Profile", [
          { label: "Overview", to: "/profile/overview" },
          { label: "Projects", to: "/profile/projects" },
          { label: "Campaigns", to: "/profile/campaigns" },
          { label: "Documents", to: "/profile/documents" },
          { label: "Followers", to: "/profile/followers" },
        ])}
        {renderMenuItem("/account", <PortraitOutlinedIcon />, "Account")}
        {renderMenuItem("/corporate", <GroupsOutlinedIcon />, "Corporate")}
        {renderMenuItem("/blog", <Article />, "Blog")}
        {renderMenuItem("/social", <Share />, "Social")}
      </List>
    </Box>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid",
            borderColor: "divider",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
