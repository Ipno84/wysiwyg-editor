import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import OpenInNewOffIcon from '@mui/icons-material/OpenInNewOff';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton/IconButton';
import React, { useCallback } from 'react';

import type { WidgetHeaderProps } from '@/editor/components/widgets-bar/widget/header/typings';

import { useEditorStore } from '@/editor/state/editor';
import { setWidgetAsDialog as setWidgetAsDialogAction } from '@/editor/state/editor/actions/set-widget-as-dialog';
import { isWidgetAsDialog as isWidgetAsDialogSelector } from '@/editor/state/editor/selectors/sidebars/is-widget-as-dialog';
import { IEditorState } from '@/editor/state/editor/typings';

const WidgetHeader: React.FC<WidgetHeaderProps> = ({ title, subheader, widgetName, children }) => {
    const isWidgetAsDialog = useEditorStore((state: IEditorState) => isWidgetAsDialogSelector(state, widgetName));
    const setWidgetAsDialog = useEditorStore(setWidgetAsDialogAction);

    const toogleWidgetAsDialog = useCallback(() => {
        setWidgetAsDialog(isWidgetAsDialog ? null : widgetName);
    }, [isWidgetAsDialog, setWidgetAsDialog, widgetName]);

    return (
        <>
            <CardHeader
                title={title}
                titleTypographyProps={{ fontWeight: 700 }}
                subheader={subheader}
                action={<IconButton onClick={toogleWidgetAsDialog}>{isWidgetAsDialog ? <OpenInNewOffIcon /> : <OpenInNewIcon />}</IconButton>}
            />
            {children}
            <Divider />
        </>
    );
};

export { WidgetHeader };
