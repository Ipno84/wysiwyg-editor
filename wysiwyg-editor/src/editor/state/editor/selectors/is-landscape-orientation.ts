import type { IEditorState } from "@/editor/state/editor/typings";

const isLandscapeOrientation = (state: IEditorState) =>
  state.landscapeOrientation;

export { isLandscapeOrientation };
