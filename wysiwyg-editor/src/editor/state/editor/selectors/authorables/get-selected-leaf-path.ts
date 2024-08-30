import type { IEditorState } from '@/editor/state/editor/typings';

const getSelectedLeafPath = (state: IEditorState) => state.selectedLeafPath;

export { getSelectedLeafPath };
