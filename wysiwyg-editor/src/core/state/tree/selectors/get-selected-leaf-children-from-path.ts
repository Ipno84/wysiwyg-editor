import { createCachedSelector } from 're-reselect';

import type { ITreeState } from '@/core/state/tree/typings';

import { getSelectedLeafFromPath } from '@/core/state/tree/selectors/get-selected-leaf-from-path';

const getSelectedLeafChildrenFromPath = createCachedSelector(
    [getSelectedLeafFromPath, (_: ITreeState, path: string | undefined) => path],
    (selectedLeaf) => selectedLeaf?.children,
)((_: ITreeState, path: string | undefined) => path);

export { getSelectedLeafChildrenFromPath };
