import { create } from "zustand";

import { defaultTree } from "@/core/assets/data/default-tree";
import type { ITreeState } from "@/core/state/tree/typings";

const useTreeStore = create<ITreeState>((set) => ({
  availableComponents: {},
  availableTrees: {
    defaultTree,
  },
  addOrUpdateTree: (name, tree) => {
    set((state) => ({
      availableTrees: {
        ...state.availableTrees,
        [name]: {
          ...(state.availableTrees[name] ?? {}),
          ...tree,
        },
      },
    }));
  },
  updateLeaf: (treeName, leafPath, leaf) => {
    console.log(treeName, leafPath, leaf);
  },
  setOrUpdateAvailableComponents: (
    availableComponents: Record<string, React.FC>,
  ) => {
    set((state) => ({
      availableComponents: {
        ...state.availableComponents,
        ...availableComponents,
      },
    }));
  },
  addOrUpdateAvailableComponent: (name, component) => {
    set((state) => ({
      availableComponents: {
        ...state.availableComponents,
        [name]: component,
      },
    }));
  },
}));

export { useTreeStore };
