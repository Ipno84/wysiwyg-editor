import React, { useCallback, useMemo } from "react";

import type { OptionProps } from "@/components/editor/options-bar/option/typings";
import { FlexContainer } from "@/components/ui/flex-container";
import { FlexItem } from "@/components/ui/flex-item";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputColor: React.FC<OptionProps> = ({
  authorableProp,
  authorablePropKey,
  index,
  onOptionChange,
  value,
}) => {
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onOptionChange(authorablePropKey, e.target.value);
    },
    [authorablePropKey, onOptionChange],
  );

  const currentValue = useMemo(() => {
    const initialValue = value ?? authorableProp.default;
    if (initialValue === undefined) {
      return "";
    }
    return initialValue;
  }, [value, authorableProp.default]);

  return (
    <FlexContainer>
      <FlexItem $flex={1}>
        <Label $for={`${authorablePropKey}-${index}`}>
          {authorableProp.label}
        </Label>
      </FlexItem>
      <FlexItem $width={27}>
        <Input
          $id={`${authorablePropKey}-${index}`}
          $type="color"
          $defaultValue={authorableProp.default}
          $value={currentValue}
          $onChange={onChange}
          $required={authorableProp.required}
        />
      </FlexItem>
    </FlexContainer>
  );
};

export { InputColor };
