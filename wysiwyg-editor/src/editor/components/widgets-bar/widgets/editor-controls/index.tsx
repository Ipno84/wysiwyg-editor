import React from 'react';

import { WidgetWrapper } from '@/editor/components/widgets-bar/widget/wrapper';
import { EditorControlsWidgetControlsList } from '@/editor/components/widgets-bar/widgets/editor-controls/controls';
import { EditorControlsWidgetHeader } from '@/editor/components/widgets-bar/widgets/editor-controls/header';
import { WidgetNames } from '@/editor/state/editor/enums';

const EditorControlsWidget: React.FC = () => {
    return (
        <WidgetWrapper widgetName={WidgetNames.EDITOR_CONTROLS}>
            <EditorControlsWidgetHeader />
            <EditorControlsWidgetControlsList />
        </WidgetWrapper>
    );
};

export { EditorControlsWidget };
