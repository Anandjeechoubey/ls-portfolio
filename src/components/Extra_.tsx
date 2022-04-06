import React from "react";
import type { NextComponentType } from "next";
import { Grid, Typography, Box } from "@mui/material";
import Card from "./Card";
import MaterialUISwitch from "./DisplayModeSwitch";
import Image from "next/image";
import Link from "next/link";

const Extra: NextComponentType = () => {
  return (
    <>
      <Grid container sx={{ marginBottom: 4 }} spacing={4}>
        <Grid item xs={6} md={3}>
          <Card sx={{ height: 240 }} bg="/images/cool-stuff.png"></Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card
            sx={{
              height: 240,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Image
              src="/images/spotify.png"
              width={50}
              height={50}
              alt="Instagram"
            />
            <Box>
              <Typography variant="subtitle1" component="subtitle1">
                Offline, Last Played
              </Typography>
              <Typography variant="body1" component="h1">
                Self Discovery
              </Typography>
              <Typography variant="body1" component="h1" gutterBottom>
                Habe
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <a href={"https://www.instagram.com/without.a.lakshya/"}>
            <Card
              sx={{
                height: 240,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/images/insta.png"
                width={72}
                height={72}
                alt="Instagram"
              />
            </Card>
          </a>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card
            sx={{
              height: 240,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialUISwitch />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Extra;
