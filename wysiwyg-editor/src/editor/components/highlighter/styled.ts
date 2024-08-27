import styled from "@emotion/styled";
import type { CSSObject } from "@emotion/styled";

import type { HighlighterProps } from "@/editor/components/highlighter/typings";

const Highlighter = styled.div<HighlighterProps>(({ selected }) => {
  const style: CSSObject = {
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 3,
    position: "absolute",
    opacity: selected ? 1 : 0,
    transition: "opacity .3s ease",
    cursor: "pointer",
    zIndex: selected ? undefined : 999,
    ":hover": {
      opacity: 1,
      "span, div": {
        opacity: 1,
      },
    },
    "span, div": {
      position: "absolute",
      backgroundColor: "red",
      color: "white",
      fontWeight: "bold",
      fontFamily: "sans-serif",
      paddingLeft: 7,
      paddingRight: 7,
      paddingTop: 4,
      paddingBottom: 4,
      opacity: 0,
      transition: "opacity .3s ease",
    },
    div: {
      top: -3,
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
