import Box from '@mui/material/Box/Box';
import React, { useCallback, useMemo } from 'react';

import type { GridColDef, GridEventListener } from '@mui/x-data-grid';

import { DataGrid } from '@/editor/components/data-grid';
import { useTitle } from '@/editor/hooks/use-title';
import { Segments } from '@/editor/navigation/enum';
import { router } from '@/editor/navigation/router';
import { useEditorStore } from '@/editor/state/editor';
import { removeTeams as removeTeamsAction } from '@/editor/state/editor/actions/remove-teams';
import { getTeams } from '@/editor/state/editor/selectors/teams/get-teams';

const Teams: React.FC = () => {
    useTitle('Teams');
    const teams = useEditorStore(getTeams);
    const removeTeams = useEditorStore(removeTeamsAction);

    const columns = useMemo<GridColDef<(typeof teams)[number]>[]>(() => {
        return [
            { field: 'id', headerName: 'ID', width: 100 },
            {
                field: 'name',
                headerName: 'Team Name',
                editable: false,
                flex: 1,
            },
            {
                field: 'description',
                headerName: 'Team Description',
                editable: false,
                flex: 1,
            },
        ];
    }, []);

    const deleteSelectedTeams = useCallback(
        (selectedIds: string[]) => {
            removeTeams(selectedIds);
        },
        [removeTeams],
    );

    const onRowClick = useCallback<GridEventListener<'rowClick'>>(({ id }) => {
        router.navigate(`/${Segments.TEAMS}/${id}`);
    }, []);

    return (
        <Box padding={2} overflow={'hidden'} height={'calc(100dvh - 64px)'}>
            <DataGrid
                columns={columns}
                items={teams}
                deleteAction={deleteSelectedTeams}
                onRowClick={onRowClick}
                deleteTitle={`Are you sure you want to delete teams?`}
                deleteMessage={`You are about to delete teams, this action cannot be undone. Do you confirm you want to proceed?`}
            />
        </Box>
    );
};

export { Teams };
