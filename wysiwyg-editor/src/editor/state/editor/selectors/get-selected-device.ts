import { createSelector } from "reselect";

import { getDevices } from "@/editor/state/editor/selectors/get-devices";
import { getSelectedDeviceId } from "@/editor/state/editor/selectors/get-selected-device-id";

const getSelectedDevice = createSelector(
  [getDevices, getSelectedDeviceId],
  (devices, selectedDeviceId) => {
    return devices
      .map((deviceGroup) => deviceGroup.items)
      .flat()
      .find((device) => device.id === selectedDeviceId);
  },
);

export { getSelectedDevice };
