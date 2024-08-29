import React from 'react';
import { useParams } from 'react-router-dom';

import { useTitle } from '@/editor/hooks/use-title';
import { RouteParams } from '@/editor/navigation/typings';
import { useEditorStore } from '@/editor/state/editor';
import { getMethodName } from '@/editor/state/editor/selectors/methods/get-method-name';
import { IEditorState } from '@/editor/state/editor/typings';

const Method: React.FC = () => {
    const { methodId } = useParams<RouteParams['method']>();
    const methodName = useEditorStore((state: IEditorState) => getMethodName(state, methodId));
    useTitle(methodName);
    return <span>Method</span>;
};

export { Method };
