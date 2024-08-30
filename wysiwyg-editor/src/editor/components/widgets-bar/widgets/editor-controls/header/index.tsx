import { Divider } from '@mui/material';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import React from 'react';

const EditorControlsWidgetHeader: React.FC = () => {
    return (
        <>
            <CardHeader title="Editor Controls" titleTypographyProps={{ fontWeight: 700 }} subheader="Simply change some editor settings" />
            <Divider />
        </>
    );
};

export { EditorControlsWidgetHeader };
