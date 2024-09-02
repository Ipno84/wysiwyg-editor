import { createCachedSelector } from 're-reselect';

import type { ITreeState } from '@/core/state/tree/typings';

import { Leaf } from '@/core/components/renderer/typings';
import { getAvailableTrees } from '@/core/state/tree/selectors/get-available-trees';
import { get } from '@/utils/traverse/get';

const getSelectedLeafFromPath = createCachedSelector(
    [getAvailableTrees, (_: ITreeState, path: string | undefined) => path],
    (availableTrees, path) => get(availableTrees, path) as Leaf | undefined,
)((_: ITreeState, path: string | undefined) => path);

export { getSelectedLeafFromPath };
