import Box from '@mui/material/Box/Box';
import Grid from '@mui/material/Grid/Grid';
import React from 'react';

import type { SidebarProps } from '@/editor/components/sidebar/typings';

const Sidebar: React.FC<SidebarProps> = ({ children, width = 300 }) => {
    return (
        <Grid item sx={{ height: '100%', width }}>
            <Box bgcolor={'#f3f3f3'} p={2} sx={{ height: '100%', overflowY: 'auto', overflowX: 'hidden', position: 'relative' }}>
                {children}
            </Box>
        </Grid>
    );
};

export { Sidebar };
