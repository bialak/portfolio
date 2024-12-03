"use client";

import { createTheme } from "@mui/material/styles";
import "@/app/globals.css";

const theme = createTheme({
  palette: {
    background: {
      default: "#0d1116",
    },
    primary: {
      main: "#a2d2fa",
      dark: "#0e728c",
    },
  },
});

export default theme;
