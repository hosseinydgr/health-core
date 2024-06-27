"use client";

import { createTheme } from "@mui/material";

export const THEME = createTheme({
  palette: {
    primary: {
      main: "#60A5FA",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: `"Yekan Bakh", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
      styleOverrides: {
        root: {
          borderRadius: 21,
          padding: "10px 16px",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        InputProps: {
          sx: { borderRadius: 21, backgroundColor: "white", paddingX: "16px" },
        },
      },
      styleOverrides: {
        root: {
          borderRadius: 21,
          //   padding: "10px 16px",
        },
      },
    },
  },
});
