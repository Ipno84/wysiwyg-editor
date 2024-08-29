import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getComponent } from '@/editor/state/editor/selectors/components/get-component';

const getComponentDescription = createCachedSelector(
    [getComponent, (_: IEditorState, componentId: string | undefined) => componentId],
    (component) => component?.description,
)((_: IEditorState, componentId: string | undefined) => componentId);

export { getComponentDescription };
