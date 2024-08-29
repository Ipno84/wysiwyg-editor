import { ComponentType, useCallback, useEffect, useMemo, useRef } from 'react';

import type { IEditorState } from '@/editor/state/editor/typings';

import { Highlighter } from '@/editor/components/highlighter';
import { useEditorStore } from '@/editor/state/editor';
import { setAuthorableProps as setAuthorablePropsAction } from '@/editor/state/editor/actions/set-authorable-props';
import { setSelectedAuthorableKey as setSelectedAuthorableKeyAction } from '@/editor/state/editor/actions/set-selected-authorable-key';
import { getAuthorableStateByKey } from '@/editor/state/editor/selectors/authorables/get-authorable-state-by-key';
import { isSelectedAuthorableKey as isSelectedAuthorableKeySelector } from '@/editor/state/editor/selectors/authorables/is-selected-authorable-key';

const withEditable = <T extends Record<string, any>>(WrappedComponent: ComponentType<T>) => {
    const WithEditableComponent = (props: T) => {
        const ref = useRef<HTMLElement | null>(null);

        const setAuthorableProps = useEditorStore(setAuthorablePropsAction);
        const setSelectedAuthorableKey = useEditorStore(setSelectedAuthorableKeyAction);

        const isSelectedAuthorableKey = useEditorStore((state: IEditorState) => isSelectedAuthorableKeySelector(state, props.uuid));

        const authorableState = useEditorStore((state: IEditorState) => getAuthorableStateByKey(state, props.uuid));

        useEffect(() => {
            setAuthorableProps(props.uuid, WrappedComponent.authorableProps);
        }, [setAuthorableProps, props.uuid]);

        const onComponentClick = useCallback(
            (e: React.MouseEvent) => {
                if (!isSelectedAuthorableKey) e.stopPropagation();
                setSelectedAuthorableKey(props.uuid, WrappedComponent.displayName);
            },
            [setSelectedAuthorableKey, props.uuid, isSelectedAuthorableKey],
        );

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

        return (
            <>
                <WrappedComponent {...manipulatedProps} ref={ref} />
                <Highlighter
                    wrapperComponentRef={ref}
                    selected={isSelectedAuthorableKey}
                    componentName={WrappedComponent.displayName}
                    componentUuid={props.uuid}
                    onClick={onComponentClick}
                />
            </>
        );
    };

    WithEditableComponent.displayName = WrappedComponent.displayName;
    WithEditableComponent.authorableProps = WrappedComponent.authorableProps;

    return WithEditableComponent;
};

export { withEditable };
