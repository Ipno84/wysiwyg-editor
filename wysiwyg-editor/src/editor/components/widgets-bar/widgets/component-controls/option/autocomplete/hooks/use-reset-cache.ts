import { useEffect, useRef } from 'react';
import { VariableSizeList } from 'react-window';

const useResetCache = (data: any) => {
    const ref = useRef<VariableSizeList>(null);

    useEffect(() => {
        if (ref.current != null) {
            ref.current.resetAfterIndex(0, true);
        }
    }, [data]);
    return ref;
};

export { useResetCache };
