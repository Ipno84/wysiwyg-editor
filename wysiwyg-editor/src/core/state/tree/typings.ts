import type { Tree, Leaf } from "@/core/components/renderer/typings";
import type { PropsWithChildren } from "react";

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
