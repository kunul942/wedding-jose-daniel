/** Advance width (em) of each uppercase glyph in Cormorant Garamond Light. */
const glyphWidths: Record<string, number> = {
    A: 0.68, B: 0.63, C: 0.66, D: 0.73, E: 0.6, F: 0.57, G: 0.72, H: 0.76,
    I: 0.33, J: 0.38, K: 0.69, L: 0.58, M: 0.92, N: 0.75, 'Ñ': 0.75, O: 0.76,
    P: 0.59, Q: 0.76, R: 0.64, S: 0.55, T: 0.62, U: 0.74, V: 0.68, W: 0.98,
    X: 0.67, Y: 0.64, Z: 0.6, ' ': 0.25, '-': 0.35,
};

const lineWidth = (line: string, tracking: number) =>
    line
        .split('')
        .reduce(
            (total, char) => total + (glyphWidths[char] ?? 0.68) + tracking,
            0
        );

/**
 * Font size, in vw, that makes the longest line of a display title span
 * `target` percent of the viewport width.
 */
export const fitTitleSize = (
    lines: string[],
    target: number,
    tracking = 0.01
) => {
    const widest = Math.max(...lines.map((line) => lineWidth(line, tracking)));

    return `${(target / widest).toFixed(2)}vw`;
};
