import Card from '@mui/material/Card/Card';
import Dialog from '@mui/material/Dialog/Dialog';
import React, { PropsWithChildren, useCallback } from 'react';

import { useEditorStore } from '@/editor/state/editor';
import { setOptionsWidgetAsDialog as setOptionsWidgetAsDialogAction } from '@/editor/state/editor/actions/set-options-widget-as-dialog';
import { isOptionsWidgetAsDialog as isOptionsWidgetAsDialogSelector } from '@/editor/state/editor/selectors/sidebars/is-options-widget-as-dialog';

const ComponentControlsWidgetWrapper: React.FC<PropsWithChildren> = ({ children }) => {
    const isOptionsWidgetAsDialog = useEditorStore(isOptionsWidgetAsDialogSelector);
    const setOptionsWidgetAsDialog = useEditorStore(setOptionsWidgetAsDialogAction);

    const closeOptionsWidgetAsDialog = useCallback(() => setOptionsWidgetAsDialog(false), [setOptionsWidgetAsDialog]);

    if (isOptionsWidgetAsDialog) {
        return (
            <Dialog open={true} onClose={closeOptionsWidgetAsDialog}>
                {children}
            </Dialog>
        );
    }

    return <Card sx={{ marginTop: 2 }}>{children}</Card>;
};

export { ComponentControlsWidgetWrapper };
