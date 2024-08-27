import React, { useMemo } from "react";

import type { RendererProps } from "@/core/components/renderer/typings";
import { useTreeStore } from "@/core/state/tree";
import { getAvailableComponent } from "@/core/state/tree/selectors/get-available-component";
import type { ITreeState } from "@/core/state/tree/typings";

const Renderer: React.FC<RendererProps> = ({
  tree,
  leaf,
  parentPath = "",
  treeName,
}) => {
  console.log("rendering");
  const Component = useTreeStore((state: ITreeState) =>
    getAvailableComponent(state, typeof leaf === "string" ? "" : leaf?.name),
  );

  const leafPath = useMemo(() => {
    return `${treeName ?? parentPath}`;
  }, [parentPath, treeName]);

  if (tree) {
    return (
      <>
        {tree.map((leaf, index) => {
          const key = `${leafPath}.children[${index}]`;

          return (
            <Renderer
              key={key}
              leaf={leaf}
              parentPath={`${leafPath}.children[${index}]`}
            />
          );
        })}
      </>
    );
  }

  if (leaf) {
    if (typeof leaf === "string") return <>{leaf}</>;

    if (!Component) return null;

    if (!leaf.children) return <Component {...leaf.props} uuid={leaf.uuid} />;

    return (
      <Component {...leaf.props} uuid={leaf.uuid}>
        <Renderer tree={leaf.children} parentPath={leafPath} />
      </Component>
    );
  }

  return null;
};

export { Renderer };
