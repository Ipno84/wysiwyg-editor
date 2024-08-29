import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getDeviceResolution } from '@/editor/state/editor/selectors/devices/get-device-resolution';

const getDeviceResolutionHeight = createCachedSelector(
    [getDeviceResolution, (_: IEditorState, deviceId: string | undefined) => deviceId],
    (resolution) => resolution?.[1],
)((_: IEditorState, deviceId: string | undefined) => deviceId);

export { getDeviceResolutionHeight };
