import CardHeader from "@mui/material/CardHeader/CardHeader";
import React from "react";
import { Divider } from "@mui/material";

const InfoHeader: React.FC = () => {
  return (
    <>
      <CardHeader
        title="Details"
        titleTypographyProps={{ fontWeight: 700 }}
        subheader="Informations about currently selected component"
      />
      <Divider />
    </>
  );
};

export { InfoHeader };
