import Card from '@mui/material/Card/Card';
import React from 'react';

import { EditorControlsWidgetControlsList } from '@/editor/components/widgets-bar/widgets/editor-controls/controls';
import { EditorControlsWidgetHeader } from '@/editor/components/widgets-bar/widgets/editor-controls/header';

const EditorControlsWidget: React.FC = () => {
    return (
        <Card sx={{ marginTop: 2 }}>
            <EditorControlsWidgetHeader />
            <EditorControlsWidgetControlsList />
        </Card>
    );
};

export { EditorControlsWidget };
