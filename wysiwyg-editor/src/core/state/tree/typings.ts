import type { PropsWithChildren } from "react";

import type { Leaf, Tree } from "@/components/core/renderer/typings";

interface ITreeState {
  availableTrees: Record<string, Tree>;
  availableComponents: Record<
    string,
    | React.FC<PropsWithChildren & { parentPath?: string; uuid?: string }>
    | ((props: any) => JSX.Element)
  >;
  addOrUpdateTree: (name: string, tree: Tree) => void;
  updateLeaf: (treeName: string, leafPath: string, leaf: Leaf) => void;
  setOrUpdateAvailableComponents: (
    availableComponents: Record<
      string,
      | React.FC<PropsWithChildren & { parentPath?: string; uuid?: string }>
      | ((props: any) => JSX.Element)
    >,
  ) => void;
  addOrUpdateAvailableComponent: (name: string, component: React.FC) => void;
}

export type { ITreeState };
