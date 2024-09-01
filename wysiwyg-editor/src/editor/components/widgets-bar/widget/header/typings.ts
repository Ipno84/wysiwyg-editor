import type { CardHeaderOwnProps } from '@mui/material/CardHeader/CardHeader';
import type { PropsWithChildren } from 'react';

interface WidgetHeaderProps extends PropsWithChildren {
    title: CardHeaderOwnProps['title'];
    subheader: CardHeaderOwnProps['subheader'];
    widgetName: string;
}

export type { WidgetHeaderProps };
