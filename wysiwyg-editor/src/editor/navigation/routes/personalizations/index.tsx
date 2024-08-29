import Box from '@mui/material/Box/Box';
import React, { useCallback, useMemo } from 'react';

import type { GridColDef, GridEventListener } from '@mui/x-data-grid';

import { DataGrid } from '@/editor/components/data-grid';
import { useTitle } from '@/editor/hooks/use-title';
import { Segments } from '@/editor/navigation/enum';
import { router } from '@/editor/navigation/router';
import { useEditorStore } from '@/editor/state/editor';
import { removePersonalizations as removePersonalizationsAction } from '@/editor/state/editor/actions/remove-personalizations';
import { getPersonalizations } from '@/editor/state/editor/selectors/personalizations/get-personalizations';

const Personalizations: React.FC = () => {
    useTitle('Personalizations');
    const personalizations = useEditorStore(getPersonalizations);
    const removePersonalizations = useEditorStore(removePersonalizationsAction);

    const columns = useMemo<GridColDef<(typeof personalizations)[number]>[]>(() => {
        return [
            { field: 'id', headerName: 'ID', width: 100 },
            {
                field: 'name',
                headerName: 'Personalization Name',
                editable: false,
                flex: 1,
            },
            {
                field: 'description',
                headerName: 'Personalization Description',
                editable: false,
                flex: 1,
            },
        ];
    }, []);

    const deleteSelectedPersonalizations = useCallback(
        (selectedIds: string[]) => {
            removePersonalizations(selectedIds);
        },
        [removePersonalizations],
    );

    const onRowClick = useCallback<GridEventListener<'rowClick'>>(({ id }) => {
        router.navigate(`/${Segments.PERSONALIZATIONS}/${id}`);
    }, []);

    return (
        <Box padding={2} overflow={'hidden'} height={'calc(100dvh - 64px)'}>
            <DataGrid
                columns={columns}
                items={personalizations}
                deleteAction={deleteSelectedPersonalizations}
                onRowClick={onRowClick}
                deleteTitle={`Are you sure you want to delete personalizations?`}
                deleteMessage={`You are about to delete personalizations, this action cannot be undone. Do you confirm you want to proceed?`}
            />
        </Box>
    );
};

export { Personalizations };
