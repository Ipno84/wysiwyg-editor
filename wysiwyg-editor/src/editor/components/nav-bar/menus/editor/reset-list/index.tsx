import Check from '@mui/icons-material/Check';
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemButton from '@mui/material/ListItemButton/ListItemButton';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import { useCallback } from 'react';

import type { ResetListProps } from '@/editor/components/nav-bar/menus/editor/reset-list/typings';

import { DeviceItem } from '../device-item';
import { ListItemIcon } from '@/editor/components/nav-bar/menus/editor/list-item-icon';
import { useEditorStore } from '@/editor/state/editor';
import { setSelectedDeviceId as setSelectedDeviceIdAction } from '@/editor/state/editor/actions/set-selected-device-id';
import { getSelectedDevice } from '@/editor/state/editor/selectors/devices/get-selected-device';
import { getSelectedDeviceId } from '@/editor/state/editor/selectors/devices/get-selected-device-id';

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
                    <ListItemIcon>{selectedDeviceId === null ? <Check /> : null}</ListItemIcon>
                    <ListItemText>Fit Available space (100%)</ListItemText>
                </ListItemButton>
            </ListItem>
            {selectedDevice ? <DeviceItem {...selectedDevice} resetAnchor={resetAnchor} /> : null}
        </List>
    );
};

export { ResetList };
