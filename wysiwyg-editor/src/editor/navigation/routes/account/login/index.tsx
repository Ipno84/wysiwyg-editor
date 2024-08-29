import React from 'react';

import { useTitle } from '@/editor/hooks/use-title';

const AccountLogin: React.FC = () => {
    useTitle('Login');
    return <span>AccountLogin</span>;
};

export { AccountLogin };
