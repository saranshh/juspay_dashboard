import styled from '@emotion/styled';
import { alpha, InputBase } from '@mui/material';
import React from 'react'
import SearchIcon from "@mui/icons-material/Search";


const SearchComponent = ({ onSearch }) => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.text.primary, 0.04),
    "&:hover": {
      backgroundColor: alpha(theme.palette.text.primary, 0.06),
    },
    marginLeft: theme.spacing(3),
    width: "100%",
    maxWidth: 250,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.disabled,
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: "100%",
    },
  }));
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search…" onChange={(e) => onSearch(e.target.value)}/>
    </Search>
  )
}

export default SearchComponent