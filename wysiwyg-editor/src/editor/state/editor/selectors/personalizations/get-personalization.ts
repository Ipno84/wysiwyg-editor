import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getPersonalizations } from '@/editor/state/editor/selectors/personalizations/get-personalizations';

const getPersonalization = createCachedSelector(
    [getPersonalizations, (_: IEditorState, personalizationId: string | undefined) => personalizationId],
    (personalizations, personalizationId) => personalizations.find((personalization) => personalization.id === personalizationId) || null,
)((_: IEditorState, personalizationId: string | undefined) => personalizationId);

export { getPersonalization };
