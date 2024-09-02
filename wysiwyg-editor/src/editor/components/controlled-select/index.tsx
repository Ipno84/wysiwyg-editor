import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Popover from '@mui/material/Popover/Popover';
import Select from '@mui/material/Select/Select';
import { useCallback, useMemo, useState } from 'react';

import type { ControlledSelectProps } from '@/editor/components/controlled-select/typings';

const ControlledSelect = <T,>({
    id,
    options,
    label,
    selectedOption,
    selectedMenuItemSx,
    menuItemSx,
    headerTextPrimary,
    headerPaddingRight,
    headerTextSecondary,
    headerActionWidth,
    ResetItemReactNode,
    getOptionKey,
    getOptionValue,
    renderSelectValue,
    resetSelection,
    isItemSelected,
    onItemSelected,
    getItemReactNode,
}: ControlledSelectProps<T>) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback((event: any) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
        setAnchorEl(null);
    }, []);

    const onChange = useCallback(
        (option: T) => {
            onItemSelected(option);
            handleClose();
        },
        [handleClose, onItemSelected],
    );

    const onResetClick = useCallback(() => {
        resetSelection();
        handleClose();
    }, [handleClose, resetSelection]);

    const inputLabelShrink = useMemo(() => Boolean(selectedOption) || open, [open, selectedOption]);

    return (
        <ListItem sx={{ paddingBottom: 2, flexDirection: 'column', paddingRight: headerPaddingRight }}>
            <ListItemText primary={headerTextPrimary} primaryTypographyProps={{ fontWeight: 700 }} secondary={headerTextSecondary} />
            <ListItemSecondaryAction sx={{ width: headerActionWidth }}>
                <FormControl fullWidth size="small" variant="outlined">
                    <InputLabel
                        id={`${id}-label`}
                        shrink={inputLabelShrink}
                        sx={{ backgroundColor: '#fff', paddingLeft: 1, marginLeft: -0.5, paddingRight: 1 }}
                    >
                        {label}
                    </InputLabel>
                    <Select
                        labelId={`${id}-label`}
                        id={id}
                        value={selectedOption ?? ''}
                        sx={selectedMenuItemSx}
                        onClick={handleOpen}
                        open={false}
                        displayEmpty
                        renderValue={renderSelectValue}
                    >
                        <MenuItem key={null} value={''} onClick={onResetClick}>
                            {ResetItemReactNode}
                        </MenuItem>

                        {options.map((option) => <MenuItem key={getOptionKey(option)} value={getOptionValue(option)} sx={{ textTransform: 'capitalize' }} />) ??
                            null}
                    </Select>
                    <Popover
                        id={`${id}-popover`}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        PaperProps={{
                            style: { minWidth: anchorEl ? anchorEl.clientWidth : undefined },
                        }}
                    >
                        <MenuItem key={null} value={''} onClick={onResetClick}>
                            {ResetItemReactNode}
                        </MenuItem>
                        {options.map((option) => {
                            return (
                                <MenuItem
                                    key={getOptionKey(option)}
                                    value={getOptionValue(option)}
                                    sx={menuItemSx}
                                    selected={isItemSelected(selectedOption, option)}
                                    onClick={() => onChange(option)}
                                >
                                    {getItemReactNode(option)}
                                </MenuItem>
                            );
                        }) ?? null}
                    </Popover>
                </FormControl>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export { ControlledSelect };
