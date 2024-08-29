import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getAbTests } from '@/editor/state/editor/selectors/ab-tests/get-ab-tests';

const getAbTest = createCachedSelector(
    [getAbTests, (_: IEditorState, abTestId: string | undefined) => abTestId],
    (abTests, abTestId) => abTests.find((abTest) => abTest.id === abTestId) || null,
)((_: IEditorState, abTestId: string | undefined) => abTestId);

export { getAbTest };
