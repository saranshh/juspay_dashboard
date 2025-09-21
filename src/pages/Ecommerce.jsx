import React from 'react'
import StatComponent from '../components/StatComponent'
import { Box, Divider, Grid, LinearProgress, Paper, Typography, useTheme } from '@mui/material'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { BarChart, LineChart, PieChart } from '@mui/x-charts';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Ecommerce = () => {
  const theme = useTheme();
  const stats = [
    {
      title: "Customers",
      value: "3,781",
      change: "+11.01%",
      positive: true,
      bg: "#E6F7FF",
    },
    {
      title: "Orders",
      value: "1,219",
      change: "-0.03%",
      positive: false,
      bg: "#F9F9F9",
    },
    {
      title: "Revenue",
      value: "$695",
      change: "+15.03%",
      positive: true,
      bg: "#F9F9F9",
    },
    {
      title: "Growth",
      value: "30.1%",
      change: "+6.08%",
      positive: true,
      bg: "#F0F4FF",
    },
  ];

  const prevData = [20, 30, 30, 35, 40, 30, 30];
  const currData = [24, 13, 28, 39, 28, 38, 35];
  const xLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul'
  ];
  const yLabels = [
    '0M',
    '10M',
    '20M',
    '30M'
  ].reverse();

  const progressData = [
    {
      cityName: 'New York',
      progessValue: 72,
      label: '72k'
    },
    {
      cityName: 'San Francisco',
      progessValue: 39,
      label: '39k'
    },
    {
      cityName: 'Sydney',
      progessValue: 25,
      label: '25k'
    },
    {
      cityName: 'Singapore',
      progessValue: 61,
      label: '61k'
    }
  ]

  const saleData = [
    { label: 'Direct', value: 300.56, color: '#1C1C1C' },
    { label: 'Affiliate', value: 135.18, color: '#BAEDBD' },
    { label: 'Sponsored', value: 154.02, color: '#95A4FC' },
    { label: 'E-mail', value: 48.96, color: '#B1E3FF' },
  ];

  const seriesA = {
    data: [15, 23, 10, 20, 5, 7, 19],
    label: 'Projections',
    color: '#A8C5DA'
  };
  const seriesB = {
    data: [8, 5, 4, 8, 10, 6, 9],
    label: 'Actuals',
    color: '#a8c5da96'
  };


  const settings = {
    width: 180,
    height: 180,
    hideLegend: true,
  };

  return (
    <>
      <Typography style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: 20 }} sx={{ color: "text.primary" }}>E-commerce Dashboard</Typography>

      <Grid container spacing={2}>
        <Grid container spacing={2} size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          {
            stats.map((item, index) => (
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} key={index}>
                <StatComponent
                  title={item.title}
                  value={item.value}
                  percentage={item.change}
                  bgColor={item.bg}
                  icon={item.positive ? <TrendingUpIcon sx={{ scale: 0.7, color: (item.title === 'Customers' || item.title === 'Growth') && 'black' }} /> : <TrendingDownIcon sx={{ scale: 0.7, color: (item.title === 'Customers' || item.title === 'Growth') && 'black' }} />} />
              </Grid>
            ))
          }
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Paper>
            <Typography style={{ fontSize: '14px', fontWeight: 'bold', padding: 20 }}>Projections vs Actuals</Typography>

            <BarChart
              height={200}
              series={[
                { ...seriesA, stack: 'total' },
                { ...seriesB, stack: 'total' },
              ]}
              hideLegend={true}
              borderRadius={5}
              xAxis={[
                {
                  data: xLabels,
                  barGapRatio: 0.3,
                  categoryGapRatio: 0.6,
                },
              ]}
              yAxis={[
                {
                  data: yLabels,
                  valueFormatter: (value) => `${value}M`, 
                  min: 0,
                  max: 30, 
                  tickNumber: 3,
                },
              ]}
            />
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ alignItems: "stretch", pb: 2 }} >
        <Grid size={{ xs: 12, sm: 12, md: 9, lg: 9 }}>
          <Paper style={{ marginTop: 20 }} sx={{ bgcolor: "background.card", height: "100%" }}>
            <Box sx={{ padding: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
              <Typography style={{ fontSize: '14px', fontWeight: 'bold' }}>Revenue</Typography>
              <Divider orientation="vertical" flexItem />

              <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 1 }}>
                <Box sx={{ height: 10, width: 10, backgroundColor: '#A8C5DA', borderRadius: '50%' }}></Box>
                <Typography style={{ fontSize: 12 }}>Current Week</Typography>
                <Typography style={{ fontSize: 12, fontWeight: 'bold' }}>${currData.reduce((a, b) => a + b, 0)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 1 }}>
                <Box sx={{ height: 10, width: 10, backgroundColor: '#000', borderRadius: '50%' }}></Box>
                <Typography style={{ fontSize: 12 }}>Previous Week</Typography>
                <Typography style={{ fontSize: 12, fontWeight: 'bold' }}>${prevData.reduce((a, b) => a + b, 0)}</Typography>
              </Box>
            </Box>
            <LineChart
              series={[
                { curve: "catmullRom", data: currData, color: '#A8C5DA', showMark: false },
                { curve: "catmullRom", data: prevData, color: theme.palette.text.secondary, showMark: false },
              ]}
              height={330}
              xAxis={[{ scaleType: 'point', data: xLabels }]}
              yAxis={[
                {
                  valueFormatter: (value) => `${value}M`, 
                  min: 0,
                  max: 50, 
                  tickNumber: 4, 
                },
              ]}
            />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3 }} columnSpacing={2}>
          <Paper sx={{ bgcolor: "background.card" }} style={{ marginTop: 20, padding: 10, display: 'flex', flexDirection: 'column', gap: 20, height: "100%" }}>
            <Typography style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'center', padding: 10 }}>Revenue by Location</Typography>
            <img src='/assets/world_map.svg' alt='world_map' style={{ width: '100%', height: '100%', display: 'flex', alignSelf: 'center' }} />
            <Box sx={{ padding: 0.5 }}>
              {
                progressData.map((item, index) => (
                  <>
                    <Box sx={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: '20px'
                    }}>
                      <Typography style={{ fontSize: '12px' }}>{item.cityName}</Typography>
                      <Typography style={{ fontSize: '12px' }}>{item.label}</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={item.progessValue} style={{ height: 2 }} />
                  </>
                ))
              }
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ alignItems: "stretch", pb: 2 }}>
        <Grid size={{ xs: 12, sm: 12, md: 9, lg: 9 }}>
          <Paper sx={{ bgcolor: "background.card" }} style={{ marginTop: 20, padding: 20, height: "100%" }}>
            <Typography style={{ fontSize: '14px', fontWeight: 'bold' }}>Top Selling Products</Typography>
            <BasicTable />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
          <Paper sx={{ bgcolor: "background.card" }} style={{ marginTop: 20, padding: 10, display: 'flex', flexDirection: 'column', height: "100%" }}>
            <Typography style={{ fontSize: '14px', fontWeight: 'bold' }}>Total Sales</Typography>
            <Box sx={{ padding: 0.5 }}>
              <PieChart
                series={[{ innerRadius: 50, outerRadius: 80, data: saleData }]}
                {...settings}
              />
              {
                saleData.map((item, index) => (
                  <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: '10px', padding: 0.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ height: 10, width: 10, backgroundColor: item.color, borderRadius: '50%' }}></Box>
                      <Typography>{item.label}</Typography>
                    </Box>
                    <Typography>${item.value}</Typography>
                  </Box>
                ))
              }
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>

  )
}

export default Ecommerce



function BasicTable() {
  function createData(name, price, quantity, amount) {
    return { name, price, quantity, amount };
  }

  const rows = [
    createData('ASOS Ridley High Waist', 79.49, 26, 1453.51),
    createData('Marco Lightweight Shirt', 128.05, 29, 2814.54),
    createData('Half Sleeve  Shirt', 39.95, 16, 3048.16),
    createData('Lightweight Jacket', 49.9, 37, 1648.64),
    createData('Marco Shoes', 159.64, 10, 1596.4),
  ];
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">Quantity</TableCell>
          <TableCell align="right">Amount</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{
              '& td, & th': { borderBottom: 'none', paddingY: 1.5 },
            }}          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">${row.price}</TableCell>
            <TableCell align="right">{row.quantity}</TableCell>
            <TableCell align="right">${row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
