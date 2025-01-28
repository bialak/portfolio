import { ThemeProvider } from "@mui/material";
import React from "react";
import theme from "@/app/theme";
import MainSection from "@/components/Sections/MainSection";
import ProjectsBar from "@/components/ProjectsBar";
import ToolBar from "@/components/ToolBar";
import UpperBar from "@/components/UpperBar";
import { Grid } from "@mui/material";

export const metadata = {
  title: "Portfolio",
  description: "here you will find out a few words about me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <ThemeProvider theme={theme}>
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
                    sx={
                      {
                        // borderBottom: "2px solid rgba(157, 157, 157, 0.25)",
                      }
                    }
                  >
                    <ProjectsBar />
                  </Grid>
                  <Grid item xs>
                    {children}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
