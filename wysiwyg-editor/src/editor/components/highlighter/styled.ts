import styled from '@emotion/styled';

import type { CSSObject } from '@emotion/styled';
import type { HighlighterProps } from '@/editor/components/highlighter/typings';

const Highlighter = styled.div<HighlighterProps>(({ selected }) => {
    const color = selected ? 'red' : 'black';
    const style: CSSObject = {
        borderColor: color,
        borderStyle: 'solid',
        borderWidth: 3,
        position: 'absolute',
        opacity: 1,
        transition: 'width .3s ease, height .3s ease, top .3s ease, left .3s ease, opacity .3s ease',
        cursor: 'pointer',
        pointerEvents: 'none',
        zIndex: 999,
        'span, div': {
            position: 'absolute',
            backgroundColor: color,
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            paddingLeft: 7,
            paddingRight: 7,
            paddingTop: 4,
            paddingBottom: 4,
            opacity: 1,
        },
        div: {
            top: '100%',
            right: -3,
            fontSize: 12,
        },
        span: {
            bottom: 0,
            left: 0,
            fontSize: 9,
        },
    };

    return style;
});

export { Highlighter };
