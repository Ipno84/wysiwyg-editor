import type { AuthorableProps } from 'react';
import type { WidgetNames } from '@/editor/state/editor/enums';

interface Device {
    id: string;
    label: string;
    brand: string;
    year: number;
    type: 'mobile' | 'tablet' | 'laptop' | 'desktop' | 'monitor' | 'tv' | 'watch';
    viewport: [number, number];
    resolution: [number, number];
}

interface Project {
    id: string;
    name: string;
    description: string;
}

interface Schema {
    id: string;
    name: string;
    description: string;
}

interface Component {
    id: string;
    name: string;
    description: string;
}

interface Method {
    id: string;
    name: string;
    description: string;
}

interface AbTest {
    id: string;
    name: string;
    description: string;
}

interface Personalization {
    id: string;
    name: string;
    description: string;
}

interface Team {
    id: string;
    name: string;
    description: string;
}

interface IEditorState {
    authorableProps: Record<string, AuthorableProps>;
    authorableState: Record<string, Record<string, any>>;
    selectedAuthorableStateFilter: Record<string, string>;
    commandsBarOpen: boolean;
    treeBarVisible: boolean;
    widgetsBarVisible: boolean;
    highlighterVisible: boolean;
    selectedAuthorableKey: string;
    selectedAuthorableComponentName: string;
    selectedLeafPath: string;
    widgetAsDialog: WidgetNames | null;
    devices: Device[];
    selectedDeviceId: string | null;
    selectedDeviceType: Device['type'] | null;
    landscapeOrientation: boolean;
    projects: Project[];
    schemas: Schema[];
    components: Component[];
    methods: Method[];
    abTests: AbTest[];
    personalizations: Personalization[];
    teams: Team[];
    toggleCommandsBarOpening: () => void;
    setAuthorableProps: (key: string, authorableProps?: AuthorableProps) => void;
    setSelectedAuthorableKey: (selectedAuthorableKey: string, selectedAuthorableComponentName?: string) => void;
    setAuthorableState: (authorablePropKey: string, authorablePropValue: any) => void;
    setSelectedLeafPath: (selectedLeafPath: string) => void;
    setSelectedAuthorableStateFilter: (stateFilterValue: string) => void;
    setSelectedDeviceId: (selectedDeviceId: string | null) => void;
    setSelectedDeviceType: (selectedDeviceType: Device['type'] | null) => void;
    toggleLandscapeOrientation: () => void;
    setCommandsBarOpening: (commandsBarOpen: boolean) => void;
    setTreeBarVisibility: (treeBarVisible: boolean) => void;
    setWidgetsBarVisibility: (widgetsBarVisible: boolean) => void;
    setWidgetAsDialog: (widgetAsDialog: WidgetNames | null) => void;
    setHighlighterVisible: (highlighterVisible: boolean) => void;
    removeDevices: (deviceIds: string[]) => void;
    removeProjects: (projectIds: string[]) => void;
    removeSchemas: (schemaIds: string[]) => void;
    removeComponents: (componentIds: string[]) => void;
    removeMethods: (methodIds: string[]) => void;
    removeAbTests: (abTestIds: string[]) => void;
    removePersonalizations: (personalizationIds: string[]) => void;
    removeTeams: (teamIds: string[]) => void;
}

export type { IEditorState, Device, Project, Schema, Component, Method, AbTest, Personalization, Team };
