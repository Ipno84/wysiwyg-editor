import type { IEditorState } from '@/editor/state/editor/typings';

const getPersonalizations = (state: IEditorState) => state.personalizations;

export { getPersonalizations };
