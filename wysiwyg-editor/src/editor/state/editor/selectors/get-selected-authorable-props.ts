import { createSelector } from "reselect";

import { getAuthorableProps } from "@/editor/state/editor/selectors/get-authorable-props";
import { getSelectedAuthorableKey } from "@/editor/state/editor/selectors/get-selected-authorable-key";

const getSelectedAuthorableProps = createSelector(
  [getSelectedAuthorableKey, getAuthorableProps],
  (selectedAuthorableKey, authorableProps) => {
    if (authorableProps[selectedAuthorableKey])
      return authorableProps[selectedAuthorableKey];
    return null;
  },
);

export { getSelectedAuthorableProps };
