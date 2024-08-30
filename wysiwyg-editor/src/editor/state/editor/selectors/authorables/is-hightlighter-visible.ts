import type { IEditorState } from '@/editor/state/editor/typings';

const isHighlighterVisible = (state: IEditorState) => state.highlighterVisible;

export { isHighlighterVisible };
