import { Box } from "@mui/material";
import React from "react";

const SideBar = () => {
  return (
    <Box
      sx={{
        p: 2,
        flex: 1,
        bgcolor: "yellow",
        display: { xs: "none", sm: "block" },
      }}>
      SideBar
    </Box>
  );
};

export default SideBar;
