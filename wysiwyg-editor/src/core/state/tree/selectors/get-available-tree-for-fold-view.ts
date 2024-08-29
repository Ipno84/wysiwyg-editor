import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { createCachedSelector } from 're-reselect';

import type { Tree } from '@/core/components/renderer/typings';
import type { ITreeState } from '@/core/state/tree/typings';

import { getAvailableComponent } from '@/core/state/tree/selectors/get-available-component';
import { getAvailableTree } from '@/core/state/tree/selectors/get-available-tree';

const reformatForFoldView = (
    tree: Tree,
    state: ITreeState,
    parentId?: string,
): TreeViewBaseItem<{
    Component?: React.FC | null;
    id: string;
    parentId?: string;
}>[] => {
    return tree.map((leaf) => {
        if (typeof leaf === 'string') {
            return {
                id: crypto.randomUUID(),
                label: `TEXT: ${leaf}`,
                children: undefined,
                parentId,
            };
        }

        const Component = getAvailableComponent(state, leaf.name);

        return {
            id: leaf.uuid ?? '',
            label: leaf.name,
            children: leaf.children ? reformatForFoldView(leaf.children, state, leaf.uuid) : undefined,
            Component,
            parentId,
        };
    });
};

const getAvailableTreeForFoldView = createCachedSelector(
    [getAvailableTree, (_: ITreeState, treeName: string | undefined) => treeName, (state: ITreeState) => state],
    (availableTree, _, state) => {
        if (availableTree) {
            return reformatForFoldView(availableTree, state);
        }
        return null;
    },
)((_: ITreeState, treeName: string | undefined) => treeName);

export { getAvailableTreeForFoldView };
