import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: { default: "#f9f9fb", paper: "#fff", card:'#F7F9FB' },
            text: { primary: "#1c1c1c", secondary: "#666" },
          }
        : {
            background: { default: "#121212", paper: "#1e1e1e" ,card:'##FFFFFF0D'},
            text: { primary: "#fff", secondary: "#aaa" },
          }),
    },
    typography: {
      fontFamily: "Inter, sans-serif",
    },
    shape: { borderRadius: 12 },
  });
