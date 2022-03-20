import React from "react";
import type { NextComponentType } from "next";
import { Box } from "@mui/material";

const Card: NextComponentType = ({ children }) => {
  return (
    <Box
      sx={{
        padding: "32px",
        borderRadius: "32px",
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
        marginBottom: "24px",
      }}
    >
      {children}
    </Box>
  );
};

export default Card;
