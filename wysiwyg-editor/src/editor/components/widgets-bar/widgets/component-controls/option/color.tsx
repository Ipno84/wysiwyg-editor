import { Typography } from '@mui/material';
import Box from '@mui/material/Box/Box';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import React, { useCallback, useMemo } from 'react';

import type { OptionProps } from '@/editor/components/widgets-bar/widgets/component-controls/option/typings';

import { Input } from '@/components/ui/input';

const InputColor: React.FC<OptionProps> = ({ authorableProp, authorablePropKey, index, onOptionChange, value, leafValue }) => {
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
        <ListItem
            divider
            sx={{ paddingTop: 2 }}
            secondaryAction={
                <Box width={100} sx={{ display: 'flex' }}>
                    <Box flex={1} sx={{ paddingRight: 1 }}>
                        <Typography>{currentValue}</Typography>
                    </Box>
                    <Box width={30}>
                        <Input
                            $id={`${authorablePropKey}-${index}`}
                            $type="color"
                            $defaultValue={authorableProp.default}
                            $value={currentValue}
                            $onChange={onChange}
                            $required={authorableProp.required}
                        />
                    </Box>
                </Box>
            }
        >
            <ListItemText primary={authorableProp.label} primaryTypographyProps={{ fontWeight: 700 }} secondary={authorableProp.description} />
        </ListItem>
    );
};

export { InputColor };
