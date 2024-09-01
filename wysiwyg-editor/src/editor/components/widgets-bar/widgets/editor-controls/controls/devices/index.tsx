import React from 'react';

import { DeviceFilter } from '@/editor/components/widgets-bar/widgets/editor-controls/controls/devices/device-filter';
import { DeviceOrientation } from '@/editor/components/widgets-bar/widgets/editor-controls/controls/devices/device-orientation';
import { DeviceTypeFilter } from '@/editor/components/widgets-bar/widgets/editor-controls/controls/devices/device-type-filter';

const DevicesControls: React.FC = () => {
    return (
        <>
            <DeviceTypeFilter />
            <DeviceFilter />
            <DeviceOrientation />
        </>
    );
};

export { DevicesControls };
