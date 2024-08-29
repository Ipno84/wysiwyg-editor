import React from 'react';
import { useParams } from 'react-router-dom';

import { useTitle } from '@/editor/hooks/use-title';
import { RouteParams } from '@/editor/navigation/typings';
import { useEditorStore } from '@/editor/state/editor';
import { getTeamName } from '@/editor/state/editor/selectors/teams/get-team-name';
import { IEditorState } from '@/editor/state/editor/typings';

const Team: React.FC = () => {
    const { teamId } = useParams<RouteParams['team']>();
    const teamName = useEditorStore((state: IEditorState) => getTeamName(state, teamId));
    useTitle(teamName);
    return <span>Team</span>;
};

export { Team };
