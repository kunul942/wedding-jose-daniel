import Image from 'next/image';

import { FadeCarousel } from './FadeCarousel';
import { CircularBadge } from './CircularBadge';

import { heroContent } from '@/constant';
import {
    homeMainImage2,
    homeMainImage3,
    homeMainImage5,
    homeMainImage7,
    homeMainImage9,
} from '@/assets';

const heroSlides = [
    homeMainImage3,
    homeMainImage5,
    homeMainImage7,
    homeMainImage9,
];

export const HomeHero = () => {
    return (
        <section className='relative flex min-h-[100svh] w-full flex-col overflow-hidden'>
            {/***** BACKGROUND *****/}
            <div className='hero__bg-tint absolute inset-0'>
                <Image
                    priority
                    quality={60}
                    src={homeMainImage2}
                    alt=''
                    aria-hidden='true'
                    sizes='100vw'
                    className='h-full w-full scale-105 object-cover grayscale blur-[3px]'
                />
            </div>

            {/***** CONTENT *****/}
            <div className='relative z-10 flex flex-1 flex-col items-center pt-[16vh] sm:pt-[18vh]'>
                <h1 className='hero__title display_serif px-4 text-center text-[13vw] text-white sm:text-[10vw] md:text-[7.4vw] lg:whitespace-nowrap lg:text-[6.4vw] 2xl:text-[6vw]'>
                    {heroContent.title}
                </h1>

                <p className='hero__eyebrow ui_sans mt-8 px-6 text-center text-[10px] text-white sm:mt-10 sm:text-[11px] lg:text-[13px]'>
                    {heroContent.subtitle}
                </p>

                {/***** CAROUSEL + BADGE *****/}
                <div className='relative mt-auto w-[82%] max-w-[620px] pt-12 sm:w-[62%] lg:w-[42%]'>
                    <CircularBadge className='absolute -top-[8%] right-[-22%] z-20 hidden aspect-square w-[34%] max-w-[230px] md:block' />

                    <FadeCarousel
                        images={heroSlides}
                        className='aspect-[4/5] w-full shadow-2xl'
                    />
                </div>
            </div>
        </section>
    );
};
