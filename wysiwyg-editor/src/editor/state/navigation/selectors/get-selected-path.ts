import type { INavigationState } from '@/editor/state/navigation/typings';

const getSelectedPath = (state: INavigationState) => state.selectedPath;

export { getSelectedPath };
