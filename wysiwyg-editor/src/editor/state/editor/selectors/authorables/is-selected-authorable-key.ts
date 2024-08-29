import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getSelectedAuthorableKey } from '@/editor/state/editor/selectors/authorables/get-selected-authorable-key';

const isSelectedAuthorableKey = createCachedSelector(
    [getSelectedAuthorableKey, (_: IEditorState, authorableKey: string) => authorableKey],
    (selectedAuthorableKey, authorableKey) => selectedAuthorableKey === authorableKey,
)((_: IEditorState, authorableKey: string) => authorableKey);

export { isSelectedAuthorableKey };
