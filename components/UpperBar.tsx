import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Grid } from "@mui/material";

export default function UpperBar() {
  return (
    <Grid
      container
      wrap="nowrap"
      sx={{ height: "100%", width: "100%" }}
      justifyContent={"center"}
    >
      <Grid item>
        <ArrowBackIcon
          fontSize="small"
          sx={{
            color: "rgba(204, 204, 204, 0.5)",
            marginRight: "10px",
            marginTop: "6px",
          }}
        />
        <ArrowForwardIcon
          fontSize="small"
          sx={{
            color: "rgba(204, 204, 204, 0.5)",
            marginRight: "10px",
            marginTop: "6px",
          }}
        />
      </Grid>
      <Grid
        item
        xs="auto"
        wrap="nowrap"
        flexGrow={4}
        sx={{
          backgroundColor: "#ffffff0d",
          color: "#c9c7c7",
          padding: "3px 150px",
          fontSize: "12px",
          margin: "5px",
          textAlign: "center",
          border: "0.1px solid rgba(157, 157, 157, 0.25)",
          borderRadius: "5px",
        }}
      >
        Welcome
      </Grid>
    </Grid>
  );
}
