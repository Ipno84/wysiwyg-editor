import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import React, { useCallback, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { useParams } from 'react-router-dom';

import type { ITreeState } from '@/core/state/tree/typings';
import type { RouteParams } from '@/editor/navigation/typings';

import { Renderer } from '@/core/components/renderer';
import { useTreeStore } from '@/core/state/tree';
import { getAvailableTree } from '@/core/state/tree/selectors/get-available-tree';
import { Global } from '@/editor/components/content/global';
import { useSetupComponents } from '@/editor/components/content/hooks/use-setup-components';
import { Iframe } from '@/editor/components/content/iframe';
import { Listeners } from '@/editor/components/content/listeners';
import { ContentWrapper } from '@/editor/components/content/wrapper';
import createCache from '@emotion/cache';

const Content: React.FC = () => {
    const { schemaId } = useParams<RouteParams['schema']>();

    const iframeRef = useRef<HTMLIFrameElement>(null);
    const iframeDocument = useRef<Document | undefined>();
    const iframeCache = useRef<EmotionCache>();

    const tree = useTreeStore((state: ITreeState) => getAvailableTree(state, schemaId));

    useSetupComponents();

    const onDomContentLoaded = useCallback(() => {
        const contentRoot = iframeDocument.current?.getElementById('content-root');

        if (contentRoot && iframeCache.current) {
            const root = createRoot(contentRoot);
            root.render(
                <CacheProvider value={iframeCache.current}>
                    <CssBaseline />
                    <Global />
                    <Listeners iframeDocument={iframeDocument.current} />
                    <Renderer tree={tree} treeName={schemaId} />
                </CacheProvider>,
            );
        }
    }, [schemaId, tree]);

    useEffect(() => {
        if (iframeRef.current) {
            iframeDocument.current = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;

            iframeRef.current.addEventListener('mouseenter', function () {
                iframeRef.current?.focus();
            });

            if (iframeDocument.current) {
                iframeDocument.current.open();
                iframeDocument.current.write(`<html><body><div id="content-root"></div></body></html>`);
                iframeDocument.current.close();

                iframeCache.current = createCache({
                    key: 'iframe',
                    container: iframeDocument.current.head,
                });

                if (iframeDocument.current.readyState === 'complete') {
                    onDomContentLoaded();
                } else {
                    iframeDocument.current.addEventListener('DOMContentLoaded', onDomContentLoaded);
                }
            }
        }
    }, [onDomContentLoaded, schemaId, tree]);

    return (
        <ContentWrapper>
            <Iframe ref={iframeRef} />
        </ContentWrapper>
    );
};

export { Content };
