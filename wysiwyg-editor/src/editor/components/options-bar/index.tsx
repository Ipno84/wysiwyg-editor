import Card from '@mui/material/Card/Card';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import React from 'react';

import { OptionsFilter } from '@/editor/components/options-bar/filter';
import { Info } from '@/editor/components/options-bar/info';
// import { OptionsBarHeader } from "@/editor/components/options-bar/header";
import { OptionsList } from '@/editor/components/options-bar/options';
import { Submissions } from '@/editor/components/options-bar/submissions';
import { useEditorStore } from '@/editor/state/editor';
import { getFilteredSelectedAuthorableProps } from '@/editor/state/editor/selectors/authorables/get-filtered-selected-authorable-props';
import { isOptionsBarVisible } from '@/editor/state/editor/selectors/sidebars/is-options-bar-visible';

const OptionsBar: React.FC = () => {
    const optionsBarVisibile = useEditorStore(isOptionsBarVisible);

    const filteredSelectedAuthorableProps = useEditorStore(getFilteredSelectedAuthorableProps);

    if (!optionsBarVisibile || !filteredSelectedAuthorableProps) return null;

    return (
        <>
            <Info />
            <Card sx={{ marginTop: 2 }}>
                <Stack
                    direction={'column'}
                    divider={<Divider orientation="horizontal" flexItem />}
                    spacing={2}
                    bgcolor={'#ffffff'}
                    paddingTop={2}
                    paddingBottom={2}
                >
                    <OptionsFilter />
                    <OptionsList />
                    <Submissions />
                </Stack>
            </Card>
        </>
    );
};

export { OptionsBar };
