import AccountIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

import type { CommandLink } from '@/editor/state/navigation/typings';

import { Segments } from '@/editor/navigation/enum';

const secondaryCommandsLinks: CommandLink[] = [
    {
        label: 'Account',
        to: `/${Segments.ACCOUNT}/:accountId`,
        Icon: AccountIcon,
    },
    {
        label: 'Settings',
        to: `/${Segments.SETTINGS}`,
        Icon: SettingsIcon,
    },
];

export { secondaryCommandsLinks };
