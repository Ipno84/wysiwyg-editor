import Box from '@mui/material/Box/Box';

import { CommandsBar } from '@/editor/components/commands-bar';
import { Global } from '@/editor/components/global';
import { NavBar } from '@/editor/components/nav-bar';
import { RouterProvider } from '@/editor/navigation/provider';

const App: React.FC = () => {
    return (
        <>
            <Global />
            <NavBar />
            <Box sx={{ display: 'flex', overflow: 'hidden', paddingTop: '64px' }}>
                <CommandsBar />
                <Box sx={{ flexGrow: 1 }}>
                    <RouterProvider />
                </Box>
            </Box>
        </>
    );
};

export { App };
