import { useState } from 'react';

export const useMobileLinks = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleMobileOver = () => {
        setIsMobile(true);
    };
    const handleMobileOut = () => {
        setIsMobile(false);
    };

    return {
        isMobile,
        handleMobileOut,
        handleMobileOver,
    };
};
