import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getDevice } from '@/editor/state/editor/selectors/devices/get-device';

const getDeviceLabel = createCachedSelector(
    [getDevice, (_: IEditorState, deviceId: string | undefined) => deviceId],
    (device) => device?.label,
)((_: IEditorState, deviceId: string | undefined) => deviceId);

export { getDeviceLabel };
