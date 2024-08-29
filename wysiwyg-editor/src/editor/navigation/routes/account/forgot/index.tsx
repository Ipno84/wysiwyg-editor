import React from 'react';

import { useTitle } from '@/editor/hooks/use-title';

const ForgotPassword: React.FC = () => {
    useTitle('Forgot Password');
    return <span>ForgotPassword</span>;
};

export { ForgotPassword };
