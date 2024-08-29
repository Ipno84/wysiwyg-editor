import ScreenRotationIcon from '@mui/icons-material/ScreenRotation';
import IconButton from '@mui/material/IconButton/IconButton';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import { useMemo } from 'react';

import { useEditorStore } from '@/editor/state/editor';
import { toggleLandscapeOrientation as toggleLandscapeOrientationAction } from '@/editor/state/editor/actions/toggle-landscape-orientation';
import { hasSelectedDevice } from '@/editor/state/editor/selectors/devices/has-selected-device-id';
import { isLandscapeOrientation } from '@/editor/state/editor/selectors/devices/is-landscape-orientation';

const Orientation: React.FC = () => {
    const toggleLandscapeOrientation = useEditorStore(toggleLandscapeOrientationAction);

    const isLandscape = useEditorStore(isLandscapeOrientation);

    const enabled = useEditorStore(hasSelectedDevice);

    const rotationDegrees = useMemo(() => (isLandscape ? 135 : 46), [isLandscape]);

    return (
        <Tooltip title="Rotate" placement="bottom">
            <span>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={toggleLandscapeOrientation}
                    color="inherit"
                    disabled={!enabled}
                >
                    <ScreenRotationIcon
                        sx={{
                            transform: `rotate(${rotationDegrees}deg)`,
                            transition: 'transform .15s ease',
                        }}
                    />
                </IconButton>
            </span>
        </Tooltip>
    );
};

export { Orientation };
