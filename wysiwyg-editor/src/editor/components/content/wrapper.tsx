import { Theme } from '@mui/material';
import Box from '@mui/material/Box/Box';
import React, { PropsWithChildren, useMemo } from 'react';

import { useEditorStore } from '@/editor/state/editor';
import { getSelectedDeviceViewport } from '@/editor/state/editor/selectors/devices/get-selected-device-viewport';
import { isLandscapeOrientation } from '@/editor/state/editor/selectors/devices/is-landscape-orientation';
import { BoxOwnProps } from '@mui/system';

const ContentWrapper: React.FC<PropsWithChildren> = ({ children }) => {
    const selectedViewport = useEditorStore(getSelectedDeviceViewport);
    const isLandscape = useEditorStore(isLandscapeOrientation);

    const width = useMemo(() => selectedViewport?.[isLandscape ? 1 : 0] ?? '100%', [selectedViewport, isLandscape]);
    const height = useMemo(() => selectedViewport?.[isLandscape ? 0 : 1] ?? '100%', [selectedViewport, isLandscape]);

    const sxProps = useMemo<BoxOwnProps<Theme>['sx']>(() => {
        let style: BoxOwnProps<Theme>['sx'] = {
            width,
            height,
            transition: 'width .15s ease, height .15s ease',
        };
        if (selectedViewport) {
            style = {
                ...style,
                outlineWidth: 8,
                outlineColor: '#333',
                outlineStyle: 'solid',
                marginTop: 8,
                marginBottom: 8,
                borderRadius: 3,
            };
        }

        return style;
    }, [height, selectedViewport, width]);

    return <Box sx={sxProps}>{children}</Box>;
};

export { ContentWrapper };
