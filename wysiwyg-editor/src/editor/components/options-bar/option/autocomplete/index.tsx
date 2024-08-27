import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import type { AutocompleteValue } from "@mui/material/Autocomplete/Autocomplete";
import FormControl from "@mui/material/FormControl/FormControl";
import React, { useCallback, useMemo } from "react";

import { ListboxComponent } from "@/editor/components/options-bar/option/autocomplete/list-box-component";
import { Popper } from "@/editor/components/options-bar/option/autocomplete/popper";
import { renderGroup } from "@/editor/components/options-bar/option/autocomplete/render-group";
import { renderInput } from "@/editor/components/options-bar/option/autocomplete/render-input";
import type { OptionProps } from "@/editor/components/options-bar/option/typings";

const InputAutocomplete: React.FC<OptionProps> = ({
  authorableProp,
  authorablePropKey,
  index,
  onOptionChange,
  value,
}) => {
  const options = useMemo(() => {
    if (!authorableProp.options) return [];

    return authorableProp.options.map((option) => {
      const firstLetter = option.value[0].toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
        ...option,
      };
    });
  }, [authorableProp.options]);

  const onChange = useCallback(
    (
      _: React.SyntheticEvent,
      val: AutocompleteValue<React.Group, false, false, false>,
    ) => {
      if (!val) return;

      const { value } = val;
      onOptionChange(authorablePropKey, value);
    },
    [authorablePropKey, onOptionChange],
  );

  const currentValue = useMemo(() => {
    const initialValue = value ?? authorableProp.default;
    if (initialValue === undefined)
      return { firstLetter: "", label: "", value: "" };
    return options.find((option) => option.value === initialValue);
  }, [value, authorableProp.default, options]);

  return (
    <FormControl fullWidth size="small">
      <Autocomplete
        size="small"
        id={`${authorablePropKey}-${index}`}
        autoHighlight={true}
        options={options}
        getOptionLabel={(option) => option.label ?? ""}
        onChange={onChange}
        disableListWrap={true}
        PopperComponent={Popper}
        ListboxComponent={ListboxComponent}
        defaultValue={currentValue}
        renderInput={renderInput}
        renderGroup={renderGroup}
      />
    </FormControl>
  );
};

export { InputAutocomplete };
