import type { IEditorState } from "@/editor/state/editor/typings";

const getAuthorableStateFilters = (state: IEditorState) =>
  state.selectedAuthorableStateFilter;

export { getAuthorableStateFilters };
