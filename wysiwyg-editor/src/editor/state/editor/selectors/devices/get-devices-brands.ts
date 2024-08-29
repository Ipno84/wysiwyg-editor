import { createSelector } from 'reselect';

import { getDevices } from '@/editor/state/editor/selectors/devices/get-devices';

const getDevicesBrands = createSelector([getDevices], (devices) => [...new Set(devices.map((device) => device.brand))]);

export { getDevicesBrands };
