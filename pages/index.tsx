import * as React from "react";
import type { NextPage } from "next";
import { Grid, Container, Typography, Box } from "@mui/material";
import Header from "../src/Header";
import Card from "../src/components/Card";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Extra from "../src/components/Extra";

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = React.useState("all");
  return (
    <Container maxWidth="lg" sx={{ paddingBottom: "96px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      </Box>
      <About />
      <Projects />
      <Extra />
    </Container>
  );
};

export default Home;
