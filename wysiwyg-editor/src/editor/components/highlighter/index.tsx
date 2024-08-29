import React, { useEffect, useRef, useState } from 'react';

import type { HighlighterProps } from '@/editor/components/highlighter/typings';

import { Highlighter as Styled } from '@/editor/components/highlighter/styled';
import { useEditorStore } from '@/editor/state/editor';
import { getAuthorableState } from '@/editor/state/editor/selectors/authorables/get-authorable-state';
import { getSelectedAuthorableKey } from '@/editor/state/editor/selectors/authorables/get-selected-authorable-key';

const Highlighter: React.FC<HighlighterProps> = ({ wrapperComponentRef, selected, componentName, onClick }) => {
    const selectedAuthorableKey = useEditorStore(getSelectedAuthorableKey);
    const authorableState = useEditorStore(getAuthorableState);

    const [domRect, setDomRect] = useState<DOMRect>(new DOMRect());

    useEffect(() => {
        if (wrapperComponentRef?.current) {
            const rect = wrapperComponentRef.current?.getBoundingClientRect();
            if (rect) setDomRect(rect);
        }
    }, [selectedAuthorableKey, wrapperComponentRef]);

    useEffect(() => {
        if (wrapperComponentRef?.current) {
            const rect = wrapperComponentRef.current?.getBoundingClientRect();
            if (rect) setDomRect(rect);
        }
    }, [authorableState, wrapperComponentRef]);

    const resizeObserver = useRef<ResizeObserver>();
    const mutationObserver = useRef<MutationObserver>();

    useEffect(() => {
        if (wrapperComponentRef?.current) {
            resizeObserver.current = new ResizeObserver(() => {
                const rect = wrapperComponentRef.current?.getBoundingClientRect();
                if (rect) setDomRect(rect);
            });

            resizeObserver.current.observe(wrapperComponentRef.current);

            mutationObserver.current = new MutationObserver(() => {
                const rect = wrapperComponentRef.current?.getBoundingClientRect();
                if (rect) setDomRect(rect);
            });

            mutationObserver.current.observe(wrapperComponentRef.current, {
                attributes: true,
                attributeFilter: ['class'],
            });
        }
    }, [wrapperComponentRef]);

    return (
        <Styled
            selected={selected}
            style={{
                width: `${domRect.width}px`,
                height: `${domRect.height}px`,
                top: `${domRect.top}px`,
                left: `${domRect.left}px`,
            }}
            onClick={onClick}
        >
            <div>{componentName}</div>
        </Styled>
    );
};

export { Highlighter };
