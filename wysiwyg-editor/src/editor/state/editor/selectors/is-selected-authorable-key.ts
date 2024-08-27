import { createCachedSelector } from "re-reselect";

import { getSelectedAuthorableKey } from "@/editor/state/editor/selectors/get-selected-authorable-key";
import type { IEditorState } from "@/editor/state/editor/typings";

const isSelectedAuthorableKey = createCachedSelector(
  [
    getSelectedAuthorableKey,
    (_: IEditorState, authorableKey: string) => authorableKey,
  ],
  (selectedAuthorableKey, authorableKey) =>
    selectedAuthorableKey === authorableKey,
)((_: IEditorState, authorableKey: string) => authorableKey);

export { isSelectedAuthorableKey };
