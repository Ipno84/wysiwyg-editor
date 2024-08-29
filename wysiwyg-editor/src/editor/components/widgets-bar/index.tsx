import React from 'react';

import { ComponentControlsWidget } from '@/editor/components/widgets-bar/widgets/component-controls';
import { InfoWidget } from '@/editor/components/widgets-bar/widgets/info';
import { useEditorStore } from '@/editor/state/editor';
import { getFilteredSelectedAuthorableProps } from '@/editor/state/editor/selectors/authorables/get-filtered-selected-authorable-props';
import { isWidgetsBarVisible } from '@/editor/state/editor/selectors/sidebars/is-widgets-bar-visible';

const WidgetsBar: React.FC = () => {
    const widgetsBarVisibile = useEditorStore(isWidgetsBarVisible);

    const filteredSelectedAuthorableProps = useEditorStore(getFilteredSelectedAuthorableProps);

    if (!widgetsBarVisibile || !filteredSelectedAuthorableProps) return null;

    return (
        <>
            <InfoWidget />
            <ComponentControlsWidget />
        </>
    );
};

export { WidgetsBar };
