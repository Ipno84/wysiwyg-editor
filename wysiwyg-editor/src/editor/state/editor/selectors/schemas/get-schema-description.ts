import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getSchema } from '@/editor/state/editor/selectors/schemas/get-schema';

const getSchemaDescription = createCachedSelector(
    [getSchema, (_: IEditorState, schemaId: string | undefined) => schemaId],
    (schema) => schema?.description,
)((_: IEditorState, schemaId: string | undefined) => schemaId);

export { getSchemaDescription };
