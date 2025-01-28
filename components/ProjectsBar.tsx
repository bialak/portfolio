"use client";

import React from "react";
import { Grid } from "@mui/material";
import ProjectsTab from "./ProjectsTab";
import Image from "next/image";
import { useParams } from "next/navigation";
// import { useRouter } from "next/router";

export default function ProjectsBar() {
  const params = useParams();
  const activeTab = params.projectName;

  return (
    <Grid container>
      <Grid item>
        <ProjectsTab
          projectName="dog-slider.js"
          isActive={"dog-slider.js" === activeTab}
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
        />
      </Grid>

      <Grid item>
        <ProjectsTab
          projectName="weather.tsx"
          isActive={"weather.tsx" === activeTab}
          icon={
            <Image
              alt=" svg"
              src={"/svgs/reactICon.svg"}
              width={15}
              height={15}
            />
          }
        />
      </Grid>

      <Grid item>
        <ProjectsTab
          projectName="countries-and-capitals.tsx"
          isActive={"countries-and-capitals.tsx" === activeTab}
          icon={
            <Image
              alt=" svg"
              src={"/svgs/reactICon.svg"}
              width={15}
              height={15}
            />
          }
        />
      </Grid>

      <Grid item>
        <ProjectsTab
          projectName="games-crud.tsx"
          isActive={"games-crud.tsx" === activeTab}
          icon={
            <Image
              alt=" svg"
              src={"/svgs/reactICon.svg"}
              width={15}
              height={15}
            />
          }
        />
      </Grid>
      <Grid
        item
        xs
        sx={{
          borderBottom: "1px solid rgba(157, 157, 157, 0.25)",
        }}
      ></Grid>
    </Grid>
  );
}
