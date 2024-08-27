import React from "react";

import { Reset } from "@/editor/components/options-bar/submissions/reset";
import { Save } from "@/editor/components/options-bar/submissions/save";
import { FlexContainer } from "@/components/ui/flex-container";
import { FlexItem } from "@/components/ui/flex-item";

const Submissions: React.FC = () => {
  return (
    <FlexContainer $paddingLeft={16} $paddingRight={16}>
      <FlexItem $flex={1}>
        <Reset />
      </FlexItem>
      <FlexItem>
        <Save />
      </FlexItem>
    </FlexContainer>
  );
};

export { Submissions };
