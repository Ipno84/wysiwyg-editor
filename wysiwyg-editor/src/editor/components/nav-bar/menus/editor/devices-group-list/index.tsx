import { useMemo } from "react";
import List from "@mui/material/List/List";
import ListSubheader from "@mui/material/ListSubheader/ListSubheader";
import Divider from "@mui/material/Divider/Divider";
import { DevicesGroupListProps } from "@/editor/components/nav-bar/menus/editor/devices-group-list/typings";
import { DeviceItem } from "@/editor/components/nav-bar/menus/editor/device-item";

const DevicesGroupList: React.FC<DevicesGroupListProps> = ({
  resetAnchor,
  id,
  items,
  name,
}) => {
  const identifier = useMemo(() => `list-subheader-${id}`, [id]);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
      component="nav"
      aria-labelledby={identifier}
      subheader={
        <>
          <ListSubheader component="div" id={identifier}>
            {name}
          </ListSubheader>
          <Divider />
        </>
      }
    >
      {items.map((item) => (
        <DeviceItem {...item} resetAnchor={resetAnchor} />
      ))}
    </List>
  );
};

export { DevicesGroupList };
