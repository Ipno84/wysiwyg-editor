import FormControl from "@mui/material/FormControl/FormControl";
import TextField from "@mui/material/TextField/TextField";
import React, { useCallback, useMemo } from "react";

import type { OptionProps } from "@/components/editor/options-bar/option/typings";

const InputText: React.FC<OptionProps> = ({
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
    <FormControl fullWidth size="small">
      <TextField
        id={`${authorablePropKey}-${index}`}
        variant="outlined"
        size="small"
        label={authorableProp.label}
        value={currentValue}
        required={authorableProp.required}
        aria-required={authorableProp.required}
        type="text"
        onChange={onChange}
        fullWidth
      />
    </FormControl>
  );
};

export { InputText };
