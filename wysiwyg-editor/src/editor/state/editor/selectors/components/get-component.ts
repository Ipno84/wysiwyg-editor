import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getComponents } from '@/editor/state/editor/selectors/components/get-components';

const getComponent = createCachedSelector(
    [getComponents, (_: IEditorState, componentId: string | undefined) => componentId],
    (components, componentId) => components.find((component) => component.id === componentId) || null,
)((_: IEditorState, componentId: string | undefined) => componentId);

export { getComponent };
