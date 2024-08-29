import { AuthorableProps } from 'react';
import { create } from 'zustand';

import type { IEditorState } from '@/editor/state/editor/typings';

import { abTests } from '@/editor/state/editor/data/ab-tests';
import { components } from '@/editor/state/editor/data/components';
import { devices } from '@/editor/state/editor/data/devices';
import { methods } from '@/editor/state/editor/data/methods';
import { personalizations } from '@/editor/state/editor/data/personalizations';
import { projects } from '@/editor/state/editor/data/projects';
import { schemas } from '@/editor/state/editor/data/schemas';
import { teams } from '@/editor/state/editor/data/teams';

const useEditorStore = create<IEditorState>((set) => ({
    authorableProps: {},
    authorableState: {},
    selectedAuthorableStateFilter: {},
    commandsBarOpen: false,
    treeBarVisible: true,
    optionsBarVisible: true,
    selectedAuthorableKey: '',
    selectedAuthorableComponentName: '',
    devices,
    selectedDeviceId: null,
    landscapeOrientation: false,
    projects,
    schemas,
    components,
    methods,
    abTests,
    personalizations,
    teams,
    setAuthorableProps: (key: string, authorableProps?: AuthorableProps) => {
        set((state) => ({
            authorableProps: {
                ...state.authorableProps,
                [key]: authorableProps ?? {},
            },
        }));
    },
    setCommandsBarOpening: (commandsBarOpen: boolean) => {
        set({ commandsBarOpen });
    },
    toggleCommandsBarOpening: () => {
        set((state) => ({
            ...state,
            commandsBarOpen: !state.commandsBarOpen,
        }));
    },
    setTreeBarVisibility: (treeBarVisible: boolean) => {
        set({ treeBarVisible });
    },
    setOptionsBarVisibility: (optionsBarVisible: boolean) => {
        set({ optionsBarVisible });
    },
    setSelectedAuthorableKey: (selectedAuthorableKey: string, selectedAuthorableComponentName?: string) => {
        set({
            selectedAuthorableKey,
            selectedAuthorableComponentName: selectedAuthorableComponentName ?? '',
        });
    },
    setAuthorableState: (authorablePropKey: string, authorablePropValue: any) => {
        set((state) => {
            const selectedAuthorableKey = state.selectedAuthorableKey;
            return {
                ...state,
                authorableState: {
                    ...state.authorableState,
                    [selectedAuthorableKey]: {
                        ...(state.authorableState[selectedAuthorableKey] ?? {}),
                        [authorablePropKey]: authorablePropValue,
                    },
                },
            };
        });
    },
    setSelectedAuthorableStateFilter: (stateFilterValue: string) => {
        set((state) => {
            const selectedAuthorableKey = state.selectedAuthorableKey;
            return {
                ...state,
                selectedAuthorableStateFilter: {
                    ...state.selectedAuthorableStateFilter,
                    [selectedAuthorableKey]: stateFilterValue,
                },
            };
        });
    },
    setSelectedDeviceId: (selectedDeviceId: string | null) => {
        set((state) => ({
            ...state,
            selectedDeviceId,
            landscapeOrientation: !selectedDeviceId ? false : state.landscapeOrientation,
        }));
    },
    toggleLandscapeOrientation: () => {
        set((state) => ({
            ...state,
            landscapeOrientation: !state.landscapeOrientation,
        }));
    },
    removeDevices: (deviceIds: string[]) => {
        set((state) => ({
            ...state,
            devices: state.devices.filter((device) => !deviceIds.includes(device.id)),
        }));
    },
    removeProjects: (projectIds: string[]) => {
        set((state) => ({
            ...state,
            projects: state.projects.filter((project) => !projectIds.includes(project.id)),
        }));
    },
    removeSchemas: (schemaIds: string[]) => {
        set((state) => ({
            ...state,
            schemas: state.schemas.filter((schema) => !schemaIds.includes(schema.id)),
        }));
    },
    removeComponents: (componentIds: string[]) => {
        set((state) => ({
            ...state,
            components: state.components.filter((component) => !componentIds.includes(component.id)),
        }));
    },
    removeMethods: (methodIds: string[]) => {
        set((state) => ({
            ...state,
            methods: state.methods.filter((method) => !methodIds.includes(method.id)),
        }));
    },
    removeAbTests: (abTestIds: string[]) => {
        set((state) => ({
            ...state,
            abTests: state.abTests.filter((abTest) => !abTestIds.includes(abTest.id)),
        }));
    },
    removePersonalizations: (personalizationIds: string[]) => {
        set((state) => ({
            ...state,
            personalizations: state.personalizations.filter((personalization) => !personalizationIds.includes(personalization.id)),
        }));
    },
    removeTeams: (teamIds: string[]) => {
        set((state) => ({
            ...state,
            teams: state.teams.filter((team) => !teamIds.includes(team.id)),
        }));
    },
}));

export { useEditorStore };
