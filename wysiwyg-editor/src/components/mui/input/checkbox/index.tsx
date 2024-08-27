import { default as MuiCheckbox } from "@mui/material/Checkbox";
import type { CheckboxProps } from "@mui/material/Checkbox";
import type { AuthorableProps } from "react";
import { forwardRef } from "react";

import { withEditable } from "@/core/hoc/with-editable";

const CheckboxComponent = forwardRef<HTMLButtonElement | null, CheckboxProps>(
  (props, ref) => <MuiCheckbox {...props} ref={ref} />,
);

const authorableProps: AuthorableProps = {
  color: {
    type: "selectable",
    default: undefined,
    multiple: false,
    label: "Color",
    required: false,
    options: [
      { label: "Inherit", value: "inherit" },
      { label: "Primary", value: "primary" },
      { label: "Secondary", value: "secondary" },
      { label: "Success", value: "success" },
      { label: "Error", value: "error" },
      { label: "Info", value: "info" },
      { label: "Warning", value: "warning" },
    ],
    group: {
      label: "Appearance",
      value: "appearance",
    },
  },
  size: {
    type: "selectable",
    default: undefined,
    multiple: false,
    label: "Size",
    required: false,
    options: [
      { label: "Small", value: "small" },
      { label: "Medium", value: "medium" },
      { label: "Large", value: "large" },
    ],
    group: {
      label: "Appearance",
      value: "appearance",
    },
  },
  autoFocus: {
    type: "checkbox",
    default: undefined,
    label: "Autofocus",
    required: false,
    group: {
      label: "Behavior",
      value: "behavior",
    },
  },
  checked: {
    type: "checkbox",
    default: undefined,
    label: "Checked",
    required: false,
    group: {
      label: "Behavior",
      value: "behavior",
    },
  },
  defaultChecked: {
    type: "checkbox",
    default: undefined,
    label: "Default Checked",
    required: false,
    group: {
      label: "Behavior",
      value: "behavior",
    },
  },
  disabled: {
    type: "checkbox",
    default: undefined,
    label: "Disabled",
    required: false,
    group: {
      label: "Behavior",
      value: "behavior",
    },
  },
  disableRipple: {
    type: "checkbox",
    default: undefined,
    label: "Disable Ripple",
    required: false,
    group: {
      label: "Behavior",
      value: "behavior",
    },
  },
  disableFocusRipple: {
    type: "checkbox",
    default: undefined,
    label: "Disable Focus Ripple",
    required: false,
    group: {
      label: "Behavior",
      value: "behavior",
    },
  },
  id: {
    type: "text",
    default: "",
    label: "ID",
    required: false,
    group: {
      label: "Behavior",
      value: "behavior",
    },
  },
  indeterminate: {
    type: "checkbox",
    default: undefined,
    label: "Indeterminate",
    required: false,
    group: {
      label: "Behavior",
      value: "behavior",
    },
  },
  name: {
    type: "text",
    default: "",
    label: "Name",
    required: false,
    group: {
      label: "Behavior",
      value: "behavior",
    },
  },
  readOnly: {
    type: "checkbox",
    default: undefined,
    label: "Readonly",
    required: false,
    group: {
      label: "Behavior",
      value: "behavior",
    },
  },
  required: {
    type: "checkbox",
    default: undefined,
    label: "Required",
    required: false,
    group: {
      label: "Behavior",
      value: "behavior",
    },
  },
  tabIndex: {
    type: "number",
    default: undefined,
    label: "Required",
    required: false,
    group: {
      label: "Accessibility",
      value: "accessibility",
    },
  },
};

CheckboxComponent.authorableProps = authorableProps;

CheckboxComponent.displayName = "Checkbox";

const Checkbox = withEditable(CheckboxComponent);

export { Checkbox, CheckboxComponent };
