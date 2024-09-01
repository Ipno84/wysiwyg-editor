import type { IEditorState } from '@/editor/state/editor/typings';

const getSelectedDeviceType = (state: IEditorState) => state.selectedDeviceType;

export { getSelectedDeviceType };
