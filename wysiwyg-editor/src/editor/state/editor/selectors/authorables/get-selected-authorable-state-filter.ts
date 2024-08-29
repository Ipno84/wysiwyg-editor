import { createSelector } from 'reselect';

import { getAuthorableStateFilters } from '@/editor/state/editor/selectors/authorables/get-authorable-state-filters';
import { getSelectedAuthorableKey } from '@/editor/state/editor/selectors/authorables/get-selected-authorable-key';

const getSelectedAuthorableStateFilter = createSelector(
    [getSelectedAuthorableKey, getAuthorableStateFilters],
    (selectedAuthorableKey, authorableStateFilters) => {
        if (authorableStateFilters[selectedAuthorableKey]) return authorableStateFilters[selectedAuthorableKey];
        return null;
    },
);

export { getSelectedAuthorableStateFilter };
