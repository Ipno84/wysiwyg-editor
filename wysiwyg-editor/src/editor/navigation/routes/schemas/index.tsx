import { useEditorStore } from "@/editor/state/editor";
import { getSchemas } from "@/editor/state/editor/selectors/get-schemas";
import React, { useCallback, useMemo } from "react";
import { DataGrid } from "@/editor/components/data-grid";
import type { GridColDef, GridEventListener } from "@mui/x-data-grid";
import Box from "@mui/material/Box/Box";
import { removeSchemas as removeSchemasAction } from "@/editor/state/editor/actions/remove-schemas";
import { router } from "@/editor/navigation/router";
import { Segments } from "@/editor/navigation/enum";

const Schemas: React.FC = () => {
  const schemas = useEditorStore(getSchemas);
  const removeSchemas = useEditorStore(removeSchemasAction);

  const columns = useMemo<GridColDef<(typeof schemas)[number]>[]>(() => {
    return [
      { field: "id", headerName: "ID", width: 100 },
      {
        field: "name",
        headerName: "Schema Name",
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

  const onRowClick = useCallback<GridEventListener<"rowClick">>(({ id }) => {
    router.navigate(`/${Segments.SCHEMAS}/${id}`);
  }, []);

  return (
    <Box padding={2} overflow={"hidden"} height={"calc(100dvh - 64px)"}>
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
