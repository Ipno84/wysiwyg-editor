import { useEditorStore } from "@/editor/state/editor";
import { getMethods } from "@/editor/state/editor/selectors/get-methods";
import React, { useCallback, useMemo } from "react";
import type { GridColDef, GridEventListener } from "@mui/x-data-grid";
import Box from "@mui/material/Box/Box";
import { removeMethods as removeMethodsAction } from "@/editor/state/editor/actions/remove-methods";
import { DataGrid } from "@/editor/components/data-grid";
import { router } from "@/editor/navigation/router";
import { Segments } from "@/editor/navigation/enum";

const Methods: React.FC = () => {
  const methods = useEditorStore(getMethods);
  const removeMethods = useEditorStore(removeMethodsAction);

  const columns = useMemo<GridColDef<(typeof methods)[number]>[]>(() => {
    return [
      { field: "id", headerName: "ID", width: 100 },
      {
        field: "name",
        headerName: "Method Name",
        editable: false,
        flex: 1,
      },
      {
        field: "description",
        headerName: "Method Description",
        editable: false,
        flex: 1,
      },
    ];
  }, []);

  const deleteSelectedMethods = useCallback(
    (selectedIds: string[]) => {
      removeMethods(selectedIds);
    },
    [removeMethods],
  );

  const onRowClick = useCallback<GridEventListener<"rowClick">>(({ id }) => {
    router.navigate(`/${Segments.METHODS}/${id}`);
  }, []);

  return (
    <Box padding={2} overflow={"hidden"} height={"calc(100dvh - 64px)"}>
      <DataGrid
        columns={columns}
        items={methods}
        deleteAction={deleteSelectedMethods}
        onRowClick={onRowClick}
        deleteTitle={`Are you sure you want to delete methods?`}
        deleteMessage={`You are about to delete methods, this action cannot be undone. Do you confirm you want to proceed?`}
      />
    </Box>
  );
};

export { Methods };
