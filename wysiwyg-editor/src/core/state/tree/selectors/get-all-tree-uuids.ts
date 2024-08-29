import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { createCachedSelector } from 're-reselect';

import type { ITreeState } from '@/core/state/tree/typings';

import { getAvailableTreeForFoldView } from '@/core/state/tree/selectors/get-available-tree-for-fold-view';

const extractIds = (
    tree: TreeViewBaseItem<{
        Component?: React.FC | null;
        id: string;
        parentId?: string;
    }>[],
): string[] => {
    const uuids = tree.reduce((acc, leaf) => {
        if (typeof leaf !== 'string' && leaf?.id) acc.push(leaf.id);
        if (leaf?.children) {
            acc.push(...extractIds(leaf.children));
        }
        return [...new Set(acc)];
    }, [] as string[]);
    return uuids;
};

const getAllTreeUuids = createCachedSelector([getAvailableTreeForFoldView, (_: ITreeState, treeName: string | undefined) => treeName], (availableTree) => {
    if (availableTree) return extractIds(availableTree);
    return [];
})((_: ITreeState, treeName: string | undefined) => treeName);

export { getAllTreeUuids };
