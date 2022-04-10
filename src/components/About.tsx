import React, { ReactChild } from "react";
import type { NextComponentType } from "next";
import { Grid, Typography, Box, Button } from "@mui/material";
import Card from "./Card";
import Image from "next/image";

const CustomButton = (props: {
  disabled?: boolean;
  action?: () => void;
  children?: ReactChild;
}) => (
  <Box
    sx={{
      border: `1px solid ${
        props.disabled ? "rgba(0, 0, 0, 0.0)" : "rgba(0, 0, 0, 0.0)"
      }`,
      "&:hover": {
        border: `1px solid ${
          props.disabled ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.6)"
        }`,
      },
      color: props.disabled ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.6)",
      borderRadius: 2,
      paddingY: 1,
      paddingX: 2,
      cursor: "pointer",
    }}
    onClick={props.action}
    {...props}
  >
    {props.children}
  </Box>
);

const About: NextComponentType = () => {
  const [activeFirm, setActiveFirm] = React.useState(1);
  const firms = ["dineout", "adobe"];
  return (
    <Grid id="aboutpage" container sx={{ marginBottom: 4 }} spacing={4}>
      <Grid item xs={12} md={6}>
        <Card>
          <Image
            src="/images/ls_avatar.png"
            width={59}
            height={77}
            alt="Avatar"
          />
          <Typography variant="h4" component="h1" gutterBottom>
            Lakshay Singh
          </Typography>
          <Typography variant="body1" component="h1" gutterBottom>
            a passionate designer focused on producing valuable design. I love
            listening to people and solving their problem, so much that I
            decided to make a career out of it.
          </Typography>
        </Card>
        <Card>
          <Typography variant="h4" component="h1" gutterBottom>
            Things I usually do
          </Typography>
          <Typography variant="body1" component="h1" gutterBottom>
            I am always ready to accept new challenges and push my limits. I
            have worked from nascent startups to companies and believe in
            learing from practical applications.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <CustomButton>Touch Design</CustomButton>
            <CustomButton>Music composition</CustomButton>
            <CustomButton>Product Design</CustomButton>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Card bg="/images/map.png" sx={{ height: 240 }}>
              <Typography variant="h5" component="h1" gutterBottom></Typography>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <Box>
                <Typography variant="h5" component="h1">
                  Status
                </Typography>
                <Typography variant="subtitle1" component="h1" gutterBottom>
                  Available
                </Typography>
              </Box>
              <Box sx={{ marginY: 4 }}>
                <Typography variant="overline" component="span">
                  Last Worked
                </Typography>
                <Typography variant="h5" component="h1">
                  Product Design Intern
                </Typography>
                <Typography variant="subtitle2" component="h1" gutterBottom>
                  Dineout
                </Typography>
              </Box>
              <CustomButton>Resume</CustomButton>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Card>
              <Typography variant="h5" component="h1" gutterBottom>
                Firms I worked with
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "center", marginY: 2 }}
              >
                <Image
                  src={`/images/${firms[activeFirm]}.png`}
                  width={150}
                  height={40}
                  alt={firms[activeFirm]}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <CustomButton
                  action={() => setActiveFirm((n) => (n > 0 ? n - 1 : 0))}
                  disabled={activeFirm === 0}
                >{`<`}</CustomButton>
                <CustomButton
                  action={() =>
                    setActiveFirm((n) =>
                      n < firms.length - 1 ? n + 1 : firms.length - 1
                    )
                  }
                  disabled={activeFirm === firms.length - 1}
                >{`>`}</CustomButton>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <a href={"https://www.linkedin.com/in/lakshya-singh-3ab34a174/"}>
              <Card
                sx={{
                  height: 240,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/linkedin.png"
                  width={72}
                  height={72}
                  alt="LinkedIn"
                />
              </Card>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
