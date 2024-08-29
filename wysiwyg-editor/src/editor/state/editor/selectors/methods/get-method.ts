import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getMethods } from '@/editor/state/editor/selectors/methods/get-methods';

const getMethod = createCachedSelector(
    [getMethods, (_: IEditorState, methodId: string | undefined) => methodId],
    (methods, methodId) => methods.find((method) => method.id === methodId) || null,
)((_: IEditorState, methodId: string | undefined) => methodId);

export { getMethod };
