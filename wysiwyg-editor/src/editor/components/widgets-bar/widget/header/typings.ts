import type { CardHeaderOwnProps } from '@mui/material/CardHeader/CardHeader';
import type { PropsWithChildren } from 'react';

import { WidgetNames } from '@/editor/state/editor/enums';

interface WidgetHeaderProps extends PropsWithChildren {
    title: CardHeaderOwnProps['title'];
    subheader: CardHeaderOwnProps['subheader'];
    widgetName: WidgetNames;
}

export type { WidgetHeaderProps };
