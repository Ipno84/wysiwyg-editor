import { createCachedSelector } from 're-reselect';

import type { Device, IEditorState } from '@/editor/state/editor/typings';

import { getDevices } from '@/editor/state/editor/selectors/devices/get-devices';

const getDevicesByType = createCachedSelector([getDevices, (_: IEditorState, type: Device['type'] | null | undefined) => type], (devices, type) =>
    devices.filter((device) => device.type === type),
)((_: IEditorState, type: Device['type'] | null | undefined) => type ?? '');

export { getDevicesByType };
