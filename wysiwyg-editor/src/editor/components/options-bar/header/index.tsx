import { Typography } from "@mui/material";
import React from "react";

import { ViewComponent } from "@/components/ui/view";
import { useEditorStore } from "@/editor/state/editor";
import { getSelectedAuthorableComponentName } from "@/editor/state/editor/selectors/get-selected-authorable-component-name";
import { getSelectedAuthorableKey } from "@/editor/state/editor/selectors/get-selected-authorable-key";

const OptionsBarHeader: React.FC = () => {
  const selectedAuthorableKey = useEditorStore(getSelectedAuthorableKey);
  const selectedAuthorableComponentName = useEditorStore(
    getSelectedAuthorableComponentName,
  );

  return (
    <ViewComponent $paddingLeft={16} $paddingRight={16} $paddingTop={16}>
      <ViewComponent $paddingBottom={16}>
        <Typography variant="h5">Options</Typography>
      </ViewComponent>
      <ViewComponent $paddingBottom={16}>
        <Typography>
          {selectedAuthorableComponentName}{" "}
          <small>{selectedAuthorableKey}</small>
        </Typography>
      </ViewComponent>
    </ViewComponent>
  );
};

export { OptionsBarHeader };
