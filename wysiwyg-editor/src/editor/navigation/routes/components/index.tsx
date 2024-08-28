import { useEditorStore } from "@/editor/state/editor";
import { getComponents } from "@/editor/state/editor/selectors/get-components";
import React, { useCallback, useMemo } from "react";
import type { GridColDef, GridEventListener } from "@mui/x-data-grid";
import Box from "@mui/material/Box/Box";
import { removeComponents as removeComponentsAction } from "@/editor/state/editor/actions/remove-components";
import { DataGrid } from "@/editor/components/data-grid";
import { router } from "@/editor/navigation/router";
import { Segments } from "@/editor/navigation/enum";

const Components: React.FC = () => {
  const components = useEditorStore(getComponents);
  const removeComponents = useEditorStore(removeComponentsAction);

  const columns = useMemo<GridColDef<(typeof components)[number]>[]>(() => {
    return [
      { field: "id", headerName: "ID", width: 100 },
      {
        field: "name",
        headerName: "Component Name",
        editable: false,
        flex: 1,
      },
      {
        field: "description",
        headerName: "Component Description",
        editable: false,
        flex: 1,
      },
    ];
  }, []);

  const deleteSelectedComponents = useCallback(
    (selectedIds: string[]) => {
      removeComponents(selectedIds);
    },
    [removeComponents],
  );

  const onRowClick = useCallback<GridEventListener<"rowClick">>(({ id }) => {
    router.navigate(`/${Segments.COMPONENTS}/${id}`);
  }, []);

  return (
    <Box padding={2} overflow={"hidden"} height={"calc(100dvh - 64px)"}>
      <DataGrid
        columns={columns}
        items={components}
        deleteAction={deleteSelectedComponents}
        onRowClick={onRowClick}
        deleteTitle={`Are you sure you want to delete components?`}
        deleteMessage={`You are about to delete components, this action cannot be undone. Do you confirm you want to proceed?`}
      />
    </Box>
  );
};

export { Components };
