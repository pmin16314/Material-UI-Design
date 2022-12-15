import { Box } from "@mui/system";
import React from "react";

const RightBar = () => {
  return (
    <Box
      sx={{
        p: 2,
        flex: 2,
        bgcolor: "red",
        display: { xs: "none", sm: "block" },
      }}>
      RightBox
    </Box>
  );
};

export default RightBar;
