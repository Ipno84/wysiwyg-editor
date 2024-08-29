import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getSelectedAuthorableState } from '@/editor/state/editor/selectors/authorables/get-selected-authorable-state';

const getSelectedAuthorableStateByKey = createCachedSelector(
    [getSelectedAuthorableState, (_: IEditorState, authorablePropKey: string) => authorablePropKey],
    (selectedAuthorableState, authorablePropKey) => {
        if (selectedAuthorableState?.[authorablePropKey]) {
            return selectedAuthorableState[authorablePropKey];
        }
        return null;
    },
)((_: IEditorState, authorablePropKey: string) => authorablePropKey);

export { getSelectedAuthorableStateByKey };
