import { SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Select from '@mui/material/Select/Select';
import React, { useCallback, useEffect, useMemo } from 'react';

import { useEditorStore } from '@/editor/state/editor';
import { setSelectedAuthorableStateFilter as setSelectedAuthorableStateFilterAction } from '@/editor/state/editor/actions/set-selected-authorable-state-filter';
import { getSelectedAuthorableProps } from '@/editor/state/editor/selectors/authorables/get-selected-authorable-props';
import { getSelectedAuthorableStateFilter } from '@/editor/state/editor/selectors/authorables/get-selected-authorable-state-filter';

const OptionsFilter: React.FC = () => {
    const selectedAuthorableProps = useEditorStore(getSelectedAuthorableProps);
    const setSelectedAuthorableStateFilter = useEditorStore(setSelectedAuthorableStateFilterAction);
    const selectedAuthorableStateFilter = useEditorStore(getSelectedAuthorableStateFilter);

    const onChange = useCallback(
        (e: SelectChangeEvent) => {
            setSelectedAuthorableStateFilter(e.target.value);
        },
        [setSelectedAuthorableStateFilter],
    );

    const groupsOptions = useMemo(() => {
        if (!selectedAuthorableProps) return [];

        return Array.from(
            new Set(
                Object.keys(selectedAuthorableProps)
                    .map((selectedAuthorablePropKey) => {
                        const selectedAuthorableProp = selectedAuthorableProps[selectedAuthorablePropKey];
                        return selectedAuthorableProp.group;
                    })
                    .filter(Boolean)
                    .map((group) => JSON.stringify(group)),
            ),
        ).map((group) => JSON.parse(group));
    }, [selectedAuthorableProps]);

    useEffect(() => {
        if (!selectedAuthorableStateFilter && groupsOptions?.[0]?.value) {
            setSelectedAuthorableStateFilter(groupsOptions[0].value);
        }
    }, [selectedAuthorableStateFilter, groupsOptions, setSelectedAuthorableStateFilter]);

    return (
        <FormControl size="small" fullWidth sx={{ paddingRight: 1 }}>
            <InputLabel id="filter-label">Filter</InputLabel>
            <Select labelId="filter-label" id="filter" value={selectedAuthorableStateFilter ?? ''} label="Filter" onChange={onChange}>
                {groupsOptions.map((group, index) => (
                    <MenuItem key={`${group.value}-${index}`} value={group.value}>
                        {group.label}
                    </MenuItem>
                )) ?? null}
            </Select>
        </FormControl>
    );
};

export { OptionsFilter };
