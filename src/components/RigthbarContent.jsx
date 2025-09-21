import { Avatar, Box, List, ListItem, Typography } from '@mui/material';
import React from 'react'

const RigthbarContent = () => {
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
  return (
    <Box sx={{ p: 2 }}>
      {rightBarContent.map((item, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: 14, fontWeight: "bold", mb: 1 }}>
            {item.title}
          </Typography>
          <List>
            {item.data.map((data, dataIndex) => (
              <ListItem key={dataIndex}>
                <Avatar
                  src={data.avater}
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: dataIndex % 2 === 0 ? "#F7F9FB" : "#E3F5FF",
                  }}
                />
                <Box sx={{ ml: 1 }}>
                  <Typography sx={{ fontSize: 14, maxWidth: 200 }} noWrap>
                    {data.label}
                  </Typography>
                  {data.time && (
                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                      {data.time}
                    </Typography>
                  )}
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
}

export default RigthbarContent