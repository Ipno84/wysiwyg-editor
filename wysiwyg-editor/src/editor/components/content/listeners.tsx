import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Highlighter } from '@/editor/components/highlighter/styled';
import { useEditorStore } from '@/editor/state/editor';
import { setSelectedAuthorableKey as setSelectedAuthorableKeyAction } from '@/editor/state/editor/actions/set-selected-authorable-key';
import { getSelectedAuthorableKey } from '@/editor/state/editor/selectors/authorables/get-selected-authorable-key';
import { isHighlighterVisible as isHighlighterVisibleSelector } from '@/editor/state/editor/selectors/authorables/is-hightlighter-visible';

const Listeners: React.FC<{ iframeDocument: Document | undefined }> = ({ iframeDocument }) => {
    const isHighlighterVisible = useEditorStore(isHighlighterVisibleSelector);

    const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);
    const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);
    const [selectedDomRect, setSelectedDomRect] = useState<DOMRect>(new DOMRect());
    const [hoveredDomRect, setHoveredDomRect] = useState<DOMRect>(new DOMRect());

    const setSelectedAuthorableKey = useEditorStore(setSelectedAuthorableKeyAction);
    const selectedAuthorableKey = useEditorStore(getSelectedAuthorableKey);

    useEffect(() => {
        const selectedAuthorableElement = iframeDocument?.querySelector<HTMLElement>(`[data-uuid="${selectedAuthorableKey}"]`);

        if (selectedAuthorableElement !== selectedElement && selectedAuthorableElement) {
            setSelectedElement(selectedAuthorableElement);
        } else if (!selectedAuthorableElement) {
            setSelectedElement(null);
        }
    }, [iframeDocument, selectedAuthorableKey, selectedElement]);

    const onElementClick = useCallback<React.MouseEventHandler>(
        (e) => {
            const targetElement = e.target as HTMLElement;
            const parentWithAttribute = targetElement.closest<HTMLElement>('[data-authorable][data-uuid]');

            setSelectedElement(parentWithAttribute);

            if (parentWithAttribute?.dataset.uuid) {
                setSelectedAuthorableKey(parentWithAttribute.dataset.uuid);
            }

            return;
        },
        [setSelectedAuthorableKey],
    );

    const onMouseMove = useCallback<React.MouseEventHandler>((e) => {
        const targetElement = e.target as HTMLElement;
        const parentWithAttribute = targetElement.closest<HTMLElement>('[data-authorable][data-uuid]');

        if (parentWithAttribute) {
            setHoveredElement(parentWithAttribute);
            setHoveredDomRect(parentWithAttribute.getBoundingClientRect());
        }
    }, []);

    const onKeyDown = useCallback<React.KeyboardEventHandler>(
        (e) => {
            if (e.key === 'Meta' || e.key === 'Control') {
                iframeDocument?.body.classList.add('cmd-or-ctrl-active');

                iframeDocument?.addEventListener('click', onElementClick as any);
                iframeDocument?.addEventListener('mousemove', onMouseMove as any);
            }
        },
        [iframeDocument, onElementClick, onMouseMove],
    );

    const onKeyUp = useCallback<React.KeyboardEventHandler>(
        (e) => {
            if (e.key === 'Meta' || e.key === 'Control') {
                iframeDocument?.body.classList.remove('cmd-or-ctrl-active');

                iframeDocument?.removeEventListener('click', onElementClick as any);
                iframeDocument?.removeEventListener('mousemove', onMouseMove as any);

                setHoveredElement(null);
            }
        },
        [iframeDocument, onElementClick, onMouseMove],
    );

    useEffect(() => {
        iframeDocument?.addEventListener('keydown', onKeyDown as any);

        iframeDocument?.addEventListener('keyup', onKeyUp as any);

        return () => {
            iframeDocument?.removeEventListener('keydown', onKeyDown as any);

            iframeDocument?.removeEventListener('keyup', onKeyUp as any);
        };
    }, [iframeDocument, onElementClick, onKeyDown, onKeyUp]);

    const resizeObserver = useRef<ResizeObserver>();
    const mutationObserver = useRef<MutationObserver>();

    useEffect(() => {
        if (selectedElement) {
            resizeObserver.current = new ResizeObserver(() => {
                const rect = selectedElement?.getBoundingClientRect();
                if (rect) setSelectedDomRect(rect);
            });

            resizeObserver.current.observe(selectedElement);

            mutationObserver.current = new MutationObserver(() => {
                const rect = selectedElement?.getBoundingClientRect();
                if (rect) setSelectedDomRect(rect);
            });

            mutationObserver.current.observe(selectedElement, {
                attributes: true,
                attributeFilter: ['class'],
            });
        }
    }, [selectedElement]);

    if (!isHighlighterVisible) return null;

    return (
        <>
            {!selectedDomRect || !selectedElement ? null : (
                <Highlighter
                    selected={selectedElement.dataset.uuid === selectedAuthorableKey}
                    style={{
                        width: `${selectedDomRect.width}px`,
                        height: `${selectedDomRect.height}px`,
                        top: `${selectedDomRect.top}px`,
                        left: `${selectedDomRect.left}px`,
                    }}
                >
                    <div>{selectedElement.dataset.componentName}</div>
                </Highlighter>
            )}
            {!hoveredDomRect || !hoveredElement ? null : (
                <Highlighter
                    selected={hoveredElement.dataset.uuid === selectedAuthorableKey}
                    style={{
                        width: `${hoveredDomRect.width}px`,
                        height: `${hoveredDomRect.height}px`,
                        top: `${hoveredDomRect.top}px`,
                        left: `${hoveredDomRect.left}px`,
                    }}
                >
                    <div>{hoveredElement.dataset.componentName}</div>
                </Highlighter>
            )}
        </>
    );
};

export { Listeners };
