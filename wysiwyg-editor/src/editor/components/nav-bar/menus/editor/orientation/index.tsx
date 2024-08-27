import ScreenRotationIcon from "@mui/icons-material/ScreenRotation";
import IconButton from "@mui/material/IconButton/IconButton";
import { useMemo } from "react";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import { useEditorStore } from "@/editor/state/editor";
import { toggleLandscapeOrientation as toggleLandscapeOrientationAction } from "@/editor/state/editor/actions/toggle-orientation";
import { isLandscapeOrientation } from "@/editor/state/editor/selectors/is-landscape-orientation";

const Orientation: React.FC = () => {
  const toggleLandscapeOrientation = useEditorStore(
    toggleLandscapeOrientationAction,
  );

  const isLandscape = useEditorStore(isLandscapeOrientation);

  const rotationDegrees = useMemo(
    () => (isLandscape ? 135 : 46),
    [isLandscape],
  );

  return (
    <Tooltip title="Rotate" placement="bottom">
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleLandscapeOrientation}
        color="inherit"
      >
        <ScreenRotationIcon
          sx={{
            transform: `rotate(${rotationDegrees}deg)`,
            transition: "transform .15s ease",
          }}
        />
      </IconButton>
    </Tooltip>
  );
};

export { Orientation };
