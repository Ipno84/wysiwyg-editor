import type { CSSObject, Theme } from "@mui/material/styles";

import { drawerWidth } from "@/editor/components/commands-bar/constants";

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

export { openedMixin };
