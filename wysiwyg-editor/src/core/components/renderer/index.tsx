import React, { useMemo } from 'react';

import type { RendererProps } from '@/core/components/renderer/typings';
import type { ITreeState } from '@/core/state/tree/typings';

import { useTreeStore } from '@/core/state/tree';
import { getAvailableComponent } from '@/core/state/tree/selectors/get-available-component';

const Renderer: React.FC<RendererProps> = ({ tree, leaf, parentPath = '', treeName }) => {
    const Component = useTreeStore((state: ITreeState) => getAvailableComponent(state, typeof leaf === 'string' ? '' : leaf?.name));

    const leafPath = useMemo(() => `${treeName ?? parentPath}`, [parentPath, treeName]);

    if (tree) {
        return (
            <>
                {tree.map((leaf, index) => {
                    const key = `${leafPath}${treeName ? '' : '.children'}[${index}]`;

                    return <Renderer key={key} leaf={leaf} parentPath={key} />;
                })}
            </>
        );
    }

    if (leaf) {
        if (typeof leaf === 'string') return <>{leaf}</>;

        if (!Component) return null;

        if (!leaf.children) return <Component {...leaf.props} uuid={leaf.uuid} />;

        console.log(leaf.name, leafPath);

        return (
            <Component {...leaf.props} uuid={leaf.uuid}>
                <Renderer tree={leaf.children} parentPath={leafPath} />
            </Component>
        );
    }

    return null;
};

export { Renderer };
