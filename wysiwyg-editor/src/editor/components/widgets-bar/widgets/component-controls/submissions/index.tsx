import React from 'react';

import { Reset } from '@/editor/components/widgets-bar/widgets/component-controls/submissions/reset';
import { Save } from '@/editor/components/widgets-bar/widgets/component-controls/submissions/save';

const Submissions: React.FC = () => {
    return (
        <>
            <Reset />
            <Save />
        </>
    );
};

export { Submissions };
