import { createSelector } from 'reselect';

import { getAuthorableProps } from '@/editor/state/editor/selectors/authorables/get-authorable-props';
import { getSelectedAuthorableKey } from '@/editor/state/editor/selectors/authorables/get-selected-authorable-key';
import { getSelectedAuthorableStateFilter } from '@/editor/state/editor/selectors/authorables/get-selected-authorable-state-filter';

const getFilteredSelectedAuthorableProps = createSelector(
    [getSelectedAuthorableKey, getAuthorableProps, getSelectedAuthorableStateFilter],
    (selectedAuthorableKey, authorableProps, selectedAuthorableStateFilter) => {
        if (authorableProps[selectedAuthorableKey]) {
            return Object.keys(authorableProps[selectedAuthorableKey])
                .map((authorablePropKey) => {
                    const authorableProp = authorableProps[selectedAuthorableKey][authorablePropKey];
                    return { ...authorableProp, authorablePropKey };
                })
                .filter((authorableProp) => {
                    return authorableProp.group?.value === selectedAuthorableStateFilter;
                })
                .reduce((acc, item) => {
                    const { authorablePropKey, ...rest } = item;
                    acc[authorablePropKey] = rest;
                    return acc;
                }, {} as any);
        }
        return null;
    },
);

export { getFilteredSelectedAuthorableProps };
