interface Props {
    className?: string;
}

const CIRCLE_TEXT = 'FOTOGRAFÍA DE BODAS · WEDDING JOSE DANIEL · ';

export const CircularBadge = ({ className = '' }: Props) => {
    return (
        <div className={`pointer-events-none select-none ${className}`}>
            <div className='relative h-full w-full'>
                <svg
                    viewBox='0 0 200 200'
                    className='hero__badge h-full w-full'
                    aria-hidden='true'
                >
                    <defs>
                        <path
                            id='badgeCircle'
                            d='M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0'
                            fill='none'
                        />
                    </defs>
                    <text
                        fill='#ffffff'
                        fontSize='11.5'
                        letterSpacing='2.6'
                        className='display_serif'
                    >
                        <textPath href='#badgeCircle' startOffset='0'>
                            {CIRCLE_TEXT}
                        </textPath>
                    </text>
                </svg>

                <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white'>
                    <span className='display_serif italic text-base leading-none mb-1 2xl:text-lg'>
                        para
                    </span>
                    <span className='ui_sans text-[9px] leading-[1.5] tracking-[0.12em] px-[26%] 2xl:text-[10px]'>
                        PAREJAS QUE AMAN
                        <br />
                        LOS MOMENTOS REALES
                    </span>
                </div>
            </div>
        </div>
    );
};
