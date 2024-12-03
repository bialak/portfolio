import "@/app/globals.css";
import MainSection from "@/components/MainSection";
import ProjectsBar from "@/components/ProjectsBar";
import ToolBar from "@/components/ToolBar";
import UpperBar from "@/components/UpperBar";
import { Widgets } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { red } from "@mui/material/colors";

export const metadata = {
  title: "Portfolio",
  description: "Here you will learn a few things about me and my projects",
};

export default function Home() {
  return (
    <Grid
      container
      direction={"column"}
      wrap={"nowrap"}
      sx={{ width: "100%", height: "100%", backgroundColor: "#0d1116" }}
    >
      <Grid
        item
        sx={{
          backgroundColor: "#0d1116",
          borderBottom: "solid 0.2px rgba(204, 204, 204, 0.5)",
        }}
        xs="auto"
      >
        <UpperBar />
      </Grid>
      <Grid
        container
        sx={{
          height: "100%",
          width: "100%",
        }}
        item
        wrap="nowrap"
      >
        <Grid
          item
          sx={{
            borderRight: "1px solid rgba(157, 157, 157, 0.25)",
            width: "55px",
            height: "100%",
          }}
          xs="auto"
        >
          <ToolBar />
        </Grid>
        <Grid container direction={"column"} wrap={"wrap"} sx={{}} item>
          <Grid
            item
            xs="auto"
            sx={{
              borderBottom: "2px solid rgba(157, 157, 157, 0.25)",
            }}
          >
            <ProjectsBar />
          </Grid>
          <Grid item xs>
            <MainSection />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
