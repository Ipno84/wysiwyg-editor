import { createSelector } from "reselect";

import { getSelectedDevice } from "@/editor/state/editor/selectors/get-selected-device";

const getSelectedDeviceViewport = createSelector(
  [getSelectedDevice],
  (selectedDevice) => {
    return selectedDevice?.viewport;
  },
);

export { getSelectedDeviceViewport };
