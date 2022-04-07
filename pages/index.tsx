import * as React from "react";
import type { NextPage } from "next";
import {
  // Grid,
  Container,
  // Typography,
  Box,
} from "@mui/material";
import Header from "../src/Header";
// import Card from "../src/components/Card";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Extra from "../src/components/Extra_";

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <Box sx={{ background: "#F6F2F2" }}>
      <Container
        id="index-container"
        maxWidth="lg"
        sx={{
          paddingY: 24,
          background: "#F6F2F2",
          width: "100vw",
          marginX: "auto",
          minHeight: "100vh",
        }}
      >
        <Box
          // maxWidth="lg"
          sx={{
            // maxWidth: "lg",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        </Box>
        {activeTab === 0 || activeTab === 1 ? <About /> : null}
        {activeTab === 0 || activeTab === 2 ? <Projects /> : null}
        {activeTab === 0 || activeTab === 3 ? <Extra /> : null}
      </Container>
    </Box>
  );
};

export default Home;
