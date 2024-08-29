import Typography from '@mui/material/Typography/Typography';
import { memo, useCallback, useEffect, useMemo } from 'react';

import type { RouterSubscriber } from '@remix-run/router';
import type { RouterState } from '@remix-run/router';

import { paths } from '@/editor/navigation/paths';
import { router } from '@/editor/navigation/router';
import { useNavigationStore } from '@/editor/state/navigation';
import { setSelectedPath as setSelectedPathAction } from '@/editor/state/navigation/actions/set-selected-path';
import { getPageTitle } from '@/editor/state/navigation/selectors/get-page-title';

const NavBarTitleComponent: React.FC = () => {
    const pathsKeys = useMemo(() => Object.keys(paths), []);
    const pathsValues = useMemo(() => Object.values(paths), []);

    const setSelectedPath = useNavigationStore(setSelectedPathAction);

    const pageTitle = useNavigationStore(getPageTitle);

    const handleNavigationState = useCallback(
        ({ matches }: RouterState) => {
            if (matches.length > 0 && matches[0].route.path) {
                const index = pathsValues.indexOf(matches[0].route.path);
                const pathKey = pathsKeys[index] as keyof typeof paths;
                setSelectedPath(pathKey);
            }
        },
        [pathsKeys, pathsValues, setSelectedPath],
    );

    const onNavigationChange = useCallback<RouterSubscriber>(
        (navigationState) => {
            handleNavigationState(navigationState);
        },
        [handleNavigationState],
    );

    useEffect(() => {
        handleNavigationState(router.state);
    }, [handleNavigationState]);

    useEffect(() => {
        router.subscribe(onNavigationChange);
    }, [onNavigationChange]);

    if (!pageTitle) return null;

    return (
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {pageTitle}
        </Typography>
    );
};

const NavBarTitle = memo(NavBarTitleComponent);

export { NavBarTitle };
