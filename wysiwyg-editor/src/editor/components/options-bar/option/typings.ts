import { AuthorableProp } from 'react';

interface BaseOptionProps {
    authorableProp: AuthorableProp;
    authorablePropKey: string;
    index: number;
}

interface OptionProps extends BaseOptionProps {
    onOptionChange: (authorablePropKey: string, value: any) => void;
    value?: any;
}

export type { BaseOptionProps, OptionProps };
