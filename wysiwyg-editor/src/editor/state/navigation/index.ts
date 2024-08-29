import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { INavigationState } from '@/editor/state/navigation/typings';

import { paths } from '@/editor/navigation/paths';
import { primaryCommandsLinks } from '@/editor/state/navigation/data/primary-commands-links';
import { secondaryCommandsLinks } from '@/editor/state/navigation/data/secondary-commands-links';

const useNavigationStore = create<INavigationState, [['zustand/devtools', never]]>(
    devtools((set) => ({
        primaryCommandsLinks,
        secondaryCommandsLinks,
        pageTitle: '',
        selectedPath: null,
        setPageTitle: (pageTitle: string) => set((state) => ({ ...state, pageTitle })),
        setSelectedPath: (selectedPath: keyof typeof paths | null) => set((state) => ({ ...state, selectedPath })),
    })),
);

export { useNavigationStore };
