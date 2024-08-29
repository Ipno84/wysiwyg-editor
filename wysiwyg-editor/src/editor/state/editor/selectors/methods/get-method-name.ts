import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getMethod } from '@/editor/state/editor/selectors/methods/get-method';

const getMethodName = createCachedSelector(
    [getMethod, (_: IEditorState, methodId: string | undefined) => methodId],
    (method) => method?.name,
)((_: IEditorState, methodId: string | undefined) => methodId);

export { getMethodName };
