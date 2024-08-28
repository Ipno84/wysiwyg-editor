import type {
  GridValidRowModel,
  GridColDef,
  GridEventListener,
} from "@mui/x-data-grid";

interface DataGridProps<T extends GridValidRowModel> {
  items: T[];
  columns: GridColDef<T[][number]>[];
  onRowClick?: GridEventListener<"rowClick">;
  deleteAction: (selectedIds: string[]) => void;
  deleteTitle: string;
  deleteMessage: string;
}

export type { DataGridProps };
