import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import { useTreeViewApiRef } from "@mui/x-tree-view/hooks";
import React, { useEffect } from "react";

import { useOnSelectedItemsChange } from "@/editor/components/tree-fold/hooks/use-on-selected-items-change";
import { useEditorStore } from "@/editor/state/editor";
import { getSelectedAuthorableKey } from "@/editor/state/editor/selectors/get-selected-authorable-key";
import { useTreeStore } from "@/core/state/tree";
import { getAllTreeUuids } from "@/core/state/tree/selectors/get-all-tree-uuids";
import { getAvailableTreeForFoldView } from "@/core/state/tree/selectors/get-available-tree-for-fold-view";
import type { ITreeState } from "@/core/state/tree/typings";

const TreeFold: React.FC = () => {
  const apiRef = useTreeViewApiRef();

  const treeItems = useTreeStore((state: ITreeState) =>
    getAvailableTreeForFoldView(state, "defaultTree"),
  );

  const uuids = useTreeStore((state: ITreeState) =>
    getAllTreeUuids(state, "defaultTree"),
  );

  const selectedAuthorableKey = useEditorStore(getSelectedAuthorableKey);

  useEffect(() => {
    if (selectedAuthorableKey) {
      apiRef
        .current!.getItemDOMElement(selectedAuthorableKey)
        ?.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [apiRef, selectedAuthorableKey]);

  const { onSelectedItemsChange } = useOnSelectedItemsChange(treeItems);

  if (!treeItems) return null;

  return (
    <RichTreeView
      apiRef={apiRef}
      items={treeItems}
      expandedItems={uuids}
      selectedItems={selectedAuthorableKey}
      onSelectedItemsChange={onSelectedItemsChange}
    />
  );
};

export { TreeFold };
