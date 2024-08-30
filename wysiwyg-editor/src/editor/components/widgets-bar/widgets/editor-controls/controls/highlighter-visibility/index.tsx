import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton/IconButton';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import React, { useCallback } from 'react';

import { useEditorStore } from '@/editor/state/editor';
import { setHighlighterVisible as setHighlighterVisibleAction } from '@/editor/state/editor/actions/set-highlighter-visible';
import { isHighlighterVisible as isHighlighterVisibleSelector } from '@/editor/state/editor/selectors/authorables/is-hightlighter-visible';

const HighlighterVisibility: React.FC = () => {
    const isHighlighterVisible = useEditorStore(isHighlighterVisibleSelector);
    const setHighlighterVisible = useEditorStore(setHighlighterVisibleAction);

    const toogleHighlighterVisibility = useCallback(() => setHighlighterVisible(!isHighlighterVisible), [isHighlighterVisible, setHighlighterVisible]);

    return (
        <ListItem
            secondaryAction={
                <IconButton id={'show-hide-highlighter'} onClick={toogleHighlighterVisibility}>
                    {isHighlighterVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
            }
        >
            <ListItemText
                primary={'Highlighter visibile'}
                primaryTypographyProps={{ fontWeight: 700 }}
                secondary={'Change the highlighter element visibility. It should give you a better preview of the contents.'}
            />
        </ListItem>
    );
};

export { HighlighterVisibility };
