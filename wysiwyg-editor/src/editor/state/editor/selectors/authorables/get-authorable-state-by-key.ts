import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getAuthorableState } from '@/editor/state/editor/selectors/authorables/get-authorable-state';

const getAuthorableStateByKey = createCachedSelector(
    [getAuthorableState, (_: IEditorState, authorablePropKey: string) => authorablePropKey],
    (authorableState, authorablePropKey) => {
        if (authorableState?.[authorablePropKey]) {
            return authorableState[authorablePropKey];
        }
        return null;
    },
)((_: IEditorState, authorablePropKey: string) => authorablePropKey);

export { getAuthorableStateByKey };
