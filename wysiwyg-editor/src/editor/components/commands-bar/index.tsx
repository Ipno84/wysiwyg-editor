import Box from "@mui/material/Box/Box";
import Divider from "@mui/material/Divider/Divider";
import List from "@mui/material/List/List";

import { CommandLink } from "@/editor/components/commands-bar/command-link";
import { Drawer } from "@/editor/components/commands-bar/drawer";
import { useEditorStore } from "@/editor/state/editor";
import { isCommandsBarOpen as isCommandsBarOpenSelector } from "@/editor/state/editor/selectors/is-commands-bar-open";
import { useNavigationStore } from "@/editor/state/navigation";
import { getPrimaryCommandsLinks } from "@/editor/state/navigation/selectors/get-primary-commands-links";
import { getSecondaryCommandsLinks } from "@/editor/state/navigation/selectors/get-secondary-commands-links";

const CommandsBar: React.FC = () => {
  const isCommandBarOpen = useEditorStore(isCommandsBarOpenSelector);

  const primaryCommandsLinks = useNavigationStore(getPrimaryCommandsLinks);
  const secondaryCommandsLinks = useNavigationStore(getSecondaryCommandsLinks);

  return (
    <Drawer variant="permanent" open={isCommandBarOpen}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <List>
            {primaryCommandsLinks.map((commandLinkProps) => (
              <CommandLink key={commandLinkProps.label} {...commandLinkProps} />
            ))}
          </List>
        </Box>
        <Box>
          <Divider />
          <List>
            {secondaryCommandsLinks.map((commandLinkProps) => (
              <CommandLink key={commandLinkProps.label} {...commandLinkProps} />
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export { CommandsBar };
