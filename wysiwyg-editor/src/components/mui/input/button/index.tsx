import { default as MuiButton } from "@mui/material/Button";
import type { ButtonOwnProps } from "@mui/material/Button";
import { forwardRef } from "react";
import type { AuthorableProps } from "react";

import { withEditable } from "@/core/hoc/with-editable";

const ButtonComponent = forwardRef<HTMLButtonElement | null, ButtonOwnProps>(
  (props, ref) => <MuiButton {...props} ref={ref} />,
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
  disabled: {
    type: "checkbox",
    default: false,
    label: "Disabled",
    required: false,
    group: {
      label: "Behavior",
      value: "behavior",
    },
  },
  disableElevation: {
    type: "checkbox",
    default: false,
    label: "Disable Elevation",
    required: false,
    group: {
      label: "Appearance",
      value: "appearance",
    },
  },
  disableFocusRipple: {
    type: "checkbox",
    default: false,
    label: "Disable Focus Ripple",
    required: false,
    group: {
      label: "Appearance",
      value: "appearance",
    },
  },
  fullWidth: {
    type: "checkbox",
    default: false,
    label: "Full Width",
    required: false,
    group: {
      label: "Appearance",
      value: "appearance",
    },
  },
  href: {
    type: "text",
    default: "",
    label: "Link",
    required: false,
    group: {
      label: "Behavior",
      value: "behavior",
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
  variant: {
    type: "selectable",
    default: undefined,
    multiple: false,
    label: "Variant",
    required: false,
    options: [
      { label: "Text", value: "text" },
      { label: "Outlined", value: "outlined" },
      { label: "Contained", value: "contained" },
    ],
    group: {
      label: "Appearance",
      value: "appearance",
    },
  },
};

ButtonComponent.authorableProps = authorableProps;

ButtonComponent.displayName = "Button";

const Button = withEditable(ButtonComponent);

export { Button, ButtonComponent };
