import React from "react";
import type { NextComponentType } from "next";
import { Grid, Typography, Box } from "@mui/material";
import Card from "./Card";

const Projects: NextComponentType = () => {
  return (
    <Grid container sx={{ marginTop: 4 }} spacing={4}>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Card>
            <Typography variant="h6" component="h1" gutterBottom>
              `Cras mattis consectetur purus sit amet fermentum. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et.`
            </Typography>
          </Card>
          <Card>
            <Typography variant="h6" component="h1" gutterBottom>
              `Cras mattis consectetur purus sit amet fermentum. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et.`
            </Typography>
          </Card>
        </Box>
        <Box>
          <Card>
            <Typography variant="h4" component="h1" gutterBottom>
              `Cras mattis consectetur purus sit amet fermentum. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et.`
            </Typography>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Card>
            <Typography variant="h6" component="h1" gutterBottom>
              `Cras mattis consectetur purus sit amet fermentum. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et.`
            </Typography>
          </Card>
          <Card>
            <Typography variant="h6" component="h1" gutterBottom>
              `Cras mattis consectetur purus sit amet fermentum. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et.`
            </Typography>
          </Card>
        </Box>
        <Box>
          <Card>
            <Typography variant="h4" component="h1" gutterBottom>
              `Cras mattis consectetur purus sit amet fermentum. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et.`
            </Typography>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Projects;
