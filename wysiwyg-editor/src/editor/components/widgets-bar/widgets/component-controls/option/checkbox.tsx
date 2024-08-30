import Checkbox from '@mui/material/Checkbox/Checkbox';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import React, { useCallback, useMemo } from 'react';

import type { OptionProps } from '@/editor/components/widgets-bar/widgets/component-controls/option/typings';

const InputCheckbox: React.FC<OptionProps> = ({ authorableProp, authorablePropKey, index, onOptionChange, value }) => {
    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onOptionChange(authorablePropKey, e.target.checked);
        },
        [authorablePropKey, onOptionChange],
    );

    const currentValue = useMemo(() => {
        const initialValue = Boolean(value ?? authorableProp.default);
        return initialValue;
    }, [value, authorableProp.default]);

    return (
        <ListItem
            divider
            sx={{ paddingTop: 2 }}
            secondaryAction={<Checkbox id={`${authorablePropKey}-${index}`} required={authorableProp.required} checked={currentValue} onChange={onChange} />}
        >
            <ListItemText primary={authorableProp.label} primaryTypographyProps={{ fontWeight: 700 }} secondary={authorableProp.description} />
        </ListItem>
    );
};

export { InputCheckbox };
