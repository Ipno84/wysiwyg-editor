import { AuthorableProps } from "react";
import { create } from "zustand";

import type { IEditorState } from "@/editor/state/editor/typings";

const useEditorStore = create<IEditorState>((set) => ({
  authorableProps: {},
  authorableState: {},
  selectedAuthorableStateFilter: {},
  commandsBarOpen: false,
  treeBarVisible: true,
  optionsBarVisible: true,
  selectedAuthorableKey: "",
  selectedAuthorableComponentName: "",
  devices: [
    {
      id: "mobile",
      name: "Mobile",
      items: [
        {
          id: "iphone_se_2022",
          label: "Iphone SE (2022)",
          size: [375, 667],
        },
        {
          id: "iphone_12_13_14",
          label: "Iphone 12/13/14",
          size: [390, 844],
        },
        {
          id: "iphone_15",
          label: "Iphone 15",
          size: [393, 852],
        },
        {
          id: "iphone_12_13_14_plus_and_pro_max",
          label: "Iphone 12/13/14/15 Plus and Pro",
          size: [430, 932],
        },
        {
          id: "samsung_galaxy_s23",
          label: "Samsung Galaxy S23",
          size: [412, 915],
        },
        {
          id: "google_pixel_6",
          label: "Google Pixel 6",
          size: [412, 915],
        },
      ],
    },
    {
      id: "tablet",
      name: "Tablet",
      items: [
        {
          id: "ipad_mini_6th_gen",
          label: "iPad Mini (6th gen)",
          size: [744, 1133],
        },
        {
          id: "ipad_9th_gen",
          label: "iPad (9th gen)",
          size: [810, 1080],
        },
        {
          id: "ipad_air_4th_gen",
          label: "iPad Air (4th gen)",
          size: [820, 1180],
        },
        {
          id: "ipad_pro_11",
          label: 'iPad Pro 11"',
          size: [845, 1194],
        },
        {
          id: "ipad_pro_12_9",
          label: 'iPad Pro 12.9"',
          size: [1024, 1366],
        },
      ],
    },
    {
      id: "laptop",
      name: "Laptop/Notebook",
      items: [
        {
          id: "macbook_air_13",
          label: 'MacBook Air 13"',
          size: [1440, 900],
        },
        {
          id: "macbook_pro_14",
          label: 'MacBook Pro 14"',
          size: [1512, 982],
        },
        {
          id: "macbook_pro_16",
          label: 'MacBook Air 16"',
          size: [1728, 1117],
        },
        {
          id: "common_windows_laptop_15_6",
          label: 'Common Windows Laptop 15.6"',
          size: [1920, 1080],
        },
      ],
    },
    {
      id: "desktop",
      name: "Desktop",
      items: [
        {
          id: "small_desktop_monitor",
          label: "Small Desktop Monitor",
          size: [1280, 800],
        },
        {
          id: "standard_desktop_monitor",
          label: "Standard Desktop Monitor",
          size: [1902, 1080],
        },
        {
          id: "large_desktop_monitor",
          label: "Large Desktop Monitor",
          size: [2560, 1440],
        },
        {
          id: "ultrawide_monitor",
          label: "Ultrawide Monitor",
          size: [3440, 1440],
        },
      ],
    },
    {
      id: "smart_tv",
      name: "Smart TVs",
      items: [
        {
          id: "standard_hd_tv",
          label: "Standard HD TV",
          size: [1920, 1080],
        },
        {
          id: "4k_uhd_tv",
          label: "4K UHD TV",
          size: [3840, 2160],
        },
      ],
    },
  ],
  selectedDeviceId: null,
  landscapeOrientation: false,
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
  setSelectedAuthorableKey: (
    selectedAuthorableKey: string,
    selectedAuthorableComponentName?: string,
  ) => {
    set({
      selectedAuthorableKey,
      selectedAuthorableComponentName: selectedAuthorableComponentName ?? "",
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
      landscapeOrientation: !selectedDeviceId
        ? false
        : state.landscapeOrientation,
    }));
  },
  toggleLandscapeOrientation: () => {
    set((state) => ({
      ...state,
      landscapeOrientation: !state.landscapeOrientation,
    }));
  },
}));

export { useEditorStore };
