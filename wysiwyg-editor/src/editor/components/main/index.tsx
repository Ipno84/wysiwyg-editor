import { useEditorStore } from "@/editor/state/editor";
import { hasSelectedDevice as hasSelectedDeviceSelector } from "@/editor/state/editor/selectors/has-selected-device-id";
import Grid, { GridOwnProps } from "@mui/material/Grid/Grid";
import React, { useMemo } from "react";
import type { PropsWithChildren } from "react";

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  const hasSelectedDevice = useEditorStore(hasSelectedDeviceSelector);

  const sxProps = useMemo<GridOwnProps["sx"]>(() => {
    if (hasSelectedDevice) {
      return {
        flex: 1,
        textAlign: "center",
        display: "ruby",
        overflow: "auto",
        height: "100%",
        paddingLeft: 2,
        paddingRight: 2,
      };
    }

    return {
      flex: 1,
      textAlign: "center",
      overflow: "auto",
      height: "100%",
    };
  }, [hasSelectedDevice]);

  return (
    <Grid item sx={sxProps}>
      {children}
    </Grid>
  );
};

export { Main };
