import styled from "@emotion/styled";
import type { CSSObject } from "@emotion/styled";

import type { FlexItemProps } from "@/components/ui/flex-item/typings";
import { ViewComponent } from "@/components/ui/view";

const FlexItem = styled(ViewComponent)<FlexItemProps>(({
  $flex,
  $width,
  $breakpoints,
}) => {
  let style: CSSObject = {};

  if ($flex !== undefined) style = { ...style, flex: $flex };

  if ($width !== undefined) style = { ...style, width: $width };

  if ($breakpoints !== undefined) {
    Object.entries($breakpoints).forEach(([breakpoint, props]) => {
      const breakpointKey = `@media (min-width: ${breakpoint}px)`;

      style = {
        ...style,
        [breakpointKey]: {
          ...(style[breakpointKey] as object),
          flex: props.$flex,
          width: props.$width,
        },
      };
    });
  }

  return style;
});

export { FlexItem };
