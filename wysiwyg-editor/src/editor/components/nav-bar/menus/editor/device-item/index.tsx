import Check from "@mui/icons-material/Check";
import { useCallback } from "react";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { useEditorStore } from "@/editor/state/editor";
import { getSelectedDeviceId } from "@/editor/state/editor/selectors/get-selected-device-id";
import { setSelectedDeviceId as setSelectedDeviceIdAction } from "@/editor/state/editor/actions/set-selected-device-id";
import { ListItemIcon } from "@/editor/components/nav-bar/menus/editor/list-item-icon";
import type { DeviceItemProps } from "@/editor/components/nav-bar/menus/editor/device-item/typings";

const DeviceItem: React.FC<DeviceItemProps> = ({ resetAnchor, id, label }) => {
  const selectedDeviceId = useEditorStore(getSelectedDeviceId);
  const setSelectedDeviceId = useEditorStore(setSelectedDeviceIdAction);

  const onSelect = useCallback(() => {
    setSelectedDeviceId(id);
    resetAnchor();
  }, [id, resetAnchor, setSelectedDeviceId]);

  return (
    <ListItem onClick={onSelect} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {selectedDeviceId === id ? <Check /> : null}
        </ListItemIcon>
        <ListItemText>{label}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export { DeviceItem };
