import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getDevices } from '@/editor/state/editor/selectors/devices/get-devices';

const getDevice = createCachedSelector(
    [getDevices, (_: IEditorState, deviceId: string | undefined) => deviceId],
    (devices, deviceId) => devices.find((device) => device.id === deviceId) || null,
)((_: IEditorState, deviceId: string | undefined) => deviceId);

export { getDevice };
