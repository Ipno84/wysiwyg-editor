import React from 'react';
import { useParams } from 'react-router-dom';

import { useTitle } from '@/editor/hooks/use-title';
import { RouteParams } from '@/editor/navigation/typings';
import { useEditorStore } from '@/editor/state/editor';
import { getPersonalizationName } from '@/editor/state/editor/selectors/personalizations/get-personalization-name';
import { IEditorState } from '@/editor/state/editor/typings';

const Personalization: React.FC = () => {
    const { personalizationId } = useParams<RouteParams['personalization']>();
    const personalizationName = useEditorStore((state: IEditorState) => getPersonalizationName(state, personalizationId));
    useTitle(personalizationName);
    return <span>Personalization</span>;
};

export { Personalization };
