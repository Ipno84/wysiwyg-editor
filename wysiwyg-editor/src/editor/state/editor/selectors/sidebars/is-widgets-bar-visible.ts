import type { IEditorState } from '@/editor/state/editor/typings';

const isWidgetsBarVisible = (state: IEditorState) => state.widgetsBarVisible;

export { isWidgetsBarVisible };
