import { createSelector } from 'reselect';

import { getDevices } from '@/editor/state/editor/selectors/devices/get-devices';

const getDevicesTypes = createSelector([getDevices], (devices) => [...new Set(devices.map((device) => device.type))].sort());

export { getDevicesTypes };
