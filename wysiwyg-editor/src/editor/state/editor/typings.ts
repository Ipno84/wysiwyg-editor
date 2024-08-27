import { AuthorableProps } from "react";

interface Device {
  id: string;
  label: string;
  size: [number, number];
}

interface DeviceGroup {
  id: string;
  name: string;
  items: Device[];
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
  devices: DeviceGroup[];
  selectedDeviceId: string | null;
  landscapeOrientation: boolean;
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
}

export type { IEditorState, Device, DeviceGroup };
