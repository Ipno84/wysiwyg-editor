import 'react';

declare module 'react' {
    export type Group = {
        label: string;
        value: string;
    };

    export type PropType = 'text' | 'number' | 'structured' | 'checkbox' | 'color' | 'selectable' | 'autocomplete';

    export interface BaseProp {
        default?: any;
        required?: boolean;
        label?: string;
        group?: Group;
        multiple?: boolean;
        options?: Group[];
    }

    export interface TextProp extends BaseProp {
        type: 'text';
    }

    export interface NumericProp extends BaseProp {
        type: 'number';
    }

    export interface CheckboxProp extends BaseProp {
        type: 'checkbox';
    }

    export interface ColorProp extends BaseProp {
        type: 'color';
    }

    export interface SelectableProp extends BaseProp {
        type: 'selectable';
    }

    export interface AutocompleteProp extends BaseProp {
        type: 'autocomplete';
    }

    export interface StructuredProp extends BaseProp {
        type: 'structured';
        structure: {
            key: PropType;
            values: AuthorableProps;
        };
    }

    export type AuthorableProp = TextProp | NumericProp | StructuredProp | CheckboxProp | ColorProp | SelectableProp | AutocompleteProp;

    export type AuthorableProps = Record<string, AuthorableProp>;

    interface FunctionComponent<P = {}> {
        authorableProps?: AuthorableProps;
        uuid?: string;
    }

    interface ForwardRefExoticComponent<P = {}> {
        authorableProps?: AuthorableProps;
        uuid?: string;
    }

    interface ComponentClass<P = {}, S = ComponentState> extends StaticLifecycle<P, S> {
        authorableProps?: AuthorableProps;
        uuid?: string;
    }
}
