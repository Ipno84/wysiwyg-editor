import Box from '@mui/material/Box/Box';
import React, { useCallback, useMemo } from 'react';

import type { GridColDef, GridEventListener } from '@mui/x-data-grid';

import { DataGrid } from '@/editor/components/data-grid';
import { useTitle } from '@/editor/hooks/use-title';
import { Segments } from '@/editor/navigation/enum';
import { router } from '@/editor/navigation/router';
import { useEditorStore } from '@/editor/state/editor';
import { removeSchemas as removeSchemasAction } from '@/editor/state/editor/actions/remove-schemas';
import { getSchemas } from '@/editor/state/editor/selectors/schemas/get-schemas';

const Schemas: React.FC = () => {
    useTitle('Schemas');
    const schemas = useEditorStore(getSchemas);
    const removeSchemas = useEditorStore(removeSchemasAction);

    const columns = useMemo<GridColDef<(typeof schemas)[number]>[]>(() => {
        return [
            { field: 'id', headerName: 'ID', width: 100 },
            {
                field: 'name',
                headerName: 'Schema Name',
                editable: false,
                flex: 1,
            },
            {
                field: 'description',
                headerName: 'Schema Description',
                editable: false,
                flex: 1,
            },
        ];
    }, []);

    const deleteSelectedIds = useCallback(
        (selectedIds: string[]) => {
            removeSchemas(selectedIds);
        },
        [removeSchemas],
    );

    const onRowClick = useCallback<GridEventListener<'rowClick'>>(({ id }) => {
        router.navigate(`/${Segments.SCHEMAS}/${id}`);
    }, []);

    return (
        <Box padding={2} overflow={'hidden'} height={'calc(100dvh - 64px)'}>
            <DataGrid
                items={schemas}
                columns={columns}
                onRowClick={onRowClick}
                deleteAction={deleteSelectedIds}
                deleteTitle={`Are you sure you want to delete schemas?`}
                deleteMessage={`You are about to delete schemas, this action cannot be undone. Do you confirm you want to proceed?`}
            />
        </Box>
    );
};

export { Schemas };
