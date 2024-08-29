import { createSelector } from 'reselect';

import { getDevices } from '@/editor/state/editor/selectors/devices/get-devices';
import { getSelectedDeviceId } from '@/editor/state/editor/selectors/devices/get-selected-device-id';

const getSelectedDevice = createSelector([getDevices, getSelectedDeviceId], (devices, selectedDeviceId) => {
    return devices.find((device) => device.id === selectedDeviceId);
});

export { getSelectedDevice };
