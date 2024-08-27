import React from "react";

import { Label as Styled } from "@/components/ui/label/styled";
import type { LabelProps } from "@/components/ui/label/typings";

const Label: React.FC<LabelProps> = ({ $for, children }) => {
  return <Styled htmlFor={$for}>{children}</Styled>;
};

export { Label };
