import Box from '@mui/material/Box/Box';
import React, { useCallback, useMemo } from 'react';

import type { GridColDef } from '@mui/x-data-grid';

import { DataGrid } from '@/editor/components/data-grid';
import { useTitle } from '@/editor/hooks/use-title';
import { useEditorStore } from '@/editor/state/editor';
import { removeDevices as removeDevicesAction } from '@/editor/state/editor/actions/remove-devices';
import { getDevices } from '@/editor/state/editor/selectors/devices/get-devices';

const Devices: React.FC = () => {
    useTitle('Devices');
    const devices = useEditorStore(getDevices);
    const removeDevices = useEditorStore(removeDevicesAction);

    const columns = useMemo<GridColDef<(typeof devices)[number]>[]>(() => {
        return [
            { field: 'id', headerName: 'ID', width: 100 },
            {
                field: 'label',
                headerName: 'Device Name',
                editable: false,
                flex: 1,
            },
            {
                field: 'type',
                headerName: 'Type',
                editable: false,
                flex: 1,
                renderCell: (params) => params.row.type.charAt(0).toUpperCase() + params.row.type.slice(1),
            },
            {
                field: 'brand',
                headerName: 'Brand',
                editable: false,
                flex: 1,
            },
            {
                field: 'year',
                headerName: 'Year',
                editable: false,
                flex: 1,
            },
            {
                field: 'resolution',
                headerName: 'Resolution',
                editable: false,
                flex: 1,
                renderCell: (params) => params.row.resolution.join('x'),
            },
            {
                field: 'viewport',
                headerName: 'Viewport',
                editable: false,
                flex: 1,
                renderCell: (params) => params.row.viewport.join('x'),
            },
        ];
    }, []);

    const deleteSelectedIds = useCallback(
        (selectedIds: string[]) => {
            removeDevices(selectedIds);
        },
        [removeDevices],
    );

    return (
        <Box padding={2} overflow={'hidden'} height={'calc(100dvh - 64px)'}>
            <DataGrid
                deleteAction={deleteSelectedIds}
                items={devices}
                columns={columns}
                deleteTitle={`Are you sure you want to delete devices?`}
                deleteMessage={`You are about to delete devices, this action cannot be undone. Do you confirm you want to proceed?`}
            />
        </Box>
    );
};

export { Devices };
