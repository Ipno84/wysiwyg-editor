import React from 'react';
import { useParams } from 'react-router-dom';

import type { ITreeState } from '@/core/state/tree/typings';
import type { RouteParams } from '@/editor/navigation/typings';

import { FlexItem } from '@/components/ui/flex-item';
import { useTreeStore } from '@/core/state/tree';
import { getAvailableTreeForFoldView } from '@/core/state/tree/selectors/get-available-tree-for-fold-view';
import { TreeFold } from '@/editor/components/tree-fold';
import { useEditorStore } from '@/editor/state/editor';
import { isTreeBarVisible } from '@/editor/state/editor/selectors/sidebars/is-tree-bar-visible';

const TreeBar: React.FC = () => {
    const { schemaId } = useParams<RouteParams['schema']>();

    const treeBarVisible = useEditorStore(isTreeBarVisible);

    const treeItems = useTreeStore((state: ITreeState) => getAvailableTreeForFoldView(state, schemaId));

    if (!treeBarVisible || !treeItems) return null;

    return (
        <FlexItem
            $fitScreen
            $scrollableX
            $scrollableY
            $width={350}
            $backgroundColor="#f3f3f3"
            $paddingTop={16}
            $paddingLeft={16}
            $paddingRight={16}
            $paddingBottom={16}
        >
            <TreeFold />
        </FlexItem>
    );
};

export { TreeBar };
