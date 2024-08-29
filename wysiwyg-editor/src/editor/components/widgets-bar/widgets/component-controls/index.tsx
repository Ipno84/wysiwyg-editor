import CardActions from '@mui/material/CardActions/CardActions';
import React from 'react';

import { ComponentControlsWidgetHeader } from '@/editor/components/widgets-bar/widgets/component-controls/header';
import { OptionsList } from '@/editor/components/widgets-bar/widgets/component-controls/options';
import { Submissions } from '@/editor/components/widgets-bar/widgets/component-controls/submissions';
import { ComponentControlsWidgetWrapper } from '@/editor/components/widgets-bar/widgets/component-controls/wrapper';
import { useEditorStore } from '@/editor/state/editor';
import { getFilteredSelectedAuthorableProps } from '@/editor/state/editor/selectors/authorables/get-filtered-selected-authorable-props';
import { isWidgetsBarVisible } from '@/editor/state/editor/selectors/sidebars/is-widgets-bar-visible';

const ComponentControlsWidget: React.FC = () => {
    const widgetsBarVisibile = useEditorStore(isWidgetsBarVisible);

    const filteredSelectedAuthorableProps = useEditorStore(getFilteredSelectedAuthorableProps);

    if (!widgetsBarVisibile || !filteredSelectedAuthorableProps) return null;

    return (
        <ComponentControlsWidgetWrapper>
            <ComponentControlsWidgetHeader />
            <OptionsList />
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Submissions />
            </CardActions>
        </ComponentControlsWidgetWrapper>
    );
};

export { ComponentControlsWidget };
