import type { LabelHTMLAttributes, PropsWithChildren } from "react";

interface LabelProps extends PropsWithChildren {
  $for: LabelHTMLAttributes<HTMLLabelElement>["htmlFor"];
}

export type { LabelProps };
