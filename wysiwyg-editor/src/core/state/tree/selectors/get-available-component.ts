import { createCachedSelector } from "re-reselect";

import { getAvailableComponents } from "@/core/state/tree/selectors/get-available-components";
import type { ITreeState } from "@/core/state/tree/typings";

const getAvailableComponent = createCachedSelector(
  [
    getAvailableComponents,
    (_: ITreeState, componentName: string | undefined) => componentName,
  ],
  (availableComponents, componentName) => {
    if (componentName && availableComponents?.[componentName]) {
      return availableComponents[componentName];
    }
    return null;
  },
)((_: ITreeState, componentName?: string) => componentName ?? "");

export { getAvailableComponent };
