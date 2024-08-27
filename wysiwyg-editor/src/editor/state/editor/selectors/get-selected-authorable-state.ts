import { createSelector } from "reselect";

import { getAuthorableState } from "@/editor/state/editor/selectors/get-authorable-state";
import { getSelectedAuthorableKey } from "@/editor/state/editor/selectors/get-selected-authorable-key";

const getSelectedAuthorableState = createSelector(
  [getAuthorableState, getSelectedAuthorableKey],
  (authorableState, selectedAuthorableKey) => {
    if (authorableState[selectedAuthorableKey]) {
      return authorableState[selectedAuthorableKey];
    }
    return null;
  },
);

export { getSelectedAuthorableState };
