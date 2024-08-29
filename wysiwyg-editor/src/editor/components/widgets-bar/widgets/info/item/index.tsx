import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton/IconButton';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import React, { useCallback, useState } from 'react';

import type { InfoWidgetItemProps } from '@/editor/components/widgets-bar/widgets/info/item/typings';

const InfoWidgetItem: React.FC<InfoWidgetItemProps> = ({ label, value }) => {
    const [copyLabel, setCopyLabel] = useState('Copy');

    const onClick = useCallback(() => {
        navigator.clipboard.writeText(value);
        setCopyLabel('Copied!');
    }, [value]);

    const onMouseEnter = useCallback(() => {
        if (copyLabel !== 'Copy') setCopyLabel('Copy');
    }, [copyLabel]);

    return (
        <ListItem
            secondaryAction={
                <Tooltip title={copyLabel} placement="left">
                    <IconButton edge="end" aria-label="copy" onClick={onClick} onMouseEnter={onMouseEnter}>
                        <ContentCopyIcon />
                    </IconButton>
                </Tooltip>
            }
            disablePadding
        >
            <ListItemText primary={label} primaryTypographyProps={{ fontWeight: 700 }} secondary={value} />
        </ListItem>
    );
};

export { InfoWidgetItem };
