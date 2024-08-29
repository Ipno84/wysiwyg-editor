import { createCachedSelector } from 're-reselect';

import type { INavigationState } from '@/editor/state/navigation/typings';

import { paths } from '@/editor/navigation/paths';
import { getSelectedPath } from '@/editor/state/navigation/selectors/get-selected-path';

const isViewableByPath = createCachedSelector(
    [getSelectedPath, (_: INavigationState, viewablePaths: (keyof typeof paths)[] | boolean) => viewablePaths],
    (selectedPath, viewablePaths) => {
        if (typeof viewablePaths === 'boolean') return viewablePaths;
        if (selectedPath) return viewablePaths.includes(selectedPath);
        return false;
    },
)((_: INavigationState, viewablePaths: (keyof typeof paths)[] | boolean) =>
    typeof viewablePaths === 'boolean' ? String(viewablePaths) : viewablePaths.join('_'),
);

export { isViewableByPath };
