import { Divider } from '@mui/material';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import React from 'react';

const InfoWidgetHeader: React.FC = () => {
    return (
        <>
            <CardHeader title="Details" titleTypographyProps={{ fontWeight: 700 }} subheader="Informations about currently selected component" />
            <Divider />
        </>
    );
};

export { InfoWidgetHeader };
