import React from 'react';
import { useParams } from 'react-router-dom';

import { useTitle } from '@/editor/hooks/use-title';
import { RouteParams } from '@/editor/navigation/typings';
import { useEditorStore } from '@/editor/state/editor';
import { getProjectName } from '@/editor/state/editor/selectors/projects/get-project-name';
import { IEditorState } from '@/editor/state/editor/typings';

const Project: React.FC = () => {
    const { projectId } = useParams<RouteParams['project']>();
    const projectName = useEditorStore((state: IEditorState) => getProjectName(state, projectId));
    useTitle(projectName);
    return <span>Project</span>;
};

export { Project };
