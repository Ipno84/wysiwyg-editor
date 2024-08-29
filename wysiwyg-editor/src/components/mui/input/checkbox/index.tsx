import { default as MuiCheckbox } from '@mui/material/Checkbox';
import { forwardRef } from 'react';

import type { CheckboxProps } from '@mui/material/Checkbox';
import type { AuthorableProps } from 'react';

import { withEditable } from '@/core/hoc/with-editable';

const CheckboxComponent = forwardRef<HTMLButtonElement | null, CheckboxProps>((props, ref) => <MuiCheckbox {...props} ref={ref} />);

const authorableProps: AuthorableProps = {
    color: {
        type: 'selectable',
        default: undefined,
        multiple: false,
        label: 'Color',
        description: 'Choose the checkbox color',
        required: false,
        options: [
            { label: 'Inherit', value: 'inherit' },
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Success', value: 'success' },
            { label: 'Error', value: 'error' },
            { label: 'Info', value: 'info' },
            { label: 'Warning', value: 'warning' },
        ],
        group: {
            label: 'Appearance',
            value: 'appearance',
        },
    },
    size: {
        type: 'selectable',
        default: undefined,
        multiple: false,
        label: 'Size',
        description: 'Choose the checkbox size',
        required: false,
        options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
        ],
        group: {
            label: 'Appearance',
            value: 'appearance',
        },
    },
    autoFocus: {
        type: 'checkbox',
        default: undefined,
        label: 'Autofocus',
        description: 'Tick if you want the checkbox to autofocus',
        required: false,
        group: {
            label: 'Behavior',
            value: 'behavior',
        },
    },
    checked: {
        type: 'checkbox',
        default: undefined,
        label: 'Checked',
        description: 'Tick if you want the checkbox to be checked',
        required: false,
        group: {
            label: 'Behavior',
            value: 'behavior',
        },
    },
    defaultChecked: {
        type: 'checkbox',
        default: undefined,
        label: 'Default Checked',
        description: 'Tick if you want the checkbox to be checked by default',
        required: false,
        group: {
            label: 'Behavior',
            value: 'behavior',
        },
    },
    disabled: {
        type: 'checkbox',
        default: undefined,
        label: 'Disabled',
        description: 'Tick if you want the checkbox to be disabled',
        required: false,
        group: {
            label: 'Behavior',
            value: 'behavior',
        },
    },
    disableRipple: {
        type: 'checkbox',
        default: undefined,
        label: 'Disable Ripple',
        description: 'Tick if you want to disable the checkbox ripple effect',
        required: false,
        group: {
            label: 'Behavior',
            value: 'behavior',
        },
    },
    disableFocusRipple: {
        type: 'checkbox',
        default: undefined,
        label: 'Disable Focus Ripple',
        description: 'Tick if you want to disable the checkbox focus ripple effect',
        required: false,
        group: {
            label: 'Behavior',
            value: 'behavior',
        },
    },
    id: {
        type: 'text',
        default: '',
        label: 'ID',
        description: 'Enter the checkbox ID',
        required: false,
        group: {
            label: 'Behavior',
            value: 'behavior',
        },
    },
    indeterminate: {
        type: 'checkbox',
        default: undefined,
        label: 'Indeterminate',
        description: 'Tick if you want the checkbox to be indeterminate',
        required: false,
        group: {
            label: 'Behavior',
            value: 'behavior',
        },
    },
    name: {
        type: 'text',
        default: '',
        label: 'Name',
        description: 'Enter the checkbox name',
        required: false,
        group: {
            label: 'Behavior',
            value: 'behavior',
        },
    },
    readOnly: {
        type: 'checkbox',
        default: undefined,
        label: 'Readonly',
        description: 'Tick if you want the checkbox to be readonly',
        required: false,
        group: {
            label: 'Behavior',
            value: 'behavior',
        },
    },
    required: {
        type: 'checkbox',
        default: undefined,
        label: 'Required',
        description: 'Tick if you want the checkbox to be required',
        required: false,
        group: {
            label: 'Behavior',
            value: 'behavior',
        },
    },
    tabIndex: {
        type: 'number',
        default: undefined,
        label: 'Required',
        description: 'Enter the checkbox tab index',
        required: false,
        group: {
            label: 'Accessibility',
            value: 'accessibility',
        },
    },
};

CheckboxComponent.authorableProps = authorableProps;

CheckboxComponent.displayName = 'Checkbox';

const Checkbox = withEditable(CheckboxComponent);

export { Checkbox, CheckboxComponent };
