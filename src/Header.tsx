import React from "react";
import type { NextComponentType } from "next";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
  activeTab?: string;
  setActiveTab: (tab: string) => void;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header: NextComponentType = (props: any) => {
  const activeTab = props.activeTab;
  const setActiveTab = props.setActiveTab;
  return (
    <ElevationScroll {...props}>
      <AppBar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          color: "black",
          paddingY: "28px",
          paddingX: "96px",
        }}
      >
        {/* <Box className="flex justify-center w-full"> */}
        <Typography variant="h6" component="div">
          Lakshya Singh
        </Typography>
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.05)",
            paddingX: "6px",
            paddingY: "6px",
            gap: "16px",
            borderRadius: "4444px",
          }}
          className="flex bg-gray-400"
        >
          <Typography
            sx={{
              background: `${activeTab === "all" ? "white" : "rgba(0,0,0,0)"}`,
              paddingX: "12px",
              borderRadius: "4444px",
              "&:hover": {
                color: "rgba(0,0,0,0.5)",
              },
            }}
            onClick={() => setActiveTab("all")}
            variant="h6"
            component="div"
          >
            All
          </Typography>
          <Typography
            sx={{
              background: `${
                activeTab === "about" ? "white" : "rgba(0,0,0,0)"
              }`,
              paddingX: "12px",
              borderRadius: "4444px",
              "&:hover": {
                color: "rgba(0,0,0,0.5)",
              },
            }}
            onClick={() => setActiveTab("about")}
            variant="h6"
            component="div"
          >
            About
          </Typography>
          <Typography
            variant="h6"
            onClick={() => setActiveTab("projects")}
            sx={{
              background: `${
                activeTab === "projects" ? "white" : "rgba(0,0,0,0)"
              }`,
              //   background: "rgba(0,0,0,0.1)",
              paddingX: "12px",
              borderRadius: "4444px",
              "&:hover": {
                color: "rgba(0,0,0,0.5)",
              },
            }}
            component="div"
          >
            Projects
          </Typography>
          <Typography
            variant="h6"
            sx={{
              background: `${
                activeTab === "media" ? "white" : "rgba(0,0,0,0)"
              }`,
              paddingX: "12px",
              borderRadius: "4444px",
              "&:hover": {
                color: "rgba(0,0,0,0.5)",
              },
            }}
            onClick={() => setActiveTab("media")}
            component="div"
          >
            Media
          </Typography>
        </Box>
        <Typography variant="h6" component="div">
          Contact
        </Typography>
        {/* </Box> */}
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
