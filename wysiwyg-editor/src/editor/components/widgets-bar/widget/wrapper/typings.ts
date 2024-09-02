import type { PropsWithChildren } from 'react';

import { WidgetNames } from '@/editor/state/editor/enums';

interface WidgetWrapperProps extends PropsWithChildren {
    widgetName: WidgetNames;
}

export type { WidgetWrapperProps };
