import CardContent from '@mui/material/CardContent/CardContent';
import List from '@mui/material/List/List';
import React, { useMemo } from 'react';

import { InfoWidgetItem } from '@/editor/components/widgets-bar/widgets/info/item';
import { useEditorStore } from '@/editor/state/editor';
import { getSelectedAuthorableComponentName } from '@/editor/state/editor/selectors/authorables/get-selected-authorable-component-name';
import { getSelectedAuthorableKey } from '@/editor/state/editor/selectors/authorables/get-selected-authorable-key';
import { getSelectedLeafPath } from '@/editor/state/editor/selectors/authorables/get-selected-leaf-path';

const InfoWidgetContent: React.FC = () => {
    const selectedAuthorableKey = useEditorStore(getSelectedAuthorableKey);
    const selectedAuthorableComponentName = useEditorStore(getSelectedAuthorableComponentName);
    const selectedLeafPath = useEditorStore(getSelectedLeafPath);

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
            {
                label: 'Leaf Path',
                value: selectedLeafPath,
            },
        ];
    }, [selectedAuthorableComponentName, selectedAuthorableKey, selectedLeafPath]);

    return (
        <CardContent>
            <List>
                {informations.map((information) => (
                    <InfoWidgetItem {...information} key={information.label} />
                ))}
            </List>
        </CardContent>
    );
};

export { InfoWidgetContent };
