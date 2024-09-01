import LaptopIcon from '@mui/icons-material/Laptop';
import MonitorIcon from '@mui/icons-material/Monitor';
import DesktopIcon from '@mui/icons-material/PersonalVideo';
import MobileIcon from '@mui/icons-material/Smartphone';
import TabletIcon from '@mui/icons-material/TabletMac';
import TvIcon from '@mui/icons-material/Tv';
import WatchIcon from '@mui/icons-material/Watch';
import { useCallback } from 'react';

import type { Device } from '@/editor/state/editor/typings';

const useIcon = () => {
    const getIcon = useCallback((deviceType: Device['type']) => {
        switch (deviceType) {
            case 'desktop':
                return <DesktopIcon />;
            case 'laptop':
                return <LaptopIcon />;
            case 'mobile':
                return <MobileIcon />;
            case 'monitor':
                return <MonitorIcon />;
            case 'tv':
                return <TvIcon />;
            case 'watch':
                return <WatchIcon />;
            case 'tablet':
                return <TabletIcon />;
            default:
                return null;
        }
    }, []);

    return { getIcon };
};

export { useIcon };
