import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import React from 'react';

import { HighlighterVisibility } from '@/editor/components/widgets-bar/widgets/editor-controls/controls/highlighter-visibility';

const EditorControlsWidgetControlsList: React.FC = () => {
    return (
        <List>
            <ListItem>
                <HighlighterVisibility />
            </ListItem>
        </List>
    );
};

export { EditorControlsWidgetControlsList };
