import CardContent from '@mui/material/CardContent/CardContent';
import List from '@mui/material/List/List';
import React, { useMemo } from 'react';

import { InfoItem } from '@/editor/components/options-bar/info/item';
import { useEditorStore } from '@/editor/state/editor';
import { getSelectedAuthorableComponentName } from '@/editor/state/editor/selectors/authorables/get-selected-authorable-component-name';
import { getSelectedAuthorableKey } from '@/editor/state/editor/selectors/authorables/get-selected-authorable-key';

const InfoContent: React.FC = () => {
    const selectedAuthorableKey = useEditorStore(getSelectedAuthorableKey);
    const selectedAuthorableComponentName = useEditorStore(getSelectedAuthorableComponentName);

    const informations = useMemo(() => {
        return [
            {
                label: 'Component Name',
                value: selectedAuthorableComponentName,
            },
            {
                label: 'Component Key',
                value: selectedAuthorableKey,
            },
        ];
    }, [selectedAuthorableComponentName, selectedAuthorableKey]);

    return (
        <CardContent>
            <List>
                {informations.map((information) => (
                    <InfoItem {...information} key={information.label} />
                ))}
            </List>
        </CardContent>
    );
};

export { InfoContent };
