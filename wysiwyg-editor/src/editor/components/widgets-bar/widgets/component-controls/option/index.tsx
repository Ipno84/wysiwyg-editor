import React, { useMemo } from 'react';

import type { OptionProps } from '@/editor/components/widgets-bar/widgets/component-controls/option/typings';
import type { IEditorState } from '@/editor/state/editor/typings';

import { useTreeStore } from '@/core/state/tree';
import { getSelectedLeafPropFromPathByKey } from '@/core/state/tree/selectors/get-selected-leaf-prop-from-path-by-key';
import { ITreeState } from '@/core/state/tree/typings';
import { InputAutocomplete } from '@/editor/components/widgets-bar/widgets/component-controls/option/autocomplete';
import { InputCheckbox } from '@/editor/components/widgets-bar/widgets/component-controls/option/checkbox';
import { InputColor } from '@/editor/components/widgets-bar/widgets/component-controls/option/color';
import { InputNumber } from '@/editor/components/widgets-bar/widgets/component-controls/option/number';
import { InputSelectable } from '@/editor/components/widgets-bar/widgets/component-controls/option/selectable';
import { InputText } from '@/editor/components/widgets-bar/widgets/component-controls/option/text';
import { useEditorStore } from '@/editor/state/editor';
import { getSelectedAuthorableStateByKey } from '@/editor/state/editor/selectors/authorables/get-selected-authorable-state-by-key';
import { getSelectedLeafPath } from '@/editor/state/editor/selectors/authorables/get-selected-leaf-path';

const Option: React.FC<OptionProps> = ({ authorableProp, authorablePropKey, index, onOptionChange }) => {
    const selectedLeafPath = useEditorStore(getSelectedLeafPath);
    const selectedLeafProp = useTreeStore((state: ITreeState) => getSelectedLeafPropFromPathByKey(state, selectedLeafPath, authorablePropKey));
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
        <Component
            authorablePropKey={authorablePropKey}
            authorableProp={authorableProp}
            index={index}
            onOptionChange={onOptionChange}
            value={selectedAuthorableStateByKey}
            leafValue={selectedLeafProp}
        />
    );
};

export { Option };
