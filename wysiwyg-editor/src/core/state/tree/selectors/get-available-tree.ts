import { createCachedSelector } from "re-reselect";

import { getAvailableTrees } from "@/core/state/tree/selectors/get-available-trees";
import type { ITreeState } from "@/core/state/tree/typings";

const getAvailableTree = createCachedSelector(
  [getAvailableTrees, (_: ITreeState, treeName: string) => treeName],
  (availableTrees, treeName) => {
    if (availableTrees?.[treeName]) {
      return availableTrees[treeName];
    }
    return null;
  },
)((_: ITreeState, treeName: string) => treeName);

export { getAvailableTree };
