import type { INavigationState } from '@/editor/state/navigation/typings';

const getPageTitle = (state: INavigationState) => state.pageTitle;

export { getPageTitle };
