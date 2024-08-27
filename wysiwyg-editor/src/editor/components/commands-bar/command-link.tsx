import Tooltip from "@mui/material/Tooltip/Tooltip";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItemText from "@mui/material/ListItemText/ListItemText";

import type { CommandLink } from "@/editor/state/navigation/typings";

import { router } from "@/editor/navigation/router";
import { useEditorStore } from "@/editor/state/editor";
import { isCommandsBarOpen as isCommandsBarOpenSelector } from "@/editor/state/editor/selectors/is-commands-bar-open";

const CommandLink: React.FC<CommandLink> = ({ label, Icon, to }) => {
  const isCommandBarOpen = useEditorStore(isCommandsBarOpenSelector);

  return (
    <ListItem key={label} disablePadding sx={{ display: "block" }}>
      <Tooltip
        title={label}
        placement="right"
        arrow
        disableFocusListener={isCommandBarOpen}
        disableHoverListener={isCommandBarOpen}
        disableInteractive={isCommandBarOpen}
        disableTouchListener={isCommandBarOpen}
      >
        <ListItemButton
          sx={{
            minHeight: 64,
            justifyContent: isCommandBarOpen ? "initial" : "center",
            px: 2.5,
          }}
          onClick={() => router.navigate(to)}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: 0,
              justifyContent: "center",
            }}
          >
            <Icon />
          </ListItemIcon>
          <ListItemText
            primary={label}
            sx={{
              opacity: isCommandBarOpen ? 1 : 0,
              position: "relative",
              left: 12,
              transition: "opacity .3s ease",
            }}
          />
        </ListItemButton>
      </Tooltip>
    </ListItem>
  );
};

export { CommandLink };
