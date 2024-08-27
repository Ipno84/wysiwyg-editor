import { useEditorStore } from "@/editor/state/editor";
import { getSelectedDeviceSize } from "@/editor/state/editor/selectors/get-selected-device-size";
import { isLandscapeOrientation } from "@/editor/state/editor/selectors/is-landscape-orientation";
import { Theme } from "@mui/material";
import Box from "@mui/material/Box/Box";
import { BoxOwnProps } from "@mui/system";
import React, { PropsWithChildren, useMemo } from "react";

const ContentWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const selectedSize = useEditorStore(getSelectedDeviceSize);
  const isLandscape = useEditorStore(isLandscapeOrientation);

  const width = useMemo(
    () => selectedSize?.[isLandscape ? 1 : 0] ?? "100%",
    [selectedSize, isLandscape],
  );
  const height = useMemo(
    () => selectedSize?.[isLandscape ? 0 : 1] ?? "100%",
    [selectedSize, isLandscape],
  );

  const sxProps = useMemo<BoxOwnProps<Theme>["sx"]>(() => {
    let style: BoxOwnProps<Theme>["sx"] = {
      width,
      height,
      transition: "width .15s ease, height .15s ease",
    };
    if (selectedSize) {
      style = {
        ...style,
        outlineWidth: 8,
        outlineColor: "#333",
        outlineStyle: "solid",
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 3,
      };
    }

    return style;
  }, [height, selectedSize, width]);

  return <Box sx={sxProps}>{children}</Box>;
};

export { ContentWrapper };
