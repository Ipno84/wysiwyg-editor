import AccountIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DevicesIcon from '@mui/icons-material/Devices';
import ExtensionIcon from '@mui/icons-material/Extension';
import FunctionsIcon from '@mui/icons-material/Functions';
import GroupsIcon from '@mui/icons-material/Groups';
import SchemaIcon from '@mui/icons-material/Schema';
import SettingsIcon from '@mui/icons-material/Settings';
import { create } from 'zustand';

import type { INavigationState } from '@/editor/state/navigation/typings';

import { Segments } from '@/editor/navigation/enum';

const useNavigationStore = create<INavigationState>(() => ({
    primaryCommandsLinks: [
        {
            label: 'Dashboard',
            to: '/',
            Icon: DashboardIcon,
        },
        {
            label: 'Projects',
            to: `/${Segments.PROJECTS}`,
            Icon: AccountTreeIcon,
        },
        {
            label: 'Schemas',
            to: `/${Segments.SCHEMAS}`,
            Icon: SchemaIcon,
        },
        {
            label: 'Components',
            to: `/${Segments.COMPONENTS}`,
            Icon: ExtensionIcon,
        },
        {
            label: 'Methods',
            to: `/${Segments.METHODS}`,
            Icon: FunctionsIcon,
        },
    ],
    secondaryCommandsLinks: [
        {
            label: 'Account',
            to: `/${Segments.ACCOUNT}/:accountId`,
            Icon: AccountIcon,
        },
        {
            label: 'Team',
            to: `/${Segments.TEAM}`,
            Icon: GroupsIcon,
        },
        {
            label: 'Devices',
            to: `/${Segments.DEVICES}`,
            Icon: DevicesIcon,
        },
        {
            label: 'Settings',
            to: `/${Segments.SETTINGS}`,
            Icon: SettingsIcon,
        },
    ],
}));

export { useNavigationStore };
