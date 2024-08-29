import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { ITreeState } from '@/core/state/tree/typings';

import { defaultTree } from '@/core/assets/data/default-tree';

const useTreeStore = create<ITreeState, [['zustand/devtools', never]]>(
    devtools((set) => ({
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
            // TODO: update single leaf or whole tree when user clicks save
            console.log(treeName, leafPath, leaf);
        },
        setOrUpdateAvailableComponents: (availableComponents: Record<string, React.FC>) => {
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
    })),
);

export { useTreeStore };
