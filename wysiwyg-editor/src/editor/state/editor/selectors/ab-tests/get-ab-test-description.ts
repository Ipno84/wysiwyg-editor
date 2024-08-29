import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getAbTest } from '@/editor/state/editor/selectors/ab-tests/get-ab-test';

const getAbTestDescription = createCachedSelector(
    [getAbTest, (_: IEditorState, abTestsId: string | undefined) => abTestsId],
    (abTests) => abTests?.description,
)((_: IEditorState, abTestsId: string | undefined) => abTestsId);

export { getAbTestDescription };
