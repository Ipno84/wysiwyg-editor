import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getTeam } from '@/editor/state/editor/selectors/teams/get-team';

const getTeamDescription = createCachedSelector(
    [getTeam, (_: IEditorState, teamId: string | undefined) => teamId],
    (team) => team?.description,
)((_: IEditorState, teamId: string | undefined) => teamId);

export { getTeamDescription };
