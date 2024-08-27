import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

import { drawerWidth } from "@/editor/components/commands-bar/constants";
import { closedMixin } from "@/editor/components/commands-bar/mixins/closed";
import { openedMixin } from "@/editor/components/commands-bar/mixins/opened";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export { Drawer };
