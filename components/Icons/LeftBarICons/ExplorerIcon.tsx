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
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="currentColor"
        >
          <path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554v-186H220v680h520v-494H551ZM220-820v186-186 680-680Z" />
        </svg>
      </Box>
    </Tooltip>
  );
};

export default ExplorerIcon;
