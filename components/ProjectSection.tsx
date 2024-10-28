"use client";
import { ThemeProvider, CssBaseline, useTheme } from "@mui/material";
import React from "react";
import theme from "@/app/theme";
import Image from "next/image";
import {
  gamesCrud,
  countriesAndCapitals,
  pawsBaner,
  weatherForecast,
} from "@/gifs/index";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box, Grid } from "@mui/material";
import Link from "next/link";

export default function ProjectSection() {
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
        <h1
          className="tileOfProject"
          style={{
            backgroundColor: colorOfBackground,
            color: primaryColor,
            textAlign: "center",
            textTransform: "uppercase",
            marginBottom: "10%",
          }}
        >
          Here I present the projects I have done
        </h1>
        <Box>
          <Grid
            container
            rowSpacing={1}
            direction="column"
            wrap="nowrap"
            alignItems={"center"}
            sx={{
              height: "400vh",
              bgcolor: "#0d1116",
              justifyContent: "space-between",
              color: primaryColor,
            }}
            spacing={12}
          >
            <Grid xs={6}>
              <Item style={{ color: primaryColor }}>
                <Image
                  src={pawsBaner}
                  width={800}
                  height={600}
                  alt="paws baner gif"
                />
                <div>Dog Slider</div>
                <Link
                  style={{ marginRight: 10 }}
                  href={"https://github.com/bialak/dog-slider"}
                >
                  View Code
                </Link>
                <Link
                  style={{ marginLeft: 10 }}
                  href={"https://bialak.github.io/dog-slider/"}
                >
                  View Demo
                </Link>
                <div>
                  I created the dog slider project as one of my first projects.
                  I had a lot of fun making it, experimenting with animations,
                  and discovering the possibilities of programming itself. The
                  banner was developed using pure Vanilla JS.
                </div>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item style={{ color: primaryColor }}>
                <Image
                  src={gamesCrud}
                  width={800}
                  height={600}
                  alt="games crud gif"
                />
                <div> Games Crud</div>
                <Link
                  style={{ marginRight: 10 }}
                  href={"https://github.com/bialak/game-crud"}
                >
                  View Code
                </Link>
                <Link
                  style={{ marginLeft: 10 }}
                  href={"https://games-to-play.netlify.app/"}
                >
                  View Demo
                </Link>
                <div>
                  I made the Games Crud project relatively recently. I created
                  the site by setting up my own database locally on my computer.
                  It was a new and exciting experience for me. The project
                  allowed me to better understand the communication between the
                  server and the client. In Games Crud, I used technologies such
                  as Next.js, React, and Prisma.
                </div>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item style={{ color: primaryColor }}>
                <Image
                  src={weatherForecast}
                  width={800}
                  height={600}
                  alt="weather forecast gif"
                />
                <div>Weather Forecast </div>
                <Link
                  style={{ marginRight: 10 }}
                  href={"https://github.com/bialak/weather"}
                >
                  View Code
                </Link>
                <Link
                  style={{ marginLeft: 10 }}
                  href={"https://bialak.github.io/weather/"}
                >
                  View Demo
                </Link>
                <div>
                  When I was working on a weather forecast project, I wanted to
                  use an external API. I wanted to see how I could retrieve data
                  and how I could manipulate it. In the project, I used
                  technologies such as React.
                </div>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item style={{ color: primaryColor }}>
                <Image
                  src={countriesAndCapitals}
                  width={800}
                  height={600}
                  alt="countries and capitals gif"
                />
                <div>Countries and Capitals Game</div>
                <Link
                  style={{ marginRight: 10 }}
                  href={"https://github.com/bialak/countries-and-capitals"}
                >
                  View Code
                </Link>
                <Link
                  style={{ marginLeft: 10 }}
                  href={"https://bialak.github.io/countries-and-capitals/"}
                >
                  View Demo
                </Link>
                <div></div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}
