import React from "react";

import { Input as Styled } from "@/components/ui/input/styled";
import type { InputProps } from "@/components/ui/input/typings";

const Input: React.FC<InputProps> = ({
  $id,
  $type,
  $defaultValue,
  $value,
  $required,
  $onChange,
  $checked,
}) => {
  return (
    <Styled
      id={$id}
      type={$type}
      defaultValue={$defaultValue}
      required={$required}
      onChange={$onChange}
      value={$value}
      checked={$checked}
    />
  );
};

export { Input };
