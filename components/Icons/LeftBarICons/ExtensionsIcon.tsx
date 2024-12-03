import React from "react";
import { Tooltip, Box } from "@mui/material";

interface ExtensionIconProps {
  active: boolean;
  handleClick: () => void;
}

export default function ExtensionsIcon({
  active,
  handleClick,
}: ExtensionIconProps) {
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
      title="Delete"
    >
      <Box
        className={active ? "active icon-container" : "icon-container"}
        onClick={handleClick}
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
          <path d="M666-440 440-666l226-226 226 226-226 226Zm-546-80v-320h320v320H120Zm400 400v-320h320v320H520Zm-400 0v-320h320v320H120Zm80-480h160v-160H200v160Zm467 48 113-113-113-113-113 113 113 113Zm-67 352h160v-160H600v160Zm-400 0h160v-160H200v160Zm160-400Zm194-65ZM360-360Zm240 0Z" />
        </svg>
      </Box>
    </Tooltip>
  );
}
