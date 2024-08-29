import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getDeviceResolution } from '@/editor/state/editor/selectors/devices/get-device-resolution';

const getDeviceResolutionWidth = createCachedSelector(
    [getDeviceResolution, (_: IEditorState, deviceId: string | undefined) => deviceId],
    (resolution) => resolution?.[0],
)((_: IEditorState, deviceId: string | undefined) => deviceId);

export { getDeviceResolutionWidth };
