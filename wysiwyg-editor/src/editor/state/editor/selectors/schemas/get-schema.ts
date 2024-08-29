import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getSchemas } from '@/editor/state/editor/selectors/schemas/get-schemas';

const getSchema = createCachedSelector(
    [getSchemas, (_: IEditorState, schemaId: string | undefined) => schemaId],
    (schemas, schemaId) => schemas.find((schema) => schema.id === schemaId) || null,
)((_: IEditorState, schemaId: string | undefined) => schemaId);

export { getSchema };
