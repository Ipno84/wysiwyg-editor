import ResetTvIcon from '@mui/icons-material/ResetTv';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import React, { useCallback } from 'react';

import type { Device } from '@/editor/state/editor/typings';

import { ControlledSelect } from '@/editor/components/controlled-select';
import { useIcon } from '@/editor/components/widgets-bar/widgets/editor-controls/controls/devices/device-type-filter/hooks/use-icon';
import { useEditorStore } from '@/editor/state/editor';
import { setSelectedDeviceType as setSelectedDeviceTypeAction } from '@/editor/state/editor/actions/set-selected-device-type';
import { getDevicesTypes } from '@/editor/state/editor/selectors/devices/get-devices-types';
import { getSelectedDeviceType } from '@/editor/state/editor/selectors/devices/get-selected-device-type';

const DeviceTypeFilter: React.FC = () => {
    const setSelectedDeviceType = useEditorStore(setSelectedDeviceTypeAction);
    const selectedDeviceType = useEditorStore(getSelectedDeviceType);
    const deviceTypes = useEditorStore(getDevicesTypes);

    const { getIcon } = useIcon();

    const getOptionKey = useCallback((deviceType: Device['type']) => deviceType, []);

    const getOptionValue = useCallback((deviceType: Device['type']) => deviceType, []);

    const renderSelectValue = useCallback(() => selectedDeviceType ?? '', [selectedDeviceType]);

    const resetSelection = useCallback(() => setSelectedDeviceType(null), [setSelectedDeviceType]);

    const isItemSelected = useCallback(
        (selectedDeviceType: Device['type'] | null | undefined, currentDeviceType: Device['type'] | null | undefined) =>
            selectedDeviceType === currentDeviceType,
        [],
    );

    const onItemSelected = useCallback(
        (selectedDeviceType: Device['type'] | null | undefined) => setSelectedDeviceType(selectedDeviceType ?? null),
        [setSelectedDeviceType],
    );

    const getItemReactNode = useCallback(
        (deviceType: Device['type']) => {
            return (
                <>
                    <ListItemIcon>{getIcon(deviceType)}</ListItemIcon>
                    {deviceType}
                </>
            );
        },
        [getIcon],
    );

    return (
        <ControlledSelect
            id="device-type-list"
            options={deviceTypes}
            label={'Device Type'}
            selectedOption={selectedDeviceType}
            selectedMenuItemSx={{ textTransform: 'capitalize' }}
            menuItemSx={{ textTransform: 'capitalize' }}
            headerTextPrimary={'Device Type'}
            headerPaddingRight={22}
            headerTextSecondary={'Just select device type in order to filter devices from the list below'}
            headerActionWidth={140}
            ResetItemReactNode={
                <>
                    <ListItemIcon>
                        <ResetTvIcon />
                    </ListItemIcon>
                    None
                </>
            }
            getOptionKey={getOptionKey}
            getOptionValue={getOptionValue}
            renderSelectValue={renderSelectValue}
            resetSelection={resetSelection}
            isItemSelected={isItemSelected}
            onItemSelected={onItemSelected}
            getItemReactNode={getItemReactNode}
        />
    );
};

export { DeviceTypeFilter };
