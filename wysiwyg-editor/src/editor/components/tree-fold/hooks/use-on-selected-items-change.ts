import { TreeViewBaseItem } from "@mui/x-tree-view/models";
import { SyntheticEvent, useCallback } from "react";

import { useEditorStore } from "@/editor/state/editor";
import { setSelectedAuthorableKey as setSelectedAuthorableKeyAction } from "@/editor/state/editor/actions/set-selected-authorable-key";

const useOnSelectedItemsChange = (
  treeItems:
    | TreeViewBaseItem<{
        Component?: React.FC | null;
        id: string;
      }>[]
    | null,
) => {
  const setSelectedAuthorableKey = useEditorStore(
    setSelectedAuthorableKeyAction,
  );

  const findById = useCallback(
    (
      items: TreeViewBaseItem<{
        Component?: React.FC | null;
        id: string;
        parentId?: string;
      }>[],
      id: string,
    ):
      | TreeViewBaseItem<{
          Component?: React.FC | null;
          id: string;
          parentId?: string;
        }>
      | undefined => {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
          return items[i];
        } else if (
          items[i].children &&
          items[i].children?.length &&
          typeof items[i].children === "object"
        ) {
          const item = findById(items[i].children ?? [], id);
          if (item) return item;
        }
      }
    },
    [],
  );

  const onSelectedItemsChange = useCallback(
    (_: SyntheticEvent<Element, Event>, itemIds: string | null) => {
      if (!treeItems || !itemIds) return;

      const item = findById(treeItems, itemIds);
      if (
        item &&
        item.id &&
        item.Component &&
        item.Component.authorableProps &&
        item.Component.displayName
      ) {
        setSelectedAuthorableKey(item.id, item.Component.displayName);
      }
    },
    [findById, setSelectedAuthorableKey, treeItems],
  );

  return { onSelectedItemsChange };
};

export { useOnSelectedItemsChange };
