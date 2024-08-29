import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getDevice } from '@/editor/state/editor/selectors/devices/get-device';

const getDeviceResolution = createCachedSelector(
    [getDevice, (_: IEditorState, deviceId: string | undefined) => deviceId],
    (device) => device?.resolution,
)((_: IEditorState, deviceId: string | undefined) => deviceId);

export { getDeviceResolution };
