import AccountIcon from "@mui/icons-material/AccountCircleOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchemaIcon from "@mui/icons-material/DashboardCustomize";
import SettingsIcon from "@mui/icons-material/Settings";
import { create } from "zustand";

import { Segments } from "@/editor/navigation/enum";
import type { INavigationState } from "@/editor/state/navigation/typings";

const useNavigationStore = create<INavigationState>(() => ({
  primaryCommandsLinks: [
    {
      label: "Dashboard",
      to: "/",
      Icon: DashboardIcon,
    },
    {
      label: "Schema",
      to: `/${Segments.PROJECTS}/:projectId/${Segments.SCHEMAS}/:schemaId`,
      Icon: SchemaIcon,
    },
  ],
  secondaryCommandsLinks: [
    {
      label: "Account",
      to: `/${Segments.ACCOUNT}/:accountId`,
      Icon: AccountIcon,
    },
    {
      label: "Settings",
      to: `/${Segments.SETTINGS}`,
      Icon: SettingsIcon,
    },
  ],
}));

export { useNavigationStore };
