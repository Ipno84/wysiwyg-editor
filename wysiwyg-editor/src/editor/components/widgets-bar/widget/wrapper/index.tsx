import Card from '@mui/material/Card/Card';
import Dialog from '@mui/material/Dialog/Dialog';
import React, { useCallback } from 'react';

import type { WidgetWrapperProps } from '@/editor/components/widgets-bar/widget/wrapper/typings';

import { useEditorStore } from '@/editor/state/editor';
import { setWidgetAsDialog as setWidgetAsDialogAction } from '@/editor/state/editor/actions/set-widget-as-dialog';
import { isWidgetAsDialog as isWidgetAsDialogSelector } from '@/editor/state/editor/selectors/sidebars/is-widget-as-dialog';
import { IEditorState } from '@/editor/state/editor/typings';

const WidgetWrapper: React.FC<WidgetWrapperProps> = ({ widgetName, children }) => {
    const isWidgetAsDialog = useEditorStore((state: IEditorState) => isWidgetAsDialogSelector(state, widgetName));
    const setWidgetAsDialog = useEditorStore(setWidgetAsDialogAction);

    const closeWidgetAsDialog = useCallback(() => setWidgetAsDialog(null), [setWidgetAsDialog]);

    if (isWidgetAsDialog) {
        return (
            <Dialog open={true} onClose={closeWidgetAsDialog}>
                {children}
            </Dialog>
        );
    }

    return <Card sx={{ marginTop: 2 }}>{children}</Card>;
};

export { WidgetWrapper };
