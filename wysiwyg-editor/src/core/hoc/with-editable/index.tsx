import { ComponentType, useEffect, useMemo, useRef } from 'react';

import type { IEditorState } from '@/editor/state/editor/typings';

import { useEditorStore } from '@/editor/state/editor';
import { setAuthorableProps as setAuthorablePropsAction } from '@/editor/state/editor/actions/set-authorable-props';
import { getAuthorableStateByKey } from '@/editor/state/editor/selectors/authorables/get-authorable-state-by-key';

const withEditable = <T extends Record<string, any>>(WrappedComponent: ComponentType<T>) => {
    const WithEditableComponent = (props: T) => {
        const ref = useRef<HTMLElement | null>(null);

        const setAuthorableProps = useEditorStore(setAuthorablePropsAction);

        const authorableState = useEditorStore((state: IEditorState) => getAuthorableStateByKey(state, props.uuid));

        useEffect(() => {
            setAuthorableProps(props.uuid, WrappedComponent.authorableProps);
        }, [setAuthorableProps, props.uuid]);

        const filteredAuthorableState = useMemo(() => {
            if (!authorableState) return {};

            return Object.keys(authorableState).reduce((acc, key) => {
                const value = authorableState[key];
                if (value !== undefined) {
                    acc[key as keyof T] = value;
                }
                return acc;
            }, {} as Partial<T>);
        }, [authorableState]);

        const manipulatedProps = useMemo(() => {
            return {
                ...props,
                ...filteredAuthorableState,
            };
        }, [filteredAuthorableState, props]);

        return <WrappedComponent {...manipulatedProps} ref={ref} />;
    };

    WithEditableComponent.displayName = WrappedComponent.displayName;
    WithEditableComponent.authorableProps = WrappedComponent.authorableProps;

    return WithEditableComponent;
};

export { withEditable };
