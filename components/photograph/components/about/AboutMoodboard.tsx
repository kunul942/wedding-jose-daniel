import Image, { StaticImageData } from 'next/image';

import { useAnimations } from '@/hooks';
import { aboutMoodboard } from '@/constant';
import {
    portfolioImage2,
    portfolioImage5,
    portfolioImage9,
    portfolioImage12,
    pf31,
    pf33,
    pf2,
} from '@/assets';

type Tile = {
    src: StaticImageData;
    /** posición en el lienzo del collage (desktop), en % del contenedor */
    desktop: string;
    /** celda del mosaico en mobile */
    mobile: string;
};

const tiles: Tile[] = [
    {
        src: pf2,
        desktop: 'lg:left-0 lg:top-[14%] lg:w-[28%] lg:h-[34.5%]',
        mobile: 'col-span-1 aspect-[4/5]',
    },
    {
        src: portfolioImage2,
        desktop: 'lg:left-[24%] lg:top-0 lg:w-[25%] lg:h-[37.5%]',
        mobile: 'col-span-1 aspect-[3/4] -mt-6',
    },
    {
        src: portfolioImage5,
        desktop: 'lg:left-[55.5%] lg:top-[5%] lg:w-[23%] lg:h-[36%]',
        mobile: 'col-span-1 aspect-[3/4]',
    },
    {
        src: portfolioImage9,
        desktop: 'lg:left-[73.5%] lg:top-[28%] lg:w-[26.5%] lg:h-[38%]',
        mobile: 'col-span-1 aspect-[4/5] -mt-6',
    },
    {
        src: pf31,
        desktop: 'lg:left-[2.5%] lg:top-[55%] lg:w-[24%] lg:h-[31%]',
        mobile: 'col-span-1 aspect-[4/5]',
    },
    {
        src: pf33,
        desktop: 'lg:left-[21%] lg:top-[59%] lg:w-[24.5%] lg:h-[37%]',
        mobile: 'col-span-1 aspect-[3/4] -mt-6',
    },
    {
        src: portfolioImage12,
        desktop: 'lg:left-[53%] lg:top-[60.5%] lg:w-[30%] lg:h-[35%]',
        mobile: 'col-span-2 aspect-[16/11]',
    },
];

/** notas manuscritas: mismo orden que aboutMoodboard.notes */
const notePositions = [
    'lg:left-[-7%] lg:top-[5%] lg:-rotate-[10deg]',
    'lg:left-[80%] lg:top-[7%] lg:-rotate-[7deg]',
    'lg:left-[1%] lg:top-[87%] lg:-rotate-[7deg]',
];

export const AboutMoodboard = () => {
    const { fadeOut } = useAnimations();
    const { eyebrow, notes, images } = aboutMoodboard;

    return (
        <section className='w-full overflow-hidden bg-white py-20 lg:py-28'>
            <div
                className='mx-auto w-[88%] max-w-[1180px]'
                data-aos={fadeOut}
            >
                {/***** LABEL *****/}
                <p className='ui_sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#211d1a] lg:text-[12px]'>
                    {eyebrow}
                </p>

                {/***** COLLAGE *****/}
                <div className='relative mt-10 grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8 lg:mt-8 lg:block lg:aspect-[1130/1058] lg:gap-0'>
                    {tiles.map(({ src, desktop, mobile }, index) => (
                        <div
                            key={images[index].id}
                            className={`relative w-full overflow-hidden lg:absolute lg:mt-0 lg:aspect-auto ${mobile} ${desktop}`}
                            style={{ zIndex: index + 1 }}
                        >
                            <Image
                                src={src}
                                alt={images[index].alt}
                                quality={70}
                                sizes='(max-width: 1024px) 44vw, 30vw'
                                className='h-full w-full object-cover'
                            />
                        </div>
                    ))}

                    {/***** NOTAS MANUSCRITAS *****/}
                    {notes.map(({ id, text }, index) => (
                        <span
                            key={id}
                            className={`script_hand pointer-events-none absolute z-20 hidden max-w-[150px] text-[34px] leading-[1.15] text-[#211d1a] lg:block lg:text-[44px] ${notePositions[index]}`}
                        >
                            {text}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
