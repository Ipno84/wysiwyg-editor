import { autocompleteClasses } from '@mui/material/Autocomplete';
import { default as MuiPopper } from '@mui/material/Popper/Popper';

import { styled } from '@mui/system';

const Popper = styled(MuiPopper)({
    [`& .${autocompleteClasses.listbox}`]: {
        boxSizing: 'border-box',
        '& ul': {
            padding: 0,
            margin: 0,
        },
    },
});

export { Popper };
