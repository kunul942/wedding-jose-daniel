import { useState } from 'react';

export const useOpenLinks = () => {
    const [isOver, setIsOver] = useState(false);

    const handleClickOver = () => {
        setIsOver(true);
    };

    const handleClickOut = () => {
        setIsOver(false);
    };

    return {
        isOver,
        handleClickOver,
        handleClickOut,
    };
};
