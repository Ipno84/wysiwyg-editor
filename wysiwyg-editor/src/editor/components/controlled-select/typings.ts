import type { MenuItemOwnProps } from '@mui/material/MenuItem/MenuItem';
import type { Key, ReactNode } from 'react';

interface ControlledSelectProps<T> {
    id: string;
    label: string;
    options: T[];
    selectedOption: T | null | undefined;
    headerPaddingRight?: number;
    headerActionWidth?: number;
    getOptionKey: (option: T) => Key | null | undefined;
    getOptionValue: (option: T) => string | number | readonly string[] | undefined;
    renderSelectValue: (option: T | null) => ReactNode;
    resetSelection: () => void;
    selectedMenuItemSx?: MenuItemOwnProps['sx'];
    menuItemSx?: MenuItemOwnProps['sx'];
    headerTextPrimary?: string;
    headerTextSecondary?: string;
    isItemSelected: (selectedItem: T | null | undefined, currentItem: T | null) => boolean;
    onItemSelected: (selectedItem: T | null | undefined) => void;
    getItemReactNode: (option: T) => ReactNode;
    ResetItemReactNode: ReactNode;
}

export type { ControlledSelectProps };
