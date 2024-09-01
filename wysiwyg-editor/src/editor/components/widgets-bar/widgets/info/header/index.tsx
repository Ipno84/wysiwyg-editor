import React from 'react';

import { WidgetHeader } from '@/editor/components/widgets-bar/widget/header';
import { WidgetNames } from '@/editor/state/editor/enums';

const InfoWidgetHeader: React.FC = () => (
    <WidgetHeader title="Details" subheader="Informations about currently selected component" widgetName={WidgetNames.INFO} />
);

export { InfoWidgetHeader };
