import List from "@mui/material/List/List";
import ListSubheader from "@mui/material/ListSubheader/ListSubheader";
import Divider from "@mui/material/Divider/Divider";
import { DevicesTypeProps } from "@/editor/components/nav-bar/menus/editor/devices-type/typings";
import { getDevicesByType } from "@/editor/state/editor/selectors/get-devices-by-type";
import { useEditorStore } from "@/editor/state/editor";
import { IEditorState } from "@/editor/state/editor/typings";
import { DeviceItem } from "../device-item";

const DevicesType: React.FC<DevicesTypeProps> = ({ resetAnchor, type }) => {
  const devices = useEditorStore((state: IEditorState) =>
    getDevicesByType(state, type),
  );

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
      component="nav"
      aria-labelledby={type}
      subheader={
        <>
          <ListSubheader
            component="div"
            id={type}
            sx={{ textTransform: "capitalize", fontWeight: 700 }}
          >
            {type}
          </ListSubheader>
          <Divider />
        </>
      }
    >
      {devices.map((device) => (
        <DeviceItem {...device} resetAnchor={resetAnchor} key={device.id} />
      ))}
    </List>
  );
};

export { DevicesType };
