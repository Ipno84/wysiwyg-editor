import { createCachedSelector } from 're-reselect';

import type { ITreeState } from '@/core/state/tree/typings';

import { getAvailableTrees } from '@/core/state/tree/selectors/get-available-trees';

const getAvailableTree = createCachedSelector([getAvailableTrees, (_: ITreeState, treeName: string | undefined) => treeName], (availableTrees, treeName) => {
    if (treeName && availableTrees?.[treeName]) {
        return availableTrees[treeName];
    }
    return null;
})((_: ITreeState, treeName: string | undefined) => treeName);

export { getAvailableTree };
