import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const StatComponent = ({ title, value, percentage, icon, bgColor }) => {
  return (
    <Paper
      sx={{
        padding: 3,
        borderRadius: 1.5,
        bgcolor: "background.card",
        backgroundColor: (title === 'Customers' || title === 'Growth') && bgColor
      }}>
      <Typography style={{ fontSize: '14px', fontWeight: 'bold', color: (title === 'Customers' || title === 'Growth') && 'black' }} >{title}</Typography>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        marginTop: 2
      }}>
        <Typography style={{ fontSize: '24px', fontWeight: 'bold', color: (title === 'Customers' || title === 'Growth') && 'black' }}>{value}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
          <Typography style={{ color: (title === 'Customers' || title === 'Growth') && 'black', fontSize: '12px' }}>{percentage}</Typography>
          {icon}
        </Box>
      </Box>
    </Paper>
  )
}

export default StatComponent