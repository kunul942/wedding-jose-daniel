/**
 * Splits a gallery name (`'TIM + ESTEFANIA'`) into the pieces the session
 * cover needs: the monogram initials and the full name underneath.
 */
export const getCoupleTitle = (name: string) => {
    const names = name
        .split('+')
        .map((part) => part.trim())
        .filter(Boolean);

    return {
        initials: names.map((part) => part.charAt(0)),
        label: names.join(' Y '),
    };
};
