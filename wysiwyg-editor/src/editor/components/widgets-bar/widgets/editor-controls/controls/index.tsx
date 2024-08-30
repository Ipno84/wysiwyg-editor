import List from '@mui/material/List/List';
import React from 'react';

import { HighlighterVisibility } from '@/editor/components/widgets-bar/widgets/editor-controls/controls/highlighter-visibility';

const EditorControlsWidgetControlsList: React.FC = () => {
    return (
        <List>
            <HighlighterVisibility />
        </List>
    );
};

export { EditorControlsWidgetControlsList };
