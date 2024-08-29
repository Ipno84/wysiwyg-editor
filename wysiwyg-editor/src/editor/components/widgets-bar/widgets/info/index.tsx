import Card from '@mui/material/Card/Card';
import React from 'react';

import { InfoWidgetContent } from '@/editor/components/widgets-bar/widgets/info/content';
import { InfoWidgetHeader } from '@/editor/components/widgets-bar/widgets/info/header';

const InfoWidget: React.FC = () => {
    return (
        <Card>
            <InfoWidgetHeader />
            <InfoWidgetContent />
        </Card>
    );
};

export { InfoWidget };
