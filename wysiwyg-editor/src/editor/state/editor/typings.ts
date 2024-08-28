import { AuthorableProps } from "react";

interface Device {
  id: string;
  label: string;
  brand: string;
  year: number;
  type: "mobile" | "tablet" | "laptop" | "desktop" | "monitor" | "tv" | "watch";
  viewport: [number, number];
  resolutions: [number, number];
}

interface Project {
  id: string;
  name: string;
}

interface Schema {
  id: string;
  name: string;
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

interface IEditorState {
  authorableProps: Record<string, AuthorableProps>;
  authorableState: Record<string, Record<string, any>>;
  selectedAuthorableStateFilter: Record<string, string>;
  commandsBarOpen: boolean;
  treeBarVisible: boolean;
  optionsBarVisible: boolean;
  selectedAuthorableKey: string;
  selectedAuthorableComponentName: string;
  devices: Device[];
  selectedDeviceId: string | null;
  landscapeOrientation: boolean;
  projects: Project[];
  schemas: Schema[];
  components: Component[];
  methods: Method[];
  toggleCommandsBarOpening: () => void;
  setAuthorableProps: (key: string, authorableProps?: AuthorableProps) => void;
  setSelectedAuthorableKey: (
    selectedAuthorableKey: string,
    selectedAuthorableComponentName?: string,
  ) => void;
  setAuthorableState: (
    authorablePropKey: string,
    authorablePropValue: any,
  ) => void;
  setSelectedAuthorableStateFilter: (stateFilterValue: string) => void;
  setSelectedDeviceId: (selectedDeviceId: string | null) => void;
  toggleLandscapeOrientation: () => void;
  removeDevices: (deviceIds: string[]) => void;
  removeProjects: (projectIds: string[]) => void;
  removeSchemas: (schemaIds: string[]) => void;
  removeComponents: (componentIds: string[]) => void;
  removeMethods: (methodIds: string[]) => void;
}

export type { IEditorState, Device, Project, Schema, Component, Method };
