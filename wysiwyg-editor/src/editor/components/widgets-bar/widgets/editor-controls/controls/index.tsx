import List from '@mui/material/List/List';
import React from 'react';

import { DevicesControls } from '@/editor/components/widgets-bar/widgets/editor-controls/controls/devices';
import { HighlighterVisibility } from '@/editor/components/widgets-bar/widgets/editor-controls/controls/highlighter-visibility';

const EditorControlsWidgetControlsList: React.FC = () => {
    return (
        <List>
            <HighlighterVisibility />
            <DevicesControls />
        </List>
    );
};

export { EditorControlsWidgetControlsList };
