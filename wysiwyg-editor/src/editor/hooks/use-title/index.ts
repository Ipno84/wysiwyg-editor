import { useEffect } from 'react';

import { useNavigationStore } from '@/editor/state/navigation';
import { setPageTitle as setPageTitleAction } from '@/editor/state/navigation/actions/set-page-title';

const useTitle = (title?: string) => {
    const setPageTitle = useNavigationStore(setPageTitleAction);

    useEffect(() => {
        if (title) {
            document.title = title;
            setPageTitle(title);
        } else {
            setPageTitle('');
        }
    }, [setPageTitle, title]);
};

export { useTitle };
