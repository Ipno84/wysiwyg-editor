import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DevicesIcon from '@mui/icons-material/Devices';
import ExtensionIcon from '@mui/icons-material/Extension';
import FunctionsIcon from '@mui/icons-material/Functions';
import GroupsIcon from '@mui/icons-material/Groups';
import SchemaIcon from '@mui/icons-material/Schema';
import ScienceIcon from '@mui/icons-material/Science';

import type { CommandLink } from '@/editor/state/navigation/typings';

import { Segments } from '@/editor/navigation/enum';

const primaryCommandsLinks: CommandLink[] = [
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
    {
        label: 'Teams',
        to: `/${Segments.TEAMS}`,
        Icon: GroupsIcon,
    },
    {
        label: 'Devices',
        to: `/${Segments.DEVICES}`,
        Icon: DevicesIcon,
    },
    {
        label: 'Ab Tests',
        to: `/${Segments.AB_TESTS}`,
        Icon: ScienceIcon,
    },
    {
        label: 'Personalizations',
        to: `/${Segments.PERSONALIZATIONS}`,
        Icon: AutoAwesomeIcon,
    },
];

export { primaryCommandsLinks };
