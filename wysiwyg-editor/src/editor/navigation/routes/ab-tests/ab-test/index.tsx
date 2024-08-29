import React from 'react';
import { useParams } from 'react-router-dom';

import { useTitle } from '@/editor/hooks/use-title';
import { RouteParams } from '@/editor/navigation/typings';
import { useEditorStore } from '@/editor/state/editor';
import { getAbTestName } from '@/editor/state/editor/selectors/ab-tests/get-ab-test-name';
import { IEditorState } from '@/editor/state/editor/typings';

const AbTest: React.FC = () => {
    const { abTestId } = useParams<RouteParams['abTest']>();
    const abTestName = useEditorStore((state: IEditorState) => getAbTestName(state, abTestId));
    useTitle(abTestName);
    return <span>AbTest</span>;
};

export { AbTest };
