import { Tooltip, Box } from "@mui/material";

interface RunAndDebugIconProps {
  active: boolean;
  handleClick: () => void;
}

export default function RunAndDebugIcon({
  active,
  handleClick,
}: RunAndDebugIconProps) {
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
        onClick={handleClick}
        className={active ? "active icon-container" : "icon-container"}
      >
        <svg
          className={
            active ? "leftBarIcon explorer active" : "leftBarIcon explorer"
          }
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          width="30px"
          viewBox="0 -960 960 960"
          fill="currentColor"
        >
          <path d="M320-203v-560l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z" />
        </svg>
      </Box>
    </Tooltip>
  );
}
