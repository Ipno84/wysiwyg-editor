import { createCachedSelector } from 're-reselect';

import type { IEditorState } from '@/editor/state/editor/typings';

import { getTeams } from '@/editor/state/editor/selectors/teams/get-teams';

const getTeam = createCachedSelector(
    [getTeams, (_: IEditorState, teamId: string | undefined) => teamId],
    (teams, teamId) => teams.find((team) => team.id === teamId) || null,
)((_: IEditorState, teamId: string | undefined) => teamId);

export { getTeam };
