import Box from '@mui/material/Box/Box';
import Typography from '@mui/material/Typography/Typography';
import React, { useCallback } from 'react';

import type { Device, IEditorState } from '@/editor/state/editor/typings';

import { ControlledSelect } from '@/editor/components/controlled-select';
import { useEditorStore } from '@/editor/state/editor';
import { setSelectedDeviceId as setSelectedDeviceIdAction } from '@/editor/state/editor/actions/set-selected-device-id';
import { getDevicesByType } from '@/editor/state/editor/selectors/devices/get-devices-by-type';
import { getSelectedDevice } from '@/editor/state/editor/selectors/devices/get-selected-device';
import { getSelectedDeviceType } from '@/editor/state/editor/selectors/devices/get-selected-device-type';

const DeviceFilter: React.FC = () => {
    const selectedDevice = useEditorStore(getSelectedDevice);
    const setSelectedDeviceId = useEditorStore(setSelectedDeviceIdAction);
    const selectedDeviceType = useEditorStore(getSelectedDeviceType);
    const devices = useEditorStore((state: IEditorState) => getDevicesByType(state, selectedDeviceType));

    const getOptionKey = useCallback(({ id }: Device) => id, []);

    const getOptionValue = useCallback(({ id }: Device) => id, []);

    const renderSelectValue = useCallback(() => selectedDevice?.label ?? '', [selectedDevice]);

    const resetSelection = useCallback(() => setSelectedDeviceId(null), [setSelectedDeviceId]);

    const isItemSelected = useCallback(
        (selectedDevice: Device | null | undefined, currentDevice: Device | null | undefined) => selectedDevice?.id === currentDevice?.id,
        [],
    );

    const onItemSelected = useCallback((selectedDevice: Device | null | undefined) => setSelectedDeviceId(selectedDevice?.id ?? null), [setSelectedDeviceId]);

    const getItemReactNode = useCallback((device: Device) => {
        return (
            <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {device.label}
                </Typography>
                <Typography variant="body2">Brand: {device.brand}</Typography>
                <Typography variant="body2">Viewport: {device.viewport.join('x')}</Typography>
                <Typography variant="body2">Resolution: {device.resolution.join('x')}</Typography>
            </Box>
        );
    }, []);

    if (!selectedDeviceType) return null;

    return (
        <ControlledSelect
            id="device-list"
            options={devices}
            label={'Device'}
            selectedOption={selectedDevice}
            headerTextPrimary={'Device'}
            headerPaddingRight={22}
            headerTextSecondary={
                'Select the device to emulate it in the editor view. Consider that this emulation is related just to the screen size, not to the default browser behaviour'
            }
            headerActionWidth={140}
            ResetItemReactNode={<Typography variant="subtitle1">None</Typography>}
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

export { DeviceFilter };
