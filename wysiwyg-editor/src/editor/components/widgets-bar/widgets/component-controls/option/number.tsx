import FormControl from '@mui/material/FormControl/FormControl';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import TextField from '@mui/material/TextField/TextField';
import React, { useCallback, useMemo } from 'react';

import type { OptionProps } from '@/editor/components/widgets-bar/widgets/component-controls/option/typings';

const InputNumber: React.FC<OptionProps> = ({ authorableProp, authorablePropKey, index, onOptionChange, value, leafValue }) => {
    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onOptionChange(authorablePropKey, e.target.value);
        },
        [authorablePropKey, onOptionChange],
    );

    const currentValue = useMemo(() => {
        const initialValue = value ?? leafValue ?? authorableProp.default;
        if (initialValue === undefined) {
            return '';
        }
        return initialValue;
    }, [value, leafValue, authorableProp.default]);

    return (
        <ListItem divider sx={{ paddingBottom: 2 }}>
            <FormControl fullWidth size="small">
                <ListItemText primary={authorableProp.label} primaryTypographyProps={{ fontWeight: 700 }} secondary={authorableProp.description} />
                <TextField
                    id={`${authorablePropKey}-${index}`}
                    variant="outlined"
                    size="small"
                    value={currentValue}
                    required={authorableProp.required}
                    aria-required={authorableProp.required}
                    type="number"
                    onChange={onChange}
                    fullWidth
                />
            </FormControl>
        </ListItem>
    );
};

export { InputNumber };
