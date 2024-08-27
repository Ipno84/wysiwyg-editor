import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon';

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
}

export type { INavigationState, CommandLink };
