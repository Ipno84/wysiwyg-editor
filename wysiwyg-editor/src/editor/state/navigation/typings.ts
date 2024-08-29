import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon';

import { paths } from '@/editor/navigation/paths';

interface CommandLink {
    label: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
        muiName: string;
    };
    to: string;
}

interface INavigationState {
    primaryCommandsLinks: CommandLink[];
    secondaryCommandsLinks: CommandLink[];
    pageTitle: string;
    selectedPath: keyof typeof paths | null;
    setPageTitle: (pageTitle: string) => void;
    setSelectedPath: (selectedPath: keyof typeof paths | null) => void;
}

export type { INavigationState, CommandLink };
