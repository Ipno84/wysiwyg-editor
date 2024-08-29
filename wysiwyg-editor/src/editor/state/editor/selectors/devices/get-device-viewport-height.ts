import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getDeviceViewport } from '@/editor/state/editor/selectors/devices/get-device-viewport';

const getDeviceViewportHeight = createCachedSelector(
    [getDeviceViewport, (_: IEditorState, deviceId: string | undefined) => deviceId],
    (viewport) => viewport?.[1],
)((_: IEditorState, deviceId: string | undefined) => deviceId);

export { getDeviceViewportHeight };
