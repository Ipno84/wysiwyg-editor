import React from 'react';

import { useTitle } from '@/editor/hooks/use-title';

const Settings: React.FC = () => {
    useTitle('Settings');
    return <span>Settings</span>;
};

export { Settings };
