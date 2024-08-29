import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getSchema } from '@/editor/state/editor/selectors/schemas/get-schema';

const getSchemaName = createCachedSelector(
    [getSchema, (_: IEditorState, schemaId: string | undefined) => schemaId],
    (schema) => schema?.name,
)((_: IEditorState, schemaId: string | undefined) => schemaId);

export { getSchemaName };
