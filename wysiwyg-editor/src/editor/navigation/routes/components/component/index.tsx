import React from 'react';
import { useParams } from 'react-router-dom';

import { useTitle } from '@/editor/hooks/use-title';
import { RouteParams } from '@/editor/navigation/typings';
import { useEditorStore } from '@/editor/state/editor';
import { getComponentName } from '@/editor/state/editor/selectors/components/get-component-name';
import { IEditorState } from '@/editor/state/editor/typings';

const Component: React.FC = () => {
    const { componentId } = useParams<RouteParams['component']>();
    const componentName = useEditorStore((state: IEditorState) => getComponentName(state, componentId));
    useTitle(componentName);
    return <span>Component</span>;
};

export { Component };
