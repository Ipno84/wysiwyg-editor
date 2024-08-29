import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getProject } from '@/editor/state/editor/selectors/projects/get-project';

const getProjectName = createCachedSelector(
    [getProject, (_: IEditorState, projectId: string | undefined) => projectId],
    (project) => project?.name,
)((_: IEditorState, projectId: string | undefined) => projectId);

export { getProjectName };
