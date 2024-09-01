import { AuthorableProps } from 'react';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { WidgetNames } from '@/editor/state/editor/enums';
import type { Device, IEditorState } from '@/editor/state/editor/typings';

import { abTests } from '@/editor/state/editor/data/ab-tests';
import { components } from '@/editor/state/editor/data/components';
import { devices } from '@/editor/state/editor/data/devices';
import { methods } from '@/editor/state/editor/data/methods';
import { personalizations } from '@/editor/state/editor/data/personalizations';
import { projects } from '@/editor/state/editor/data/projects';
import { schemas } from '@/editor/state/editor/data/schemas';
import { teams } from '@/editor/state/editor/data/teams';

const storeName = 'editorStore';

const useEditorStore = create<IEditorState, [['zustand/devtools', never]]>(
    devtools(
        (set) => ({
            authorableProps: {},
            authorableState: {},
            selectedAuthorableStateFilter: {},
            commandsBarOpen: false,
            treeBarVisible: true,
            widgetsBarVisible: true,
            highlighterVisible: true,
            widgetAsDialog: null,
            selectedAuthorableKey: '',
            selectedLeafPath: '',
            selectedAuthorableComponentName: '',
            devices,
            selectedDeviceId: null,
            selectedDeviceType: null,
            landscapeOrientation: false,
            projects,
            schemas,
            components,
            methods,
            abTests,
            personalizations,
            teams,
            toggleCommandsBarOpening: () => {
                set(
                    (state) => ({
                        ...state,
                        commandsBarOpen: !state.commandsBarOpen,
                    }),
                    undefined,
                    `${storeName}/toggleCommandsBarOpening`,
                );
            },
            setAuthorableProps: (key: string, authorableProps?: AuthorableProps) => {
                set(
                    (state) => ({
                        authorableProps: {
                            ...state.authorableProps,
                            [key]: authorableProps ?? {},
                        },
                    }),
                    undefined,
                    `${storeName}/setAuthorableProps`,
                );
            },
            setSelectedAuthorableKey: (selectedAuthorableKey: string, selectedAuthorableComponentName?: string) => {
                set(
                    {
                        selectedAuthorableKey,
                        selectedAuthorableComponentName: selectedAuthorableComponentName ?? '',
                    },
                    undefined,
                    `${storeName}/setSelectedAuthorableKey`,
                );
            },
            setAuthorableState: (authorablePropKey: string, authorablePropValue: any) => {
                set(
                    (state) => {
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
                    },
                    undefined,
                    `${storeName}/setAuthorableState`,
                );
            },
            setSelectedLeafPath: (selectedLeafPath: string) => {
                set((state) => ({ ...state, selectedLeafPath }), undefined, `${storeName}/setSelectedLeafPath`);
            },
            setSelectedAuthorableStateFilter: (stateFilterValue: string) => {
                set(
                    (state) => {
                        const selectedAuthorableKey = state.selectedAuthorableKey;
                        return {
                            ...state,
                            selectedAuthorableStateFilter: {
                                ...state.selectedAuthorableStateFilter,
                                [selectedAuthorableKey]: stateFilterValue,
                            },
                        };
                    },
                    undefined,
                    `${storeName}/setSelectedAuthorableStateFilter`,
                );
            },
            setSelectedDeviceId: (selectedDeviceId: string | null) => {
                set(
                    (state) => ({
                        ...state,
                        selectedDeviceId,
                        landscapeOrientation: !selectedDeviceId ? false : state.landscapeOrientation,
                    }),
                    undefined,
                    `${storeName}/setSelectedDeviceId`,
                );
            },
            setSelectedDeviceType: (selectedDeviceType: Device['type'] | null) => {
                set(
                    (state) => ({
                        ...state,
                        selectedDeviceType,
                        landscapeOrientation: false,
                        selectedDeviceId: null,
                    }),
                    undefined,
                    `${storeName}/setSelectedDeviceType`,
                );
            },
            toggleLandscapeOrientation: () => {
                set(
                    (state) => ({
                        ...state,
                        landscapeOrientation: !state.landscapeOrientation,
                    }),
                    undefined,
                    `${storeName}/toggleLandscapeOrientation`,
                );
            },
            setCommandsBarOpening: (commandsBarOpen: boolean) => {
                set({ commandsBarOpen }, undefined, `${storeName}/setCommandsBarOpening`);
            },
            setTreeBarVisibility: (treeBarVisible: boolean) => {
                set({ treeBarVisible }, undefined, `${storeName}/setTreeBarVisibility`);
            },
            setWidgetsBarVisibility: (widgetsBarVisible: boolean) => {
                set({ widgetsBarVisible }, undefined, `${storeName}/setWidgetsBarVisibility`);
            },
            setWidgetAsDialog: (widgetAsDialog: WidgetNames | null) => {
                set({ widgetAsDialog }, undefined, `${storeName}/setOptionsWidgetAsDialog`);
            },
            setHighlighterVisible: (highlighterVisible: boolean) => {
                set({ highlighterVisible }, undefined, `${storeName}/setHighlighterVisible`);
            },
            removeDevices: (deviceIds: string[]) => {
                set(
                    (state) => ({
                        ...state,
                        devices: state.devices.filter((device) => !deviceIds.includes(device.id)),
                    }),
                    undefined,
                    `${storeName}/removeDevices`,
                );
            },
            removeProjects: (projectIds: string[]) => {
                set(
                    (state) => ({
                        ...state,
                        projects: state.projects.filter((project) => !projectIds.includes(project.id)),
                    }),
                    undefined,
                    `${storeName}/removeProjects`,
                );
            },
            removeSchemas: (schemaIds: string[]) => {
                set(
                    (state) => ({
                        ...state,
                        schemas: state.schemas.filter((schema) => !schemaIds.includes(schema.id)),
                    }),
                    undefined,
                    `${storeName}/removeSchemas`,
                );
            },
            removeComponents: (componentIds: string[]) => {
                set(
                    (state) => ({
                        ...state,
                        components: state.components.filter((component) => !componentIds.includes(component.id)),
                    }),
                    undefined,
                    `${storeName}/removeComponents`,
                );
            },
            removeMethods: (methodIds: string[]) => {
                set(
                    (state) => ({
                        ...state,
                        methods: state.methods.filter((method) => !methodIds.includes(method.id)),
                    }),
                    undefined,
                    `${storeName}/removeMethods`,
                );
            },
            removeAbTests: (abTestIds: string[]) => {
                set(
                    (state) => ({
                        ...state,
                        abTests: state.abTests.filter((abTest) => !abTestIds.includes(abTest.id)),
                    }),
                    undefined,
                    `${storeName}/removeAbTests`,
                );
            },
            removePersonalizations: (personalizationIds: string[]) => {
                set(
                    (state) => ({
                        ...state,
                        personalizations: state.personalizations.filter((personalization) => !personalizationIds.includes(personalization.id)),
                    }),
                    undefined,
                    `${storeName}/removePersonalizations`,
                );
            },
            removeTeams: (teamIds: string[]) => {
                set(
                    (state) => ({
                        ...state,
                        teams: state.teams.filter((team) => !teamIds.includes(team.id)),
                    }),
                    undefined,
                    `${storeName}/removeTeams`,
                );
            },
        }),
        { name: storeName, enabled: process.env.NODE_ENV === 'development' },
    ),
);

export { useEditorStore };
