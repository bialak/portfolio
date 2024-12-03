import React from "react";
import { Grid } from "@mui/material";
import ProjectsTab from "./ProjectsTab";
import Image from "next/image";

export default function ProjectsBar() {
  return (
    <Grid container>
      <Grid item>
        <ProjectsTab
          icon={
            <Image
              alt="javascript icon"
              width={100}
              height={100}
              style={{
                width: "auto",
                height: "100%",
              }}
              src={"/svgs/javascriptICon.svg"}
            />
          }
          projectName="dog-slider.js"
        />
      </Grid>
      <Grid item>
        <ProjectsTab
          icon={
            <Image
              alt=" svg"
              src={"/svgs/reactICon.svg"}
              width={15}
              height={15}
            />
          }
          projectName="weather.tsx"
        />
      </Grid>
      <Grid item>
        <ProjectsTab
          icon={
            <Image
              alt=" svg"
              src={"/svgs/reactICon.svg"}
              width={15}
              height={15}
            />
          }
          projectName="countries-and-capitals.tsx"
        />
      </Grid>
      <Grid item>
        <ProjectsTab
          icon={
            <Image
              alt=" svg"
              src={"/svgs/reactICon.svg"}
              width={15}
              height={15}
            />
          }
          projectName="games-crud.tsx"
        />
      </Grid>
    </Grid>
  );
}
