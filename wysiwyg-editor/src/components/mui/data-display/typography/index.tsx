import { default as MuiTypography } from "@mui/material/Typography/Typography";
import type { TypographyOwnProps } from "@mui/material/Typography/Typography";
import type { AuthorableProps } from "react";
import { forwardRef } from "react";

import { withEditable } from "@/core/hoc/with-editable";

const TypographyComponent = forwardRef<
  HTMLSpanElement | null,
  TypographyOwnProps
>((props, ref) => <MuiTypography {...props} ref={ref} />);

const authorableProps: AuthorableProps = {
  align: {
    type: "selectable",
    default: "inherit",
    multiple: false,
    label: "Align",
    required: false,
    options: [
      { label: "Inherit", value: "inherit" },
      { label: "Left", value: "left" },
      { label: "Center", value: "center" },
      { label: "Right", value: "right" },
      { label: "Justify", value: "justify" },
    ],
    group: {
      label: "Appearance",
      value: "appearance",
    },
  },
  gutterBottom: {
    type: "checkbox",
    default: false,
    label: "Gutter Bottom",
    required: false,
    group: {
      label: "Appearance",
      value: "appearance",
    },
  },
  noWrap: {
    type: "checkbox",
    default: false,
    label: "No Wrap",
    required: false,
    group: {
      label: "Appearance",
      value: "appearance",
    },
  },
  paragraph: {
    type: "checkbox",
    default: false,
    label: "Paragraph",
    required: false,
    group: {
      label: "Appearance",
      value: "appearance",
    },
  },
  variant: {
    type: "selectable",
    default: "body1",
    multiple: false,
    label: "Variant",
    required: false,
    options: [
      { label: "H1", value: "h1" },
      { label: "H2", value: "h2" },
      { label: "H3", value: "h3" },
      { label: "H4", value: "h4" },
      { label: "H5", value: "h5" },
      { label: "H6", value: "h6" },
      { label: "Subtitle 1", value: "subtitle1" },
      { label: "Subtitle 2", value: "subtitle2" },
      { label: "Body 1", value: "body1" },
      { label: "Body 2", value: "body2" },
      { label: "Caption", value: "caption" },
      { label: "Button", value: "button" },
      { label: "Overline", value: "overline" },
    ],
    group: {
      label: "Appearance",
      value: "appearance",
    },
  },
};

TypographyComponent.authorableProps = authorableProps;

TypographyComponent.displayName = "Typography";

const Typography = withEditable(TypographyComponent);

export { Typography, TypographyComponent };
