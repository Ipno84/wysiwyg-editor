import React from 'react';

import { WidgetWrapper } from '@/editor/components/widgets-bar/widget/wrapper';
import { InfoWidgetContent } from '@/editor/components/widgets-bar/widgets/info/content';
import { InfoWidgetHeader } from '@/editor/components/widgets-bar/widgets/info/header';
import { WidgetNames } from '@/editor/state/editor/enums';

const InfoWidget: React.FC = () => {
    return (
        <WidgetWrapper widgetName={WidgetNames.INFO}>
            <InfoWidgetHeader />
            <InfoWidgetContent />
        </WidgetWrapper>
    );
};

export { InfoWidget };
