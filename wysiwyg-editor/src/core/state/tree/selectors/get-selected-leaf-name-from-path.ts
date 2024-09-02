import { createCachedSelector } from 're-reselect';

import type { ITreeState } from '@/core/state/tree/typings';

import { getSelectedLeafFromPath } from '@/core/state/tree/selectors/get-selected-leaf-from-path';

const getSelectedLeafNameFromPath = createCachedSelector(
    [getSelectedLeafFromPath, (_: ITreeState, path: string | undefined) => path],
    (selectedLeaf) => selectedLeaf?.name,
)((_: ITreeState, path: string | undefined) => path);

export { getSelectedLeafNameFromPath };
