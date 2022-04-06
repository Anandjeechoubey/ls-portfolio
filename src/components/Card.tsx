import React, { ReactComponentElement } from "react";
import { Box } from "@mui/material";

type Props = {
  children: React.ReactElement;
  bg?: string;
  sx?: any;
};
const Card = ({ children, bg, sx }: Props) => {
  return (
    <Box 
      sx={{
        padding: "32px",
        borderRadius: "32px",
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
        marginBottom: "24px",
        background: `${bg ? `url(${bg})` : "white"}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Card;
