import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

import { Renderer } from "@/core/components/renderer";
import { useSetupComponents } from "@/editor/components/content/hooks/use-setup-components";
import { Iframe } from "@/editor/components/content/iframe";
import { useTreeStore } from "@/core/state/tree";
import { getAvailableTree } from "@/core/state/tree/selectors/get-available-tree";
import type { ITreeState } from "@/core/state/tree/typings";
import createCache from "@emotion/cache";

import { ContentWrapper } from "@/editor/components/content/wrapper";

const Content: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const tree = useTreeStore((state: ITreeState) =>
    getAvailableTree(state, "defaultTree"),
  );

  useSetupComponents();

  useEffect(() => {
    const iframe = iframeRef.current;

    if (iframe) {
      const iframeDoc =
        iframe.contentDocument || iframe.contentWindow?.document;

      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(
          '<html><body><div id="content-root"></div></body></html>',
        );
        iframeDoc.close();

        const iframeCache = createCache({
          key: "iframe",
          container: iframeDoc.head,
        });

        const contentRoot = iframeDoc.getElementById("content-root");

        if (contentRoot) {
          const root = createRoot(contentRoot);
          root.render(
            <CacheProvider value={iframeCache}>
              <CssBaseline />
              <Renderer tree={tree} treeName="defaultTree" />
            </CacheProvider>,
          );
        }
      }
    }
  }, [tree]);

  return (
    <ContentWrapper>
      <Iframe ref={iframeRef} />
    </ContentWrapper>
  );
};

export { Content };
