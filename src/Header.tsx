import React, { useState, useEffect } from "react";
import type { NextComponentType } from "next";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { isBrowser } from "react-device-detect";
import Image from "next/image";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  activeTab?: number;
  setActiveTab: (tab: number) => void;
}

function ElevationScroll(props: any) {
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
const Header = (props: Props) => {
  // const [width, setWidth] = useState<number>(
  //   typeof window !== "undefined" ? window.innerWidth : 0
  // );

  // function handleWindowSizeChange() {
  //   setWidth(window.innerWidth);
  // }
  // useEffect(() => {
  //   window.addEventListener("resize", handleWindowSizeChange);
  //   return () => {
  //     window.removeEventListener("resize", handleWindowSizeChange);
  //   };
  // }, []);
  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  return (
    <React.Fragment>
      {/* <Box className="flex justify-center w-full"> */}
      {isBrowser ? (
        <React.Fragment>
          <AppBar
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#F6F2F2",
              color: "black",
              paddingY: "28px",
              paddingX: "96px",
            }}
          >
            <Image
              src={"/images/Lakshya.png"}
              width={121}
              height={26}
              alt="Lakshya"
            />
            <Box
              sx={{
                backgroundColor: "rgba(0,0,0,0.05)",
                paddingX: "6px",
                paddingY: "6px",
                gap: "16px",
                borderRadius: "12px",
              }}
              className="flex bg-gray-400"
            >
              <Typography
                sx={{
                  background: `${
                    props.activeTab === 0 ? "white" : "rgba(0,0,0,0)"
                  }`,
                  paddingX: "12px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  // fontSize: "16px",
                  // marginBottom: "0px",
                  "&:hover": {
                    color: "rgba(0,0,0,0.5)",
                  },
                }}
                onClick={() => props.setActiveTab(0)}
                variant="h6"
                component="div"
              >
                All
              </Typography>
              <Typography
                sx={{
                  background: `${
                    props.activeTab === 1 ? "white" : "rgba(0,0,0,0)"
                  }`,
                  paddingX: "12px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "rgba(0,0,0,0.5)",
                  },
                }}
                onClick={() => props.setActiveTab(1)}
                variant="h6"
                component="div"
              >
                About
              </Typography>
              <Typography
                variant="h6"
                onClick={() => props.setActiveTab(2)}
                sx={{
                  background: `${
                    props.activeTab === 2 ? "white" : "rgba(0,0,0,0)"
                  }`,
                  //   background: "rgba(0,0,0,0.1)",
                  paddingX: "12px",
                  borderRadius: "12px",
                  cursor: "pointer",
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
                    props.activeTab === 3 ? "white" : "rgba(0,0,0,0)"
                  }`,
                  paddingX: "12px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "rgba(0,0,0,0.5)",
                  },
                }}
                onClick={() => props.setActiveTab(3)}
                component="div"
              >
                Extra
              </Typography>
            </Box>
            <Typography variant="h6" component="div">
              Contact
            </Typography>
          </AppBar>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <AppBar
            sx={{
              background: "white",
              color: "black",
              paddingY: "28px",
              paddingX: "96px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" component="div">
                Lakshya Singh
              </Typography>
              <Typography variant="h6" component="div">
                Contact
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "16px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(0,0,0,0.05)",
                  paddingX: "6px",
                  paddingY: "6px",
                  borderRadius: "12px",
                }}
                className="flex bg-gray-400"
              >
                <Typography
                  sx={{
                    background: `${
                      props.activeTab === 0 ? "white" : "rgba(0,0,0,0)"
                    }`,
                    paddingX: "12px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "rgba(0,0,0,0.5)",
                    },
                  }}
                  onClick={() => props.setActiveTab(0)}
                  variant="h6"
                  component="div"
                >
                  All
                </Typography>
                <Typography
                  sx={{
                    background: `${
                      props.activeTab === 1 ? "white" : "rgba(0,0,0,0)"
                    }`,
                    paddingX: "12px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "rgba(0,0,0,0.5)",
                    },
                  }}
                  onClick={() => props.setActiveTab(1)}
                  variant="h6"
                  component="div"
                >
                  About
                </Typography>
                <Typography
                  variant="h6"
                  onClick={() => props.setActiveTab(2)}
                  sx={{
                    background: `${
                      props.activeTab === 2 ? "white" : "rgba(0,0,0,0)"
                    }`,
                    //   background: "rgba(0,0,0,0.1)",
                    paddingX: "12px",
                    borderRadius: "12px",
                    cursor: "pointer",
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
                      props.activeTab === 3 ? "white" : "rgba(0,0,0,0)"
                    }`,
                    paddingX: "12px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "rgba(0,0,0,0.5)",
                    },
                  }}
                  onClick={() => props.setActiveTab(3)}
                  component="div"
                >
                  Extra
                </Typography>
              </Box>
            </Box>
          </AppBar>
        </React.Fragment>
      )}
      {/* </Box> */}
    </React.Fragment>
  );
};

export default Header;
