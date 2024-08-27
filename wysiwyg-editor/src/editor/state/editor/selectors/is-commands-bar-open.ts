import type { IEditorState } from "@/editor/state/editor/typings";

const isCommandsBarOpen = (state: IEditorState) => state.commandsBarOpen;

export { isCommandsBarOpen };
