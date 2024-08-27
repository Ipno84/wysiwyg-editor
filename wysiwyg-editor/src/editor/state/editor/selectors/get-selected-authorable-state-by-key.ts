import { createCachedSelector } from "re-reselect";

import { getSelectedAuthorableState } from "@/editor/state/editor/selectors/get-selected-authorable-state";
import type { IEditorState } from "@/editor/state/editor/typings";

const getSelectedAuthorableStateByKey = createCachedSelector(
  [
    getSelectedAuthorableState,
    (_: IEditorState, authorablePropKey: string) => authorablePropKey,
  ],
  (selectedAuthorableState, authorablePropKey) => {
    if (selectedAuthorableState?.[authorablePropKey]) {
      return selectedAuthorableState[authorablePropKey];
    }
    return null;
  },
)((_: IEditorState, authorablePropKey: string) => authorablePropKey);

export { getSelectedAuthorableStateByKey };
