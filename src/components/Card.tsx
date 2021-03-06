import React, { ReactComponentElement } from "react";
import { Box } from "@mui/material";

type Props = {
  children: any;
  bg?: string;
  sx?: any;
};
const Card = ({ children, bg, sx }: Props) => {
  return (
    <Box
      sx={{
        padding: `${bg ? "0px" : "32px"}`,
        borderRadius: "32px",
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.05)",
        position: "relative",
        marginBottom: "24px",
        background: `white`,
        overflow: "hidden",
        "&:hover": {
          boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.15)",
        },
        ...sx,
      }}
    >
      {bg ? (
        <Box
          sx={{
            background: `url(${bg})`,
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transition: "all 1s",
            zIndex: "100",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        ></Box>
      ) : (
        <></>
      )}
      <Box>{children}</Box>
    </Box>
  );
};

export default Card;
