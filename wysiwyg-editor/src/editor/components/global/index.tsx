import { Global as EmotionGlobal, css } from '@emotion/react';
import React from 'react';

const globalStyle = css({
    'body, #root': {
        margin: 0,
        minHeight: '100dvh',
        display: 'grid',
        fontFamily: 'Arial, sans-serif',
    },
    '*': {
        boxSizing: 'border-box',
    },
});

const Global: React.FC = () => <EmotionGlobal styles={globalStyle} />;

export { Global };
