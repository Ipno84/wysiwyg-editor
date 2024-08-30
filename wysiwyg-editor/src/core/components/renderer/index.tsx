import React, { useMemo } from 'react';

import type { RendererProps } from '@/core/components/renderer/typings';
import type { ITreeState } from '@/core/state/tree/typings';

import { useTreeStore } from '@/core/state/tree';
import { getAvailableComponent } from '@/core/state/tree/selectors/get-available-component';

const Renderer: React.FC<RendererProps> = ({ tree, leaf, parentPath = '', treeName }) => {
    const Component = useTreeStore((state: ITreeState) => getAvailableComponent(state, typeof leaf === 'string' ? '' : leaf?.name));

    const dataIsAuthorable = useMemo(() => (typeof Component === 'function' ? true : undefined), [Component]);

    const dataUuid = useMemo(() => {
        if (!dataIsAuthorable || typeof leaf === 'string') return undefined;
        return leaf?.uuid;
    }, [dataIsAuthorable, leaf]);

    const dataComponentName = useMemo(() => {
        if (!dataIsAuthorable || typeof leaf === 'string') return undefined;
        return leaf?.name;
    }, [dataIsAuthorable, leaf]);

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

        if (!leaf.children)
            return (
                <Component {...leaf.props} uuid={leaf.uuid} data-authorable={dataIsAuthorable} data-uuid={dataUuid} data-component-name={dataComponentName} />
            );

        // TODO: use leafPath and json traverse method to save new component state in the tree
        // console.log(leaf.name, leafPath);

        return (
            <Component {...leaf.props} uuid={leaf.uuid} data-authorable={dataIsAuthorable} data-uuid={dataUuid} data-component-name={dataComponentName}>
                <Renderer tree={leaf.children} parentPath={leafPath} {...leaf.props} />
            </Component>
        );
    }

    return null;
};

export { Renderer };
