import Box from '@mui/material/Box/Box';
import React, { useCallback, useMemo } from 'react';

import type { GridColDef, GridEventListener } from '@mui/x-data-grid';

import { DataGrid } from '@/editor/components/data-grid';
import { useTitle } from '@/editor/hooks/use-title';
import { Segments } from '@/editor/navigation/enum';
import { router } from '@/editor/navigation/router';
import { useEditorStore } from '@/editor/state/editor';
import { removeAbTests as removeAbTestsAction } from '@/editor/state/editor/actions/remove-ab-tests';
import { getAbTests } from '@/editor/state/editor/selectors/ab-tests/get-ab-tests';

const AbTests: React.FC = () => {
    useTitle('A/B Tests');
    const abTests = useEditorStore(getAbTests);
    const removeAbTests = useEditorStore(removeAbTestsAction);

    const columns = useMemo<GridColDef<(typeof abTests)[number]>[]>(() => {
        return [
            { field: 'id', headerName: 'ID', width: 100 },
            {
                field: 'name',
                headerName: 'A/B Test Name',
                editable: false,
                flex: 1,
            },
            {
                field: 'description',
                headerName: 'A/B Test Description',
                editable: false,
                flex: 1,
            },
        ];
    }, []);

    const deleteSelectedAbTests = useCallback(
        (selectedIds: string[]) => {
            removeAbTests(selectedIds);
        },
        [removeAbTests],
    );

    const onRowClick = useCallback<GridEventListener<'rowClick'>>(({ id }) => {
        router.navigate(`/${Segments.AB_TESTS}/${id}`);
    }, []);

    return (
        <Box padding={2} overflow={'hidden'} height={'calc(100dvh - 64px)'}>
            <DataGrid
                columns={columns}
                items={abTests}
                deleteAction={deleteSelectedAbTests}
                onRowClick={onRowClick}
                deleteTitle={`Are you sure you want to delete a/b tests?`}
                deleteMessage={`You are about to delete a/b tests, this action cannot be undone. Do you confirm you want to proceed?`}
            />
        </Box>
    );
};

export { AbTests };
