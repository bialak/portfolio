import React from "react";
import Typewriter from "./Typewriter";
import Image from "next/image";
import women from "@/public/svgs/women.png";
import { Grid } from "@mui/material";

export default function WelcomeSection() {
  return (
    <>
      <Grid
        container
        display={"flex"}
        sx={{
          height: "100%",
          width: "100%",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item width={"50%"}>
          <Typewriter
            text="Hello, My name is Klaudia Biała"
            delay={100}
          ></Typewriter>
        </Grid>
        <Grid item>
          <Image
            className="women"
            alt="women"
            width={400}
            height={400}
            src={women}
          ></Image>
        </Grid>
      </Grid>
    </>
  );
}
