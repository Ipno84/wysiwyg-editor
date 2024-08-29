import Devices from '@mui/icons-material/Devices';
import IconButton from '@mui/material/IconButton/IconButton';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import { useCallback, useState } from 'react';

import { DevicesTypes } from '@/editor/components/nav-bar/menus/editor/devices-types';
import { Orientation } from '@/editor/components/nav-bar/menus/editor/orientation';
import { ResetList } from '@/editor/components/nav-bar/menus/editor/reset-list';
import { useNavigationStore } from '@/editor/state/navigation';
import { isViewableByPath as isViewableByPathSelector } from '@/editor/state/navigation/selectors/is-viewable-by-path';
import { INavigationState } from '@/editor/state/navigation/typings';

const EditorMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const isViewableByPath = useNavigationStore((state: INavigationState) => isViewableByPathSelector(state, ['schema']));

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const resetAnchor = useCallback(() => setAnchorEl(null), []);

    if (!isViewableByPath) return null;

    return (
        <>
            <Tooltip title="Devices" placement="bottom">
                <span>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="devices-filter"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <Devices />
                    </IconButton>
                </span>
            </Tooltip>
            <Popover
                id="devices-filter"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={resetAnchor}
            >
                <ResetList resetAnchor={resetAnchor} />
                <DevicesTypes resetAnchor={resetAnchor} />
            </Popover>
            <Orientation />
        </>
    );
};

export { EditorMenu };
