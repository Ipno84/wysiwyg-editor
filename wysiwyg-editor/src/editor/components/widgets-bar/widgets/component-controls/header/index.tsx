import CardHeader from '@mui/material/CardHeader/CardHeader';
import React from 'react';

import { WidgetHeader } from '@/editor/components/widgets-bar/widget/header';
import { OptionsFilter } from '@/editor/components/widgets-bar/widgets/component-controls/filter';
import { WidgetNames } from '@/editor/state/editor/enums';

const ComponentControlsWidgetHeader: React.FC = () => {
    return (
        <WidgetHeader
            title="Controls"
            subheader="Changing the following options will update the component look and feel. Filter the options using the dropdown below."
            widgetName={WidgetNames.COMPONENT_CONTROLS}
        >
            <CardHeader subheader="Filter by" subheaderTypographyProps={{ fontWeight: 700 }} action={<OptionsFilter />} />
        </WidgetHeader>
    );
};

export { ComponentControlsWidgetHeader };
