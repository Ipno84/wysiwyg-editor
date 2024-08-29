import type { IEditorState } from "@/editor/state/editor/typings";

const isTreeBarVisible = (state: IEditorState) => state.treeBarVisible;

export { isTreeBarVisible };
