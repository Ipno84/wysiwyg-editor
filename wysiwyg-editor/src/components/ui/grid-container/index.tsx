import styled from "@emotion/styled";
import type { CSSObject } from "@emotion/styled";
import type { AuthorableProps } from "react";

import type { GridContainerProps } from "@/components/ui/grid-container/typings";
import { ViewComponent } from "@/components/ui/view";
import { withEditable } from "@/core/hoc/with-editable";

const GridContainerComponent = styled(ViewComponent)<GridContainerProps>(({
  $columns = 6,
  $gap,
  $breakpoints,
}) => {
  let style: CSSObject = {
    display: "grid",
    gridTemplateColumns: `repeat(${$columns ?? 3}, 1fr)`,
    gap: `${$gap ?? 0}px`,
  };

  if ($breakpoints !== undefined) {
    Object.entries($breakpoints).forEach(([breakpoint, props]) => {
      const breakpointKey = `@media (min-width: ${breakpoint}px)`;

      style = {
        ...style,
        [breakpointKey]: {
          ...(style[breakpointKey] as object),
          gridTemplateColumns:
            props.$columns !== undefined
              ? `repeat(${props.$columns}, 1fr)`
              : undefined,
          gap: props.$gap !== undefined ? `${props.$gap ?? 0}px` : undefined,
        },
      };
    });
  }

  return style;
});

const GridContainerComponentBaseAuthorableProps: AuthorableProps = {
  ...ViewComponent.authorableProps,
  $columns: {
    type: "number",
    default: 6,
    required: false,
    label: "Columns",
    group: {
      label: "Flexible",
      value: "flexible",
    },
  },
  $gap: {
    type: "number",
    default: undefined,
    required: false,
    label: "Gap",
    group: {
      label: "Flexible",
      value: "flexible",
    },
  },
};

GridContainerComponent.authorableProps = {
  ...GridContainerComponentBaseAuthorableProps,
  $breakpoints: {
    type: "structured",
    default: undefined,
    required: false,
    structure: {
      key: "number",
      values: GridContainerComponentBaseAuthorableProps,
    },
  },
};

GridContainerComponent.displayName = "GridContainer";

const GridContainer = withEditable(GridContainerComponent);

export { GridContainer, GridContainerComponent };
