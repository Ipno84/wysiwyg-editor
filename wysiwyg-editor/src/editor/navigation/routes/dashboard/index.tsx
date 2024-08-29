import React from 'react';

import { useTitle } from '@/editor/hooks/use-title';

const Dashboard: React.FC = () => {
    useTitle('Dashboard');
    return <span>Dashboard</span>;
};

export { Dashboard };
