import type { IEditorState } from "@/editor/state/editor/typings";

const getSelectedDeviceId = (state: IEditorState) => state.selectedDeviceId;

export { getSelectedDeviceId };
