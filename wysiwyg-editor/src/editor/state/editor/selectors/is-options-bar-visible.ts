import type { IEditorState } from "@/editor/state/editor/typings";

const isOptionsBarVisible = (state: IEditorState) => state.optionsBarVisible;

export { isOptionsBarVisible };
