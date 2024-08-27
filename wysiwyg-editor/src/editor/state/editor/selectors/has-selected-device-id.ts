import { createSelector } from "reselect";

import { getSelectedDeviceId } from "@/editor/state/editor/selectors/get-selected-device-id";

const hasSelectedDevice = createSelector(
  [getSelectedDeviceId],
  (selectedDeviceId) => Boolean(selectedDeviceId),
);

export { hasSelectedDevice };
