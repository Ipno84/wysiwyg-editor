import * as Icons from "@mui/icons-material";
import { IconOwnProps } from "@mui/material/Icon";
import type { AuthorableProps } from "react";
import { forwardRef, useMemo } from "react";

import { withEditable } from "@/core/hoc/with-editable";

const IconNames = Object.keys(Icons);

const IconComponent = forwardRef<
  SVGSVGElement | null,
  IconOwnProps & { muiName?: keyof typeof Icons }
>((props, ref) => {
  const manipulatedProps = useMemo<IconOwnProps>(() => {
    const { muiName: _, ...rest } = props;
    return rest;
  }, [props]);

  const Icon = useMemo(() => Icons[props.muiName ?? "Search"], [props.muiName]);

  if (!Icon) return null;

  return <Icon {...manipulatedProps} ref={ref} />;
});

const authorableProps: AuthorableProps = {
  color: {
    type: "selectable",
    default: undefined,
    multiple: false,
    label: "Color",
    required: false,
    options: [
      { label: "Inherit", value: "inherit" },
      { label: "Action", value: "action" },
      { label: "Disabled", value: "disabled" },
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
  fontSize: {
    type: "selectable",
    default: undefined,
    multiple: false,
    label: "Font Size",
    required: false,
    options: [
      { label: "Inherit", value: "inherit" },
      { label: "Large", value: "large" },
      { label: "Medium", value: "medium" },
      { label: "Small", value: "small" },
    ],
    group: {
      label: "Appearance",
      value: "appearance",
    },
  },
  muiName: {
    type: "autocomplete",
    default: {
      firstLetter: "S",
      label: "Search",
      value: "Search",
    },
    multiple: false,
    label: "Icon Name",
    required: false,
    options: IconNames.map((iconName) => ({
      label: iconName,
      value: iconName,
    })),
    group: {
      label: "Behavior",
      value: "behavior",
    },
  },
};

IconComponent.authorableProps = authorableProps;

IconComponent.displayName = "Icon";

const Icon = withEditable(IconComponent);

export { Icon, IconComponent };
