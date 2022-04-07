import React from "react";
import type { NextComponentType } from "next";
import { Grid, Typography, Box } from "@mui/material";
import Card from "./Card";
import Image from "next/image";

const Extra: NextComponentType = () => {
  return (
    <Grid container sx={{ marginTop: 4 }} spacing={4}>
      <Grid item xs={6} md={3}>
        <Card sx={{ height: 240 }} bg="/images/cool-stuff.png" children={""} />
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
        <Card>
          <Typography variant="body1" component="h1" gutterBottom>
            `Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card>
          <Typography variant="body1" component="h1" gutterBottom>
            `Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Extra;
