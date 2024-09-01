import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { ITreeState } from '@/core/state/tree/typings';

import { defaultTree } from '@/core/assets/data/default-tree';

const storeName = 'treeStore';

const useTreeStore = create<ITreeState, [['zustand/devtools', never]]>(
    devtools(
        (set) => ({
            availableComponents: {},
            availableTrees: {
                defaultTree,
            },
            addOrUpdateTree: (name, tree) => {
                set(
                    (state) => ({
                        availableTrees: {
                            ...state.availableTrees,
                            [name]: {
                                ...(state.availableTrees[name] ?? {}),
                                ...tree,
                            },
                        },
                    }),
                    undefined,
                    `${storeName}/addOrUpdateTree`,
                );
            },
            updateLeaf: (leafPath, leaf) => {
                // TODO: update single leaf or whole tree when user clicks save
                console.log(leafPath, leaf);
            },
            setOrUpdateAvailableComponents: (availableComponents: Record<string, React.FC>) => {
                set(
                    (state) => ({
                        availableComponents: {
                            ...state.availableComponents,
                            ...availableComponents,
                        },
                    }),
                    undefined,
                    `${storeName}/setOrUpdateAvailableComponents`,
                );
            },
            addOrUpdateAvailableComponent: (name, component) => {
                set(
                    (state) => ({
                        availableComponents: {
                            ...state.availableComponents,
                            [name]: component,
                        },
                    }),
                    undefined,
                    `${storeName}/addOrUpdateAvailableComponent`,
                );
            },
        }),
        { name: storeName, enabled: process.env.NODE_ENV === 'development' },
    ),
);

export { useTreeStore };
