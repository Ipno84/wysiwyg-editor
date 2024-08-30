import { Global as EmotionGlobal, css } from '@emotion/react';
import React from 'react';

const globalStyle = css({
    '.cmd-or-ctrl-active [data-authorable="true"]': {
        cursor: 'pointer',
        pointerEvents: 'stroke',
    },
});

const Global: React.FC = () => <EmotionGlobal styles={globalStyle} />;

export { Global };
