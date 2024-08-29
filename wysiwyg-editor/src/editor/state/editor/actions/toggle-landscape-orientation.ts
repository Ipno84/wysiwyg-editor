import type { IEditorState } from "@/editor/state/editor/typings";

const toggleLandscapeOrientation = (state: IEditorState) =>
  state.toggleLandscapeOrientation;

export { toggleLandscapeOrientation };
