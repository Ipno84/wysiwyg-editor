import { MutableRefObject } from 'react';

interface HighlighterProps {
    wrapperComponentRef?: MutableRefObject<HTMLElement | null>;
    selected?: boolean;
    componentName?: string;
    componentUuid?: string;
    onClick?: (e: React.MouseEvent) => void;
}

export type { HighlighterProps };
