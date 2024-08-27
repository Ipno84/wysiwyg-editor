import React from "react";

import { TreeFold } from "@/editor/components/tree-fold";
import { FlexItem } from "@/components/ui/flex-item";
import { useEditorStore } from "@/editor/state/editor";
import { isTreeBarVisible } from "@/state/editor/selectors/is-tree-bar-visible";
import { useTreeStore } from "@/core/state/tree";
import { getAvailableTreeForFoldView } from "@/core/state/tree/selectors/get-available-tree-for-fold-view";
import type { ITreeState } from "@/core/state/tree/typings";

const TreeBar: React.FC = () => {
  const treeBarVisible = useEditorStore(isTreeBarVisible);

  const treeItems = useTreeStore((state: ITreeState) =>
    getAvailableTreeForFoldView(state, "defaultTree"),
  );

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
