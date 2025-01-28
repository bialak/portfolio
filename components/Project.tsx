"use client";
import { Grid, useTheme, Box, ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type ProjectProps = {
  name: string;
  codeLink: string;
  demoLink: string;
  projectImage: StaticImageData;
  description: string;
};

export default function Project({
  name,
  codeLink,
  demoLink,
  projectImage,
  description,
}: ProjectProps) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    textAlign: "center",
  }));

  const theme = useTheme();

  const { main: primaryColor } = theme.palette.primary;

  const { default: colorOfBackground } = theme.palette.background;
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
          container
          display={"flex"}
          direction="column"
          wrap="nowrap"
          alignItems={"center"}
          xs
          sx={{
            height: "100%",
            width: "100%",
            bgcolor: "#0d1116",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            color: primaryColor,
          }}
        >
          <Grid xs={6}>
            <Item style={{ color: primaryColor }}>
              <Image
                src={projectImage}
                width={700}
                height={500}
                alt={{ name } + " gif"}
              />
              <div>{name}</div>
              <Link style={{ marginRight: 10 }} href={codeLink}>
                View Code
              </Link>
              <Link style={{ marginLeft: 10 }} href={demoLink}>
                View Demo
              </Link>
              <div>{description}</div>
            </Item>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
