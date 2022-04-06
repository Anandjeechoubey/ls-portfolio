import React from "react";
import type { NextComponentType } from "next";
import { Grid, Typography, Box } from "@mui/material";
import Card from "./Card";
import Image from "next/image";

const Projects: NextComponentType = () => {
  return (
    <Grid container sx={{ marginBottom: 4 }} spacing={4}>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Card bg={"/images/proj1.png"}>
            <Typography
              variant="h6"
              component="h1"
              sx={{ opacity: 0 }}
              gutterBottom
            >
              `Cras mattis consectetur purus sit amet fermentum. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et.`
            </Typography>
          </Card>
          <Card bg={"/images/proj2.png"}>
            <Typography
              variant="h6"
              component="h1"
              sx={{ opacity: 0 }}
              gutterBottom
            >
              `Cras mattis consectetur purus sit amet fermentum. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et.`
            </Typography>
          </Card>
        </Box>
        <Box>
          <Card bg="/images/proj4.png">
            <Typography
              variant="h4"
              sx={{ opacity: 0 }}
              component="h1"
              gutterBottom
            >
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
          <Card bg="/images/proj6.png">
            <Typography
              variant="h6"
              component="h1"
              sx={{ opacity: 0 }}
              gutterBottom
            >
              `Cras mattis consectetur purus sit amet fermentum. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et.`
            </Typography>
          </Card>
          <Box>
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/images/behance.png"
                width={72}
                height={45}
                alt="Behance"
              />
            </Card>
            <Card bg="/images/proj3.png">
              <Typography
                variant="h6"
                component="h1"
                sx={{ opacity: 0 }}
                gutterBottom
              >
                `Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam.
              </Typography>
            </Card>
          </Box>
        </Box>
        <Box>
          <Card bg="/images/proj5.png">
            <Typography
              variant="h4"
              sx={{ opacity: 0 }}
              component="h1"
              gutterBottom
            >
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
