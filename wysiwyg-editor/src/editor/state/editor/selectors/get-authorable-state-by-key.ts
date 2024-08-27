import { createCachedSelector } from "re-reselect";

import { getAuthorableState } from "@/editor/state/editor/selectors/get-authorable-state";
import type { IEditorState } from "@/editor/state/editor/typings";

const getAuthorableStateByKey = createCachedSelector(
  [
    getAuthorableState,
    (_: IEditorState, authorablePropKey: string) => authorablePropKey,
  ],
  (authorableState, authorablePropKey) => {
    if (authorableState?.[authorablePropKey]) {
      return authorableState[authorablePropKey];
    }
    return null;
  },
)((_: IEditorState, authorablePropKey: string) => authorablePropKey);

export { getAuthorableStateByKey };
