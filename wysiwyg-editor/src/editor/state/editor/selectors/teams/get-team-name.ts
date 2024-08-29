import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getTeam } from '@/editor/state/editor/selectors/teams/get-team';

const getTeamName = createCachedSelector(
    [getTeam, (_: IEditorState, teamId: string | undefined) => teamId],
    (team) => team?.name,
)((_: IEditorState, teamId: string | undefined) => teamId);

export { getTeamName };
