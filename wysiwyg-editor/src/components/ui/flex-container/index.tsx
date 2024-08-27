import styled from "@emotion/styled";
import type { CSSObject } from "@emotion/styled";

import type { FlexContainerProps } from "@/components/ui/flex-container/typings";
import { ViewComponent } from "@/components/ui/view";

const FlexContainer = styled(ViewComponent)<FlexContainerProps>(({
  $gap,
  $breakpoints,
}) => {
  let style: CSSObject = {
    display: "flex",
    gap: `${$gap ?? 0}px`,
  };

  if ($gap !== undefined) style = { ...style, gap: `${$gap}px` };

  if ($breakpoints !== undefined) {
    Object.entries($breakpoints).forEach(([breakpoint, props]) => {
      const breakpointKey = `@media (min-width: ${breakpoint}px)`;

      style = {
        ...style,
        [breakpointKey]: {
          ...(style[breakpointKey] as object),
          gap: `${props.$gap ?? 0}px`,
        },
      };
    });
  }

  return style;
});

export { FlexContainer };
