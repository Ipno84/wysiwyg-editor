import React, { useMemo } from 'react';

import type { OptionProps } from '@/editor/components/options-bar/option/typings';
import type { IEditorState } from '@/editor/state/editor/typings';

import { ViewComponent } from '@/components/ui/view';
import { InputAutocomplete } from '@/editor/components/options-bar/option/autocomplete';
import { InputCheckbox } from '@/editor/components/options-bar/option/checkbox';
import { InputColor } from '@/editor/components/options-bar/option/color';
import { InputNumber } from '@/editor/components/options-bar/option/number';
import { InputSelectable } from '@/editor/components/options-bar/option/selectable';
import { InputText } from '@/editor/components/options-bar/option/text';
import { useEditorStore } from '@/editor/state/editor';
import { getSelectedAuthorableStateByKey } from '@/editor/state/editor/selectors/authorables/get-selected-authorable-state-by-key';

const Option: React.FC<OptionProps> = ({ authorableProp, authorablePropKey, index, onOptionChange }) => {
    const selectedAuthorableStateByKey = useEditorStore((state: IEditorState) => getSelectedAuthorableStateByKey(state, authorablePropKey));

    const Component = useMemo(() => {
        switch (authorableProp.type) {
            case 'number':
                return InputNumber;
            case 'text':
                return InputText;
            case 'checkbox':
                return InputCheckbox;
            case 'color':
                return InputColor;
            case 'selectable':
                return InputSelectable;
            case 'autocomplete':
                return InputAutocomplete;
        }
    }, [authorableProp]);

    if (!Component) return null;

    return (
        <ViewComponent $paddingLeft={16} $paddingRight={16}>
            <Component
                authorablePropKey={authorablePropKey}
                authorableProp={authorableProp}
                index={index}
                onOptionChange={onOptionChange}
                value={selectedAuthorableStateByKey}
            />
        </ViewComponent>
    );
};

export { Option };
