import Image from 'next/image';

import { contactHero } from '@/constant';
import { contactMainImage } from '@/assets';

export const ContactHero = () => {
    const { title, label } = contactHero;

    return (
        <section className='relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden'>
            {/***** BACKGROUND *****/}
            <div className='session-hero__tint absolute inset-0'>
                <Image
                    priority
                    src={contactMainImage}
                    alt={title}
                    quality={70}
                    sizes='100vw'
                    className='h-full w-full object-cover object-center grayscale'
                />
            </div>

            {/***** TITLE *****/}
            <div className='relative z-10 flex flex-col items-center px-6 text-center text-white'>
                <h1 className='session-hero__monogram display_serif text-[15vw] sm:text-[12vw] lg:text-[7.5vw] 2xl:text-[6.5vw]'>
                    {title}
                </h1>

                <p className='session-hero__name ui_sans mt-5 text-[11px] uppercase sm:text-[13px] lg:mt-7 lg:text-[15px]'>
                    {label}
                </p>
            </div>
        </section>
    );
};
