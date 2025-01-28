import React from "react";
import Typewriter from "@/components/Typewriter";
import Image from "next/image";
import women from "@/public/svgs/women.png";
import { Grid } from "@mui/material";

export default function WelcomeSection() {
  const text = `Hello, my name is Klaudia Biala. 
  
I began my journey in coding over a year ago, guided by an experienced front-end developer. During this time, I completed several courses on platforms such as Udemy, including "Web Developer from Scratch in 15 Intensive Days," "Complete JavaScript Programming Course," and "React from Scratch - Theory and Practice" by Samuraj Programowania. Additionally, I have supplemented my learning by watching tutorials from sources like Net Ninja on YouTube. Much of my knowledge has been acquired through independent research, problem-solving, and hands-on practice.
  
I have a strong interest in computer games, crime literature, manga, anime, and animal welfare. I am excited to apply my skills and passion for frontend development in a professional setting.`;

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
          <Typewriter text={text} delay={100} />
        </Grid>
        <Grid item>
          <Image
            className="women"
            alt="women"
            width={400}
            height={400}
            src={women}
          />
        </Grid>
      </Grid>
    </>
  );
}
