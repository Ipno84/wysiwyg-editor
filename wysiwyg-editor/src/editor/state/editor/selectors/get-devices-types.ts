import { createSelector } from "reselect";

import { getDevices } from "@/editor/state/editor/selectors/get-devices";

const getDevicesTypes = createSelector([getDevices], (devices) =>
  [...new Set(devices.map((device) => device.type))].sort(),
);

export { getDevicesTypes };
