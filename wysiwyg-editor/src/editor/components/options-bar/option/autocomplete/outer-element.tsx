import { forwardRef, useContext } from "react";

import { OuterElementContext } from "@/editor/components/options-bar/option/autocomplete/state/context";

const OuterElementType = forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

export { OuterElementType };
