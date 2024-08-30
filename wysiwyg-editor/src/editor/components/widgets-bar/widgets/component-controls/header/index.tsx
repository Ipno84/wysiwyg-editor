import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import OpenInNewOffIcon from '@mui/icons-material/OpenInNewOff';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton/IconButton';
import React from 'react';

import { OptionsFilter } from '@/editor/components/widgets-bar/widgets/component-controls/filter';
import { useEditorStore } from '@/editor/state/editor';
import { toogleOptionsWidgetAsDialog as toogleOptionsWidgetAsDialogAction } from '@/editor/state/editor/actions/toggle-options-widget-as-dialog';
import { isOptionsWidgetAsDialog as isOptionsWidgetAsDialogSelector } from '@/editor/state/editor/selectors/sidebars/is-options-widget-as-dialog';

const ComponentControlsWidgetHeader: React.FC = () => {
    const isOptionsWidgetAsDialog = useEditorStore(isOptionsWidgetAsDialogSelector);
    const toogleOptionsWidgetAsDialog = useEditorStore(toogleOptionsWidgetAsDialogAction);

    return (
        <>
            <CardHeader
                title="Controls"
                titleTypographyProps={{ fontWeight: 700 }}
                subheader="Changing the following options will update the component look and feel. Filter the options using the dropdown below."
                action={<IconButton onClick={toogleOptionsWidgetAsDialog}>{isOptionsWidgetAsDialog ? <OpenInNewOffIcon /> : <OpenInNewIcon />}</IconButton>}
            />
            <CardHeader subheader="Filter by" subheaderTypographyProps={{ fontWeight: 700 }} action={<OptionsFilter />} />
            <Divider />
        </>
    );
};

export { ComponentControlsWidgetHeader };
