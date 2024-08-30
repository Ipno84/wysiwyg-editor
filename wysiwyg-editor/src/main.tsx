import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/App';

// if (process.env.NODE_ENV === 'development') {
//     import('react-devtools-core').then(({ connectToDevTools }) => {
//         connectToDevTools({
//             host: 'localhost',
//             port: 8097, // Porta predefinita di React DevTools standalone
//         });
//     });
// }

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CssBaseline />
        <App />
    </StrictMode>,
);
