import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import { styled } from "@mui/material/styles";

import { useEditorStore } from "@/editor/state/editor";
import { toggleCommandsBarOpening as toggleCommandsBarOpeningAction } from "@/editor/state/editor/actions/toggle-commands-bar-opening";
import { isCommandsBarOpen as isCommandsBarOpenSelector } from "@/editor/state/editor/selectors/is-commands-bar-open";
import { EditorMenu } from "@/editor/components/nav-bar/menus/editor";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const NavBar: React.FC = () => {
  const toggleCommandsBarOpening = useEditorStore(
    toggleCommandsBarOpeningAction,
  );
  const isCommandBarOpen = useEditorStore(isCommandsBarOpenSelector);

  return (
    <AppBar position="sticky" open={isCommandBarOpen} variant="outlined">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleCommandsBarOpening}
          edge="start"
          sx={{
            marginRight: 2.5,
          }}
        >
          {isCommandBarOpen ? <ChevronLeft /> : <MenuIcon />}
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Mini variant drawer
        </Typography>
        <EditorMenu />
      </Toolbar>
    </AppBar>
  );
};

export { NavBar };
