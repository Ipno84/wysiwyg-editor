import Check from "@mui/icons-material/Check";
import { useCallback } from "react";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { useEditorStore } from "@/editor/state/editor";
import { getSelectedDeviceId } from "@/editor/state/editor/selectors/get-selected-device-id";
import { setSelectedDeviceId as setSelectedDeviceIdAction } from "@/editor/state/editor/actions/set-selected-device-id";
import { ListItemIcon } from "@/editor/components/nav-bar/menus/editor/list-item-icon";
import type { ResetListProps } from "@/editor/components/nav-bar/menus/editor/reset-list/typings";
import { getSelectedDevice } from "@/editor/state/editor/selectors/get-selected-device";
import { DeviceItem } from "../device-item";

const ResetList: React.FC<ResetListProps> = ({ resetAnchor }) => {
  const selectedDeviceId = useEditorStore(getSelectedDeviceId);
  const setSelectedDeviceId = useEditorStore(setSelectedDeviceIdAction);
  const selectedDevice = useEditorStore(getSelectedDevice);

  const resetSelectedDeviceId = useCallback(() => {
    setSelectedDeviceId(null);
    resetAnchor();
  }, [resetAnchor, setSelectedDeviceId]);

  return (
    <List>
      <ListItem onClick={resetSelectedDeviceId} disablePadding divider>
        <ListItemButton>
          <ListItemIcon>
            {selectedDeviceId === null ? <Check /> : null}
          </ListItemIcon>
          <ListItemText>Fit Available space (100%)</ListItemText>
        </ListItemButton>
      </ListItem>
      {selectedDevice ? (
        <DeviceItem {...selectedDevice} resetAnchor={resetAnchor} />
      ) : null}
    </List>
  );
};

export { ResetList };
