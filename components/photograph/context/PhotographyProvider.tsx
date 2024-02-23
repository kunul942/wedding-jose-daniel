import { useState } from 'react';
import { PhotographyContext } from './';

export const PhotographyProvider = ({ children }: any) => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(true);
    };

    const handleCloseMenu = () => {
        setOpenMenu(false);
    };

    return (
        <PhotographyContext.Provider
            value={{ openMenu, handleCloseMenu, handleOpenMenu }}
        >
            {children}
        </PhotographyContext.Provider>
    );
};
