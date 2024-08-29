import Card from '@mui/material/Card/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import React from 'react';

import { Info } from '@/editor/components/widgets-bar/info';
import { OptionsList } from '@/editor/components/widgets-bar/options';
import { Submissions } from '@/editor/components/widgets-bar/submissions';
import { OptionsFilter } from '@/editor/components/widgets-bar/widgets/component-controls/filter';
import { useEditorStore } from '@/editor/state/editor';
import { getFilteredSelectedAuthorableProps } from '@/editor/state/editor/selectors/authorables/get-filtered-selected-authorable-props';
import { isWidgetsBarVisible } from '@/editor/state/editor/selectors/sidebars/is-widgets-bar-visible';

const WidgetsBar: React.FC = () => {
    const widgetsBarVisibile = useEditorStore(isWidgetsBarVisible);

    const filteredSelectedAuthorableProps = useEditorStore(getFilteredSelectedAuthorableProps);

    if (!widgetsBarVisibile || !filteredSelectedAuthorableProps) return null;

    return (
        <>
            <Info />
            <Card sx={{ marginTop: 2 }}>
                <CardHeader
                    title="Options"
                    titleTypographyProps={{ fontWeight: 700 }}
                    subheader="Changing the following options will update the component look and feel. Filter the options using the dropdown below."
                />
                <CardHeader subheader="Filter by" action={<OptionsFilter />} />
                <Divider />
                <Stack direction={'column'} divider={<Divider orientation="horizontal" flexItem />} spacing={2} paddingTop={2} paddingBottom={2}>
                    <OptionsList />
                    <Submissions />
                </Stack>
            </Card>
        </>
    );
};

export { WidgetsBar };
