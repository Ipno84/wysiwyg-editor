import { createSelector } from 'reselect';

import { getAuthorableState } from '@/editor/state/editor/selectors/authorables/get-authorable-state';
import { getSelectedAuthorableKey } from '@/editor/state/editor/selectors/authorables/get-selected-authorable-key';

const getSelectedAuthorableState = createSelector([getAuthorableState, getSelectedAuthorableKey], (authorableState, selectedAuthorableKey) => {
    if (authorableState[selectedAuthorableKey]) {
        return authorableState[selectedAuthorableKey];
    }
    return null;
});

export { getSelectedAuthorableState };
