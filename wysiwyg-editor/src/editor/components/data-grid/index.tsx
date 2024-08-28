import { useCallback, useState } from "react";
import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";
import type {
  GridRowSelectionModel,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { TableToolbar } from "@/editor/components/table-toolbar";
import type { DataGridProps } from "@/editor/components/data-grid/typings";

const DataGrid = <T extends GridValidRowModel>({
  items,
  columns,
  onRowClick,
  deleteAction,
  deleteTitle,
  deleteMessage,
}: DataGridProps<T>) => {
  const [selectedIds, setSelectedIds] = useState<GridRowSelectionModel>([]);

  const onRowSelectionModelChange = useCallback(
    (rowSelectionModel: GridRowSelectionModel) => {
      setSelectedIds(rowSelectionModel);
    },
    [],
  );

  const onDelete = useCallback(
    () => deleteAction(selectedIds as string[]),
    [deleteAction, selectedIds],
  );

  return (
    <MuiDataGrid
      rows={items}
      columns={columns}
      density="comfortable"
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 25,
          },
        },
      }}
      pageSizeOptions={[25]}
      checkboxSelection
      autosizeOnMount
      filterMode="client"
      onRowSelectionModelChange={onRowSelectionModelChange}
      disableRowSelectionOnClick
      onRowClick={onRowClick}
      slots={{
        toolbar: () => (
          <TableToolbar
            deleteActive={selectedIds.length > 0}
            onDelete={onDelete}
            deleteTitle={deleteTitle}
            deleteMessage={deleteMessage}
          />
        ),
      }}
    />
  );
};

export { DataGrid };
