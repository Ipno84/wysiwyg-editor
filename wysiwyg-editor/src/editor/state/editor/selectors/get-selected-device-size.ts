import { createSelector } from "reselect";

import { getSelectedDevice } from "@/editor/state/editor/selectors/get-selected-device";

const getSelectedDeviceSize = createSelector(
  [getSelectedDevice],
  (selectedDevice) => {
    return selectedDevice?.size;
  },
);

export { getSelectedDeviceSize };
