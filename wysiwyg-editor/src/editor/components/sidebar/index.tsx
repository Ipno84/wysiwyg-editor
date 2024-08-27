import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid/Grid";
import React, { PropsWithChildren } from "react";

const Sidebar: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid item sx={{ height: "100%", width: 300 }}>
      <Box bgcolor={"#f3f3f3"} p={2} sx={{ height: "100%", overflow: "auto" }}>
        {children}
      </Box>
    </Grid>
  );
};

export { Sidebar };
