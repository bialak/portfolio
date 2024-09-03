"use client";
import { Tooltip, Box } from "@mui/material";
import "@/app/globals.css";

interface ExplorerIconProps {
  active: boolean;
  handleClick: () => void;
}

const ExplorerIcon = ({ active, handleClick }: ExplorerIconProps) => {
  return (
    <Tooltip
      disableFocusListener
      arrow
      PopperProps={{
        sx: {
          "& .MuiTooltip-tooltip": {
            backgroundColor: "#1f1f1f",
            border: "0.1px solid rgb(134, 134, 134);",
          },
          "& .MuiTooltip-arrow::before": {
            backgroundColor: "#1f1f1f",
            border: "1px solid rgb(134, 134, 134);",
          },
        },
      }}
      placement="right"
      title="About Me"
    >
      <Box
        onClick={handleClick}
        className={active ? "active icon-container" : "icon-container"}
      >
        <svg
          className={
            active ? " leftBarIcon explorer active" : "leftBarIcon explorer"
          }
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z" />
        </svg>
      </Box>
    </Tooltip>
  );
};

export default ExplorerIcon;
