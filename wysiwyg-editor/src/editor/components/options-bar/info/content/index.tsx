import CardContent from "@mui/material/CardContent/CardContent";
import List from "@mui/material/List/List";
import React, { useMemo } from "react";

import { useEditorStore } from "@/editor/state/editor";
import { getSelectedAuthorableComponentName } from "@/editor/state/editor/selectors/get-selected-authorable-component-name";
import { getSelectedAuthorableKey } from "@/editor/state/editor/selectors/get-selected-authorable-key";
import { InfoItem } from "@/editor/components/options-bar/info/item";

const InfoContent: React.FC = () => {
  const selectedAuthorableKey = useEditorStore(getSelectedAuthorableKey);
  const selectedAuthorableComponentName = useEditorStore(
    getSelectedAuthorableComponentName,
  );

  const informations = useMemo(() => {
    return [
      {
        label: "Component Name",
        value: selectedAuthorableComponentName,
      },
      {
        label: "Component Key",
        value: selectedAuthorableKey,
      },
    ];
  }, [selectedAuthorableComponentName, selectedAuthorableKey]);

  return (
    <CardContent>
      <List>
        {informations.map((information) => (
          <InfoItem {...information} />
        ))}
      </List>
    </CardContent>
  );
};

export { InfoContent };
