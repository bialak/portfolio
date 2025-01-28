"use client";
import { useRouter } from "next/navigation";
import Grid from "@mui/material/Grid";
import Image from "next/image";

interface ProjectsTabProps {
  projectName: string;
  icon: JSX.Element;
  isActive: boolean;
}

export default function ProjectsTab({
  projectName,
  icon,
  isActive,
}: ProjectsTabProps) {
  const router = useRouter();

  function handleClick() {
    router.push(`/${projectName}`);
  }

  return (
    <Grid
      container
      onClick={handleClick}
      gap={"5px"}
      sx={{
        color: "rgb(134, 134, 134)",
        cursor: "pointer",
        border: "1px solid rgba(157, 157, 157, 0.25)",
        height: "100%",
        padding: "10px 15px",
        fontSize: "13px",
        marginRight: "3px",
        position: "relative",
        borderBottom: isActive ? "none" : "1px solid rgba(157, 157, 157, 0.25)",
        borderTop: isActive
          ? "2px solid #0078d4"
          : "1px solid rgba(157, 157, 157, 0.25)",
        "&:hover": {
          backgroundColor: "#1f1f1f",
          "& img": {
            opacity: 1,
          },
        },
      }}
    >
      <Grid item>{icon}</Grid>
      <Grid item>{projectName}</Grid>
      <Grid
        item
        sx={{
          "& img": {
            opacity: 0,
            transition: "opacity 0.3s ease",
            position: "absolute",
            right: "4px",
          },
        }}
      >
        <Image
          alt="Close Icon"
          src="/svgs/closeIcon.svg"
          width={15}
          height={15}
        />
      </Grid>
    </Grid>
  );
}
