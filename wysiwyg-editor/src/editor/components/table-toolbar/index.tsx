import React from "react";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import { TableToolbarProps } from "@/editor/components/table-toolbar/typings";
import { TableDelete } from "@/editor/components/table-toolbar/delete";

const TableToolbar: React.FC<TableToolbarProps> = ({
  deleteActive,
  onDelete,
  deleteMessage,
  deleteTitle,
}) => {
  return (
    <Toolbar>
      <TableDelete
        deleteActive={deleteActive}
        onDelete={onDelete}
        deleteMessage={deleteMessage}
        deleteTitle={deleteTitle}
      />
    </Toolbar>
  );
};

export { TableToolbar };
