import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import IconButton from "@mui/material/IconButton/IconButton";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import React, { useCallback, useState } from "react";
import type { InfoItemProps } from "@/editor/components/options-bar/info/item/typings";

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => {
  const [copyLabel, setCopyLabel] = useState("Copy");

  const onClick = useCallback(() => {
    navigator.clipboard.writeText(value);
    setCopyLabel("Copied!");
  }, [value]);

  const onMouseEnter = useCallback(() => {
    if (copyLabel !== "Copy") setCopyLabel("Copy");
  }, [copyLabel]);

  return (
    <ListItem
      secondaryAction={
        <Tooltip title={copyLabel} placement="left">
          <IconButton
            edge="end"
            aria-label="copy"
            onClick={onClick}
            onMouseEnter={onMouseEnter}
          >
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      }
      disablePadding
    >
      <ListItemText
        primary={label}
        primaryTypographyProps={{ fontWeight: 700 }}
        secondary={value}
      />
    </ListItem>
  );
};

export { InfoItem };
