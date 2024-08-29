import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getProject } from '@/editor/state/editor/selectors/projects/get-project';

const getProjectDescription = createCachedSelector(
    [getProject, (_: IEditorState, projectId: string | undefined) => projectId],
    (project) => project?.description,
)((_: IEditorState, projectId: string | undefined) => projectId);

export { getProjectDescription };
