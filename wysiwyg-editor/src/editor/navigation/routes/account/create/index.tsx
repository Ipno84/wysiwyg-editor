import React from 'react';

import { useTitle } from '@/editor/hooks/use-title';

const CreateAccount: React.FC = () => {
    useTitle('Create Account');
    return <span>CreateAccount</span>;
};

export { CreateAccount };
