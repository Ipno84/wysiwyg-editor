import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { useParams } from 'react-router-dom';

import type { ITreeState } from '@/core/state/tree/typings';
import type { RouteParams } from '@/editor/navigation/typings';

import { Renderer } from '@/core/components/renderer';
import { useTreeStore } from '@/core/state/tree';
import { getAvailableTree } from '@/core/state/tree/selectors/get-available-tree';
import { useSetupComponents } from '@/editor/components/content/hooks/use-setup-components';
import { Iframe } from '@/editor/components/content/iframe';
import { ContentWrapper } from '@/editor/components/content/wrapper';
import createCache from '@emotion/cache';

const Content: React.FC = () => {
    const { schemaId } = useParams<RouteParams['schema']>();

    const iframeRef = useRef<HTMLIFrameElement>(null);

    const tree = useTreeStore((state: ITreeState) => getAvailableTree(state, schemaId));

    useSetupComponents();

    useEffect(() => {
        const iframe = iframeRef.current;

        if (iframe) {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

            if (iframeDoc) {
                iframeDoc.open();
                iframeDoc.write('<html><body><div id="content-root"></div></body></html>');
                iframeDoc.close();

                const iframeCache = createCache({
                    key: 'iframe',
                    container: iframeDoc.head,
                });

                const contentRoot = iframeDoc.getElementById('content-root');

                if (contentRoot) {
                    const root = createRoot(contentRoot);
                    root.render(
                        <CacheProvider value={iframeCache}>
                            <CssBaseline />
                            <Renderer tree={tree} treeName={schemaId} />
                        </CacheProvider>,
                    );
                }
            }
        }
    }, [schemaId, tree]);

    return (
        <ContentWrapper>
            <Iframe ref={iframeRef} />
        </ContentWrapper>
    );
};

export { Content };
