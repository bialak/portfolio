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
            active ? " leftBarIcon explorer active" : "leftBarIcon explorer"
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width="30"
          height="30"
          fill="currentColor"
        >
          <path d="M796-121 533-384q-30 26-69.96 40.5Q423.08-329 378-329q-108.16 0-183.08-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.13-57.5Q572-504 572-585t-56.87-138.5Q458.25-781 377-781q-82.08 0-139.54 57.5Q180-666 180-585t57.46 138.5Q294.92-389 377-389Z" />
        </svg>
      </Box>
    </Tooltip>
  );
}
