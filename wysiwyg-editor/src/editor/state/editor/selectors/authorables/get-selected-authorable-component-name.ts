import type { IEditorState } from "@/editor/state/editor/typings";

const getSelectedAuthorableComponentName = (state: IEditorState) =>
  state.selectedAuthorableComponentName;

export { getSelectedAuthorableComponentName };
