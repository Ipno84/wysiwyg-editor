import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getPersonalization } from '@/editor/state/editor/selectors/personalizations/get-personalization';

const getPersonalizationName = createCachedSelector(
    [getPersonalization, (_: IEditorState, personalizationId: string | undefined) => personalizationId],
    (personalization) => personalization?.name,
)((_: IEditorState, personalizationId: string | undefined) => personalizationId);

export { getPersonalizationName };
