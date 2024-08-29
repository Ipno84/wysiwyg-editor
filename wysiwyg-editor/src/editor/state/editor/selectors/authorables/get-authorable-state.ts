import type { IEditorState } from "@/editor/state/editor/typings";

const getAuthorableState = (state: IEditorState) => state.authorableState;

export { getAuthorableState };
