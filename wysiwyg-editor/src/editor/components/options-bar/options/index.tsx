import React, { useCallback } from "react";

import { Option } from "@/editor/components/options-bar/option";
import { ViewComponent } from "@/components/ui/view";
import { useEditorStore } from "@/editor/state/editor";
import { setAuthorableState as setAuthorableStateAction } from "@/editor/state/editor/actions/set-authorable-state";
import { getFilteredSelectedAuthorableProps } from "@/editor/state/editor/selectors/get-filtered-selected-authorable-props";

const OptionsList: React.FC = () => {
  const filteredSelectedAuthorableProps = useEditorStore(
    getFilteredSelectedAuthorableProps,
  );
  const setAuthorableState = useEditorStore(setAuthorableStateAction);

  const onOptionChange = useCallback(
    (authorablePropKey: string, value: any) => {
      setAuthorableState(authorablePropKey, value);
    },
    [setAuthorableState],
  );

  if (!filteredSelectedAuthorableProps) return null;

  return (
    <>
      {Object.keys(filteredSelectedAuthorableProps).map(
        (selectedAuthorablePropKey, index) => {
          const selectedAuthorableProp =
            filteredSelectedAuthorableProps[selectedAuthorablePropKey];
          return (
            <ViewComponent key={`${selectedAuthorablePropKey}-${index}`}>
              <Option
                authorableProp={selectedAuthorableProp}
                authorablePropKey={selectedAuthorablePropKey}
                index={index}
                onOptionChange={onOptionChange}
              />
            </ViewComponent>
          );
        },
      )}
    </>
  );
};

export { OptionsList };
