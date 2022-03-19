import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import Header from "../src/Header";

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = React.useState("all");
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <Typography variant="h4" component="h1" className="mt-48" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <h3 className="text-5xl font-extrabold mt-12">Some testing text</h3>
        <ProTip />
        <Copyright />
        <Typography variant="h4" component="h1" gutterBottom>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
