import List from '@mui/material/List/List';
import React, { useCallback } from 'react';

import { Option } from '@/editor/components/widgets-bar/widgets/component-controls/option';
import { useEditorStore } from '@/editor/state/editor';
import { setAuthorableState as setAuthorableStateAction } from '@/editor/state/editor/actions/set-authorable-state';
import { getFilteredSelectedAuthorableProps } from '@/editor/state/editor/selectors/authorables/get-filtered-selected-authorable-props';

const OptionsList: React.FC = () => {
    const filteredSelectedAuthorableProps = useEditorStore(getFilteredSelectedAuthorableProps);
    const setAuthorableState = useEditorStore(setAuthorableStateAction);

    const onOptionChange = useCallback(
        (authorablePropKey: string, value: any) => {
            setAuthorableState(authorablePropKey, value);
        },
        [setAuthorableState],
    );

    if (!filteredSelectedAuthorableProps) return null;

    return (
        <List>
            {Object.keys(filteredSelectedAuthorableProps).map((selectedAuthorablePropKey, index) => {
                const selectedAuthorableProp = filteredSelectedAuthorableProps[selectedAuthorablePropKey];
                return (
                    <Option
                        key={`${selectedAuthorablePropKey}-${index}`}
                        authorableProp={selectedAuthorableProp}
                        authorablePropKey={selectedAuthorablePropKey}
                        index={index}
                        onOptionChange={onOptionChange}
                    />
                );
            })}
        </List>
    );
};

export { OptionsList };
