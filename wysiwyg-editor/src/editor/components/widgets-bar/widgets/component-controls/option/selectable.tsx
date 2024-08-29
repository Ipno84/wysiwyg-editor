import FormControl from '@mui/material/FormControl/FormControl';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select/Select';
import React, { useCallback, useMemo } from 'react';

import type { OptionProps } from '@/editor/components/widgets-bar/widgets/component-controls/option/typings';

const InputSelectable: React.FC<OptionProps> = ({ authorableProp, authorablePropKey, index, onOptionChange, value }) => {
    const onChange = useCallback(
        (e: SelectChangeEvent) => {
            onOptionChange(authorablePropKey, e.target.value);
        },
        [authorablePropKey, onOptionChange],
    );

    const currentValue = useMemo(() => {
        const initialValue = value ?? authorableProp.default;
        if (initialValue === undefined) {
            return '';
        }
        return initialValue;
    }, [value, authorableProp.default]);

    return (
        <FormControl fullWidth size="small">
            <InputLabel id={`${authorablePropKey}-${index}-label`}>{authorableProp.label}</InputLabel>
            <Select
                labelId={`${authorablePropKey}-${index}-label`}
                id={`${authorablePropKey}-${index}`}
                value={currentValue}
                label={authorableProp.label}
                onChange={onChange}
            >
                {authorableProp.options?.map((option: any) => {
                    return (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    );
                }) ?? null}
            </Select>
            {authorableProp.description ? <FormHelperText>{authorableProp.description}</FormHelperText> : null}
        </FormControl>
    );
};

export { InputSelectable };
