import type { IEditorState } from "@/editor/state/editor/typings";

const toggleCommandsBarOpening = (state: IEditorState) =>
  state.toggleCommandsBarOpening;

export { toggleCommandsBarOpening };
