import type { IEditorState } from "@/editor/state/editor/typings";

const getSelectedAuthorableKey = (state: IEditorState) =>
  state.selectedAuthorableKey;

export { getSelectedAuthorableKey };
