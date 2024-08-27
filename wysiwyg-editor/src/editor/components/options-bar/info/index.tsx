import Card from "@mui/material/Card/Card";
import React from "react";

import { InfoHeader } from "@/editor/components/options-bar/info/header";
import { InfoContent } from "@/editor/components/options-bar/info/content";

const Info: React.FC = () => {
  return (
    <Card>
      <InfoHeader />
      <InfoContent />
    </Card>
  );
};

export { Info };
