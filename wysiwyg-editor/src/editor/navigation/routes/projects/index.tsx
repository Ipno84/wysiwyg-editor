import { useEditorStore } from "@/editor/state/editor";
import { getProjects } from "@/editor/state/editor/selectors/get-projects";
import React, { useCallback, useMemo } from "react";
import type { GridColDef, GridEventListener } from "@mui/x-data-grid";
import Box from "@mui/material/Box/Box";
import { removeProjects as removeProjectsAction } from "@/editor/state/editor/actions/remove-projects";
import { DataGrid } from "@/editor/components/data-grid";
import { router } from "@/editor/navigation/router";
import { Segments } from "@/editor/navigation/enum";

const Projects: React.FC = () => {
  const projects = useEditorStore(getProjects);
  const removeProjects = useEditorStore(removeProjectsAction);

  const columns = useMemo<GridColDef<(typeof projects)[number]>[]>(() => {
    return [
      { field: "id", headerName: "ID", width: 100 },
      {
        field: "name",
        headerName: "Project Name",
        editable: false,
        flex: 1,
      },
    ];
  }, []);

  const deleteSelectedProjects = useCallback(
    (selectedIds: string[]) => {
      removeProjects(selectedIds);
    },
    [removeProjects],
  );

  const onRowClick = useCallback<GridEventListener<"rowClick">>(({ id }) => {
    router.navigate(`/${Segments.PROJECTS}/${id}`);
  }, []);

  return (
    <Box padding={2} overflow={"hidden"} height={"calc(100dvh - 64px)"}>
      <DataGrid
        columns={columns}
        items={projects}
        deleteAction={deleteSelectedProjects}
        onRowClick={onRowClick}
        deleteTitle={`Are you sure you want to delete projects?`}
        deleteMessage={`You are about to delete projects, this action cannot be undone. Do you confirm you want to proceed?`}
      />
    </Box>
  );
};

export { Projects };
