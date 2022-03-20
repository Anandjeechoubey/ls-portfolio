import React from "react";
import type { NextComponentType } from "next";
import { Grid, Typography, Box } from "@mui/material";
import Card from "./Card";

const Extra: NextComponentType = () => {
  return (
    <Grid container sx={{ marginTop: 4 }} spacing={4}>
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
