import { Box, Tooltip } from "@mui/material";

interface SearchIconProps {
  active: boolean;
  handleClick: () => void;
}
export default function SearchIcon({ active, handleClick }: SearchIconProps) {
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
      title="Projects"
    >
      <Box
        onClick={handleClick}
        className={active ? "active icon-container" : "icon-container"}
      >
        <svg
          className={
            active ? " leftBarIcon search active" : "leftBarIcon search"
          }
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z" />
        </svg>
      </Box>
    </Tooltip>
  );
}
