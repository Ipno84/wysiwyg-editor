import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getDevice } from '@/editor/state/editor/selectors/devices/get-device';

const getDeviceViewport = createCachedSelector(
    [getDevice, (_: IEditorState, deviceId: string | undefined) => deviceId],
    (device) => device?.viewport,
)((_: IEditorState, deviceId: string | undefined) => deviceId);

export { getDeviceViewport };
