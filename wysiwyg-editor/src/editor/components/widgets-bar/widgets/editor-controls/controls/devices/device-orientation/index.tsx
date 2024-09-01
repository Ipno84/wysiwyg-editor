import ScreenRotationIcon from '@mui/icons-material/ScreenRotation';
import IconButton from '@mui/material/IconButton/IconButton';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import React, { useMemo } from 'react';

import { useEditorStore } from '@/editor/state/editor';
import { toggleLandscapeOrientation as toggleLandscapeOrientationAction } from '@/editor/state/editor/actions/toggle-landscape-orientation';
import { hasSelectedDevice } from '@/editor/state/editor/selectors/devices/has-selected-device-id';
import { isLandscapeOrientation } from '@/editor/state/editor/selectors/devices/is-landscape-orientation';

const DeviceOrientation: React.FC = () => {
    const toggleLandscapeOrientation = useEditorStore(toggleLandscapeOrientationAction);

    const isLandscape = useEditorStore(isLandscapeOrientation);

    const enabled = useEditorStore(hasSelectedDevice);

    const rotationDegrees = useMemo(() => (isLandscape ? 135 : 46), [isLandscape]);

    if (!enabled) return null;

    return (
        <ListItem
            divider
            secondaryAction={
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={toggleLandscapeOrientation}
                    color="inherit"
                >
                    <ScreenRotationIcon
                        sx={{
                            transform: `rotate(${rotationDegrees}deg)`,
                            transition: 'transform .15s ease',
                        }}
                    />
                </IconButton>
            }
        >
            <ListItemText primary={'Orientation'} primaryTypographyProps={{ fontWeight: 700 }} secondary={'Change device orientation, landscape or portrait'} />
        </ListItem>
    );
};

export { DeviceOrientation };
