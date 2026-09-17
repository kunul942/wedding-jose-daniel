import Image from 'next/image';
import { StaticImageData } from 'next/image';

import { getCoupleTitle } from '@/utils';

interface Props {
    image: StaticImageData;
    /** Gallery name, e.g. `'TIM + ESTEFANIA'`. */
    name: string;
}

export const PeopleGalleryHero = ({ image, name }: Props) => {
    const { initials, label } = getCoupleTitle(name);

    return (
        <section className='relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden'>
            {/***** BACKGROUND *****/}
            <div className='session-hero__tint absolute inset-0'>
                <Image
                    priority
                    src={image}
                    alt={label}
                    quality={70}
                    sizes='100vw'
                    className='h-full w-full object-cover object-center grayscale'
                />
            </div>

            {/***** MONOGRAM *****/}
            <div className='relative z-10 flex flex-col items-center px-6 text-center text-white'>
                <h1 className='session-hero__monogram display_serif flex items-baseline justify-center gap-[0.12em] text-[22vw] sm:text-[16vw] lg:text-[9vw] 2xl:text-[8vw]'>
                    {initials.map((initial, index) => (
                        <span key={`${initial}-${index}`} className='contents'>
                            {index > 0 && (
                                <span className='text-[0.42em] font-light'>
                                    +
                                </span>
                            )}
                            <span>{initial}</span>
                        </span>
                    ))}
                </h1>

                <p className='session-hero__name ui_sans mt-5 text-[11px] uppercase sm:text-[13px] lg:mt-7 lg:text-[15px]'>
                    {label}
                </p>
            </div>
        </section>
    );
};
