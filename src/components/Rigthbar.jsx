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
  ListItem,
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
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import { Link, useLocation } from "react-router";

const drawerWidth = 300;
const Rigthbar = ({ mobileOpen, handleDrawerToggle }) => {
  const [openMenu, setOpenMenu] = useState({});
  const location = useLocation();

  const rightBarContent = [
    {
      title: "Notifications",
      data: [
        {
          label: 'You have a that need',
          time: 'Just now',
          avater: '/assets/BugBeetle.svg'
        },
        {
          label: 'New user registered',
          time: '59 minutes ago',
          avater: '/assets/User.svg'

        },
        {
          label: 'You have a that need',
          time: 'Just now',
          avater: '/assets/BugBeetle.svg'

        },
        {
          label: 'Andi Lane subscribed to you',
          time: 'Today, 11:57 AM',
          avater: '/assets/Broadcast.svg'

        },
      ]
    },
    {
      title: "Activities",
      data: [
        {
          label: 'You have a bug that needs to be fixed.',
          time: 'Just now',
          avater: '/assets/avater5.jpg'

        },
        {
          label: 'Released a new version',
          time: '59 minutes ago',
          avater: '/assets/avater2.jpg'

        },
        {
          label: 'Submitted a bug',
          time: '12 hours ago',
          avater: '/assets/avater7.jpg'

        },
        {
          label: 'Modified A data in Page X',
          time: 'Today, 11:59 AM',
          avater: '/assets/avater8.jpg'

        },
        {
          label: 'Deleted a page in Project X',
          time: 'Feb 2, 2023',
          avater: '/assets/avater4.jpg'

        },
      ]
    },
    {
      title: "Contacts",
      data: [
        {
          label: 'Natali Craig',
          avater: '/assets/avater1.jpg'
        },
        {
          label: 'Drew Cano',
          avater: '/assets/avater2.jpg'

        },
        {
          label: 'Orlando Diggs',
          avater: '/assets/avater3.jpg'

        },
        {
          label: 'Andi Lane',
          avater: '/assets/avater4.jpg'

        },
        {
          label: 'Kate Morrison',
          avater: '/assets/avater5.jpg'

        },
        {
          label: 'Koray Okumus',
          avater: '/assets/avater6.jpg'

        }
      ]
    }
  ]

  const drawerContent = (
    <Box sx={{ p: 2 }}> {/* This is the main container for the entire sidebar */}
      {
        rightBarContent.map((item, index) => (
          <Box key={index}> {/* This is a container for each section */}
            <Typography style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.title}</Typography>
            <List sx={{ position: 'relative' }}>
              {item.data.map((data, dataIndex) => (
                <ListItem key={
                  dataIndex
                }> {/* Repeat this for each item in the section */}
                  <Avatar style={{ width: '24px', height: '24px', backgroundColor: dataIndex % 2 === 0 ? '#F7F9FB' : '#E3F5FF', padding: item.title === 'Notifications' && 4 }} src={data.avater} />

                  <Box sx={{ ml: 1 }}>
                    <Typography
                      style={{
                        fontSize: "14px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "200px", // ⬅ adjust based on your layout
                      }}
                    >
                      {data.label}
                    </Typography>
                    <Typography color="text.secondary" style={{ fontSize: '12px' }}>{data.time}</Typography>
                  </Box>
                  {
                    item.title === 'Activities' && item.data.length - 1 !== dataIndex && <Box sx={{ width: 2, height: 20, backgroundColor: '#e5e5e5', position: 'absolute', left: 27, bottom: -10, }}></Box>
                  }
                </ListItem>
              ))}
            </List>
          </Box>
        ))
      }
    </Box >
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <Drawer
        variant="persistent"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "none", sm: "block" },
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          overflow: "auto",
        }}
      >
        {drawerContent}
      </Drawer>

    </>
  );
}

export default Rigthbar