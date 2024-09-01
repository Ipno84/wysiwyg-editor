import ChevronLeft from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton/IconButton';
import Toolbar from '@mui/material/Toolbar/Toolbar';

import { AppBar } from '@/editor/components/nav-bar/app-bar';
import { NavBarTitle } from '@/editor/components/nav-bar/title';
import { useEditorStore } from '@/editor/state/editor';
import { toggleCommandsBarOpening as toggleCommandsBarOpeningAction } from '@/editor/state/editor/actions/toggle-commands-bar-opening';
import { isCommandsBarOpen as isCommandsBarOpenSelector } from '@/editor/state/editor/selectors/sidebars/is-commands-bar-open';

const NavBar: React.FC = () => {
    const toggleCommandsBarOpening = useEditorStore(toggleCommandsBarOpeningAction);
    const isCommandBarOpen = useEditorStore(isCommandsBarOpenSelector);

    return (
        <AppBar position="fixed" open={isCommandBarOpen} elevation={0}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleCommandsBarOpening}
                    edge="start"
                    sx={{
                        marginRight: 2.5,
                    }}
                >
                    {isCommandBarOpen ? <ChevronLeft /> : <MenuIcon />}
                </IconButton>
                <NavBarTitle />
            </Toolbar>
        </AppBar>
    );
};

export { NavBar };
