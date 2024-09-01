import CardActions from '@mui/material/CardActions/CardActions';
import React from 'react';

import { WidgetWrapper } from '@/editor/components/widgets-bar/widget/wrapper';
import { ComponentControlsWidgetHeader } from '@/editor/components/widgets-bar/widgets/component-controls/header';
import { OptionsList } from '@/editor/components/widgets-bar/widgets/component-controls/options';
import { Submissions } from '@/editor/components/widgets-bar/widgets/component-controls/submissions';
import { useEditorStore } from '@/editor/state/editor';
import { WidgetNames } from '@/editor/state/editor/enums';
import { getFilteredSelectedAuthorableProps } from '@/editor/state/editor/selectors/authorables/get-filtered-selected-authorable-props';
import { isWidgetsBarVisible } from '@/editor/state/editor/selectors/sidebars/is-widgets-bar-visible';

const ComponentControlsWidget: React.FC = () => {
    const widgetsBarVisibile = useEditorStore(isWidgetsBarVisible);

    const filteredSelectedAuthorableProps = useEditorStore(getFilteredSelectedAuthorableProps);

    if (!widgetsBarVisibile || !filteredSelectedAuthorableProps) return null;

    return (
        <WidgetWrapper widgetName={WidgetNames.COMPONENT_CONTROLS}>
            <ComponentControlsWidgetHeader />
            <OptionsList />
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Submissions />
            </CardActions>
        </WidgetWrapper>
    );
};

export { ComponentControlsWidget };
