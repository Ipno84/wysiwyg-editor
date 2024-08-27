import { useEffect } from "react";

import { Icon } from "@/components/mui/data-display/icon";
import {
  Typography,
  TypographyComponent,
} from "@/components/mui/data-display/typography";
import { Button } from "@/components/mui/input/button";
import { Checkbox } from "@/components/mui/input/checkbox";
import { FlexItem } from "@/components/ui/flex-item";
import { GridContainer } from "@/components/ui/grid-container";
import { View } from "@/components/ui/view";
import { useTreeStore } from "@/core/state/tree";
import { setOrUpdateAvailableComponents as setOrUpdateAvailableComponentsAction } from "@/core/state/tree/actions/set-or-update-available-components";

const useSetupComponents = () => {
  const setOrUpdateAvailableComponents = useTreeStore(
    setOrUpdateAvailableComponentsAction,
  );

  useEffect(() => {
    setOrUpdateAvailableComponents({
      FlexItem,
      Button,
      Checkbox,
      Icon,
      GridContainer,
      TypographyComponent,
      View,
      Typography,
    });
  }, [setOrUpdateAvailableComponents]);
};

export { useSetupComponents };
