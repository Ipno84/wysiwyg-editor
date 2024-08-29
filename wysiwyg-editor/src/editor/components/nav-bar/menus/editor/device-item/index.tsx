import Check from '@mui/icons-material/Check';
import Box from '@mui/material/Box/Box';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemButton from '@mui/material/ListItemButton/ListItemButton';
import Typography from '@mui/material/Typography/Typography';
import { useCallback } from 'react';

import type { DeviceItemProps } from '@/editor/components/nav-bar/menus/editor/device-item/typings';

import { ListItemIcon } from '@/editor/components/nav-bar/menus/editor/list-item-icon';
import { useEditorStore } from '@/editor/state/editor';
import { setSelectedDeviceId as setSelectedDeviceIdAction } from '@/editor/state/editor/actions/set-selected-device-id';
import { getSelectedDeviceId } from '@/editor/state/editor/selectors/devices/get-selected-device-id';

const DeviceItem: React.FC<DeviceItemProps> = ({ resetAnchor, id, label, viewport, resolution, brand }) => {
    const selectedDeviceId = useEditorStore(getSelectedDeviceId);
    const setSelectedDeviceId = useEditorStore(setSelectedDeviceIdAction);

    const onSelect = useCallback(() => {
        setSelectedDeviceId(id);
        resetAnchor();
    }, [id, resetAnchor, setSelectedDeviceId]);

    return (
        <ListItem onClick={onSelect} disablePadding selected={selectedDeviceId === id}>
            <ListItemButton>
                <ListItemIcon>{selectedDeviceId === id ? <Check /> : null}</ListItemIcon>
                <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {label}
                    </Typography>
                    <Typography variant="body2">Brand: {brand}</Typography>
                    <Typography variant="body2">Viewport: {viewport.join('x')}</Typography>
                    <Typography variant="body2">Resolution: {resolution.join('x')}</Typography>
                </Box>
            </ListItemButton>
        </ListItem>
    );
};

export { DeviceItem };
