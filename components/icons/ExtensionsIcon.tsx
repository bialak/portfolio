"use client";

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
            active ? " leftBarIcon extensions active" : "leftBarIcon extensions"
          }
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5 1.5L15 0H22.5L24 1.5V9L22.5 10.5H15L13.5 9V1.5ZM15 1.5V9H22.5V1.5H15ZM0 15V6L1.5 4.5H9L10.5 6V13.5H18L19.5 15V22.5L18 24H10.5H9H1.5L0 22.5V15ZM9 13.5V6H1.5V13.5H9ZM9 15H1.5V22.5H9V15ZM10.5 22.5H18V15H10.5V22.5Z"
            fill="currentColor"
          />
        </svg>
      </Box>
    </Tooltip>
  );
}
