import { forwardRef, useContext } from 'react';

import { OuterElementContext } from '@/editor/components/widgets-bar/widgets/component-controls/option/autocomplete/state/context';

const OuterElementType = forwardRef<HTMLDivElement>((props, ref) => {
    const outerProps = useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps} />;
});

export { OuterElementType };
