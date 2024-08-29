import { createSelector } from 'reselect';

import { getSelectedDeviceId } from '@/editor/state/editor/selectors/devices/get-selected-device-id';

const hasSelectedDevice = createSelector([getSelectedDeviceId], (selectedDeviceId) => Boolean(selectedDeviceId));

export { hasSelectedDevice };
