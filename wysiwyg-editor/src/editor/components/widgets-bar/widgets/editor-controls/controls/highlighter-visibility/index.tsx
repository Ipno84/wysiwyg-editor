import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl/FormControl';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import FormLabel from '@mui/material/FormLabel/FormLabel';
import IconButton from '@mui/material/IconButton/IconButton';
import React, { useCallback } from 'react';

import { FlexContainer } from '@/components/ui/flex-container';
import { FlexItem } from '@/components/ui/flex-item';
import { useEditorStore } from '@/editor/state/editor';
import { setHighlighterVisible as setHighlighterVisibleAction } from '@/editor/state/editor/actions/set-highlighter-visible';
import { isHighlighterVisible as isHighlighterVisibleSelector } from '@/editor/state/editor/selectors/authorables/is-hightlighter-visible';

const HighlighterVisibility: React.FC = () => {
    const isHighlighterVisible = useEditorStore(isHighlighterVisibleSelector);
    const setHighlighterVisible = useEditorStore(setHighlighterVisibleAction);

    const toogleHighlighterVisibility = useCallback(() => setHighlighterVisible(!isHighlighterVisible), [isHighlighterVisible, setHighlighterVisible]);

    return (
        <FormControl fullWidth size="small">
            <FlexContainer>
                <FlexItem $flex={1} $isFlex $centerVertically>
                    <FormLabel htmlFor={'show-hide-highlighter'}>Highlighter visibile</FormLabel>
                </FlexItem>
                <FlexItem>
                    <IconButton id={'show-hide-highlighter'} onClick={toogleHighlighterVisibility}>
                        {isHighlighterVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                </FlexItem>
            </FlexContainer>
            <FormHelperText>Change the highlighter element visibility. It should give you a better preview of the contents.</FormHelperText>
        </FormControl>
    );
};

export { HighlighterVisibility };
