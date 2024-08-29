import Checkbox from '@mui/material/Checkbox/Checkbox';
import FormControl from '@mui/material/FormControl/FormControl';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import FormLabel from '@mui/material/FormLabel/FormLabel';
import React, { useCallback, useMemo } from 'react';

import type { OptionProps } from '@/editor/components/widgets-bar/widgets/component-controls/option/typings';

import { FlexContainer } from '@/components/ui/flex-container';
import { FlexItem } from '@/components/ui/flex-item';

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
        <FormControl fullWidth size="small">
            <FlexContainer>
                <FlexItem $flex={1} $isFlex $centerVertically>
                    <FormLabel htmlFor={`${authorablePropKey}-${index}`}>{authorableProp.label}</FormLabel>
                </FlexItem>
                <FlexItem>
                    <Checkbox id={`${authorablePropKey}-${index}`} required={authorableProp.required} checked={currentValue} onChange={onChange} />
                </FlexItem>
            </FlexContainer>
            {authorableProp.description ? <FormHelperText>{authorableProp.description}</FormHelperText> : null}
        </FormControl>
    );
};

export { InputCheckbox };
