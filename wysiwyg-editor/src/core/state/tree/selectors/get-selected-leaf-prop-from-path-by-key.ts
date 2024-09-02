import { createCachedSelector } from 're-reselect';

import type { ITreeState } from '@/core/state/tree/typings';

import { getSelectedLeafPropsFromPath } from '@/core/state/tree/selectors/get-selected-leaf-props-from-path';

const getSelectedLeafPropFromPathByKey = createCachedSelector(
    [
        getSelectedLeafPropsFromPath,
        (_: ITreeState, path: string | undefined) => path,
        (_: ITreeState, __: string | undefined, propKey: string | undefined) => propKey,
    ],
    (props, _, propKey) => (propKey ? props?.[propKey] : null),
)((_: ITreeState, path: string | undefined, propKey: string | undefined) => `${path}_${propKey}`);

export { getSelectedLeafPropFromPathByKey };
