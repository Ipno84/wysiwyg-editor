import { AutocompleteRenderGroupParams } from '@mui/material/Autocomplete/Autocomplete';

import { GroupHeader } from '@/editor/components/widgets-bar/widgets/component-controls/option/autocomplete/group-header';
import { GroupItems } from '@/editor/components/widgets-bar/widgets/component-controls/option/autocomplete/group-items';

const renderGroup = (params: AutocompleteRenderGroupParams) => (
    <li key={params.key}>
        <GroupHeader>{params.group}</GroupHeader>
        <GroupItems>{params.children}</GroupItems>
    </li>
);

export { renderGroup };
