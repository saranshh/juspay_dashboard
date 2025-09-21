import { Avatar, Box, IconButton, Paper, Stack, Typography } from '@mui/material';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import React from 'react'
import SearchComponent from '../components/SearchComponent';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import ImportExportRoundedIcon from '@mui/icons-material/ImportExportRounded';
import rows from '../model/data';

const Order = () => {

  const gridApiRef = useGridApiRef();

  const columns = [
    { field: "orderId", headerName: "Order ID", flex: 1 },
    {
      field: "user",
      headerName: "User",
      flex: 1.5,
      valueGetter: (params) => params.name, // expose name for search/sort
      renderCell: (params) => {
        const user = params.row.user; // full object available here
        return (
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar
              src={user?.avatar}
              alt={user?.name}
              style={{ width: 24, height: 24 }}
            />
            <span>{user?.name}</span>
          </Stack>
        );
      },
    },
    { field: "project", headerName: "Project", flex: 1.5 },
    { field: "address", headerName: "Address", flex: 2 },
    { field: "date", headerName: "Date", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        let color = "gray";
        switch (params.value) {
          case "In Progress":
            color = "orange";
            break;
          case "Complete":
            color = "green";
            break;
          case "Pending":
            color = "blue";
            break;
          case "Approved":
            color = "teal";
            break;
          case "Rejected":
            color = "red";
            break;
          default:
            break;
        }
        return (
          <span style={{ color }}>{params.value}</span>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: '100vh' }}>
      <Typography style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: 20 }} sx={{ color: "text.primary" }}>Order List</Typography>

      <Paper
        sx={{
          marginBottom: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 1,
          padding: 1,
          bgcolor: "background.card",
        }}
      >
        {/* Left Actions */}
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1 }}>
          {/* Add new row */}
          <IconButton onClick={() => console.log("Add clicked")}>
            <AddRoundedIcon />
          </IconButton>

          {/* Toggle filter panel */}
          <IconButton onClick={() => gridApiRef.current.showFilterPanel()}>
            <FilterListRoundedIcon />
          </IconButton>

          {/* Toggle sort on first column (example) */}
          <IconButton
            onClick={() =>
              gridApiRef.current.sortColumn("orderId", "asc") // or "desc"
            }
          >
            <ImportExportRoundedIcon />
          </IconButton>
        </Box>

        {/* Right: Search */}
        <SearchComponent
          onSearch={(value) => {
            gridApiRef.current.setQuickFilterValues([value]);
          }}
        />
      </Paper>

      <div style={{ height: 'calc(100vh - 250px)', width: "100%" }}>
        <DataGrid
          apiRef={gridApiRef}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
          pageSizeOptions={[5, 10, 15]}
          checkboxSelection
          disableRowSelectionOnClick
          rowSelection
        />
      </div>
    </Box>

  )
}

export default Order