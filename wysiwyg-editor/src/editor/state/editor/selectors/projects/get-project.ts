import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getProjects } from '@/editor/state/editor/selectors/projects/get-projects';

const getProject = createCachedSelector(
    [getProjects, (_: IEditorState, projectId: string | undefined) => projectId],
    (projects, projectId) => projects.find((project) => project.id === projectId) || null,
)((_: IEditorState, projectId: string | undefined) => projectId);

export { getProject };
