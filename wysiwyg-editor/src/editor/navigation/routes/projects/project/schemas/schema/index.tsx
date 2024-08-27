import Grid from "@mui/material/Grid/Grid";
import React from "react";

import { Content } from "@/editor/components/content";
import { Main } from "@/editor/components/main";
import { OptionsBar } from "@/editor/components/options-bar";
import { Sidebar } from "@/editor/components/sidebar";
import { TreeFold } from "@/editor/components/tree-fold";

const Schema: React.FC = () => {
  return (
    <Grid container sx={{ height: "calc(100dvh - 64px)", overflow: "hidden" }}>
      <Sidebar>
        <TreeFold />
      </Sidebar>
      <Main>
        <Content />
      </Main>
      <Sidebar>
        <OptionsBar />
      </Sidebar>
    </Grid>
  );
};

export { Schema };
