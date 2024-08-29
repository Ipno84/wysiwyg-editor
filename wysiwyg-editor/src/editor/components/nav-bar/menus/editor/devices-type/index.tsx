import Divider from '@mui/material/Divider/Divider';
import List from '@mui/material/List/List';
import ListSubheader from '@mui/material/ListSubheader/ListSubheader';

import { DeviceItem } from '../device-item';
import { DevicesTypeProps } from '@/editor/components/nav-bar/menus/editor/devices-type/typings';
import { useEditorStore } from '@/editor/state/editor';
import { getDevicesByType } from '@/editor/state/editor/selectors/devices/get-devices-by-type';
import { IEditorState } from '@/editor/state/editor/typings';

const DevicesType: React.FC<DevicesTypeProps> = ({ resetAnchor, type }) => {
    const devices = useEditorStore((state: IEditorState) => getDevicesByType(state, type));

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
            }}
            component="nav"
            aria-labelledby={type}
            subheader={
                <>
                    <ListSubheader component="div" id={type} sx={{ textTransform: 'capitalize', fontWeight: 700 }}>
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
