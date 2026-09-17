import Image from 'next/image';

import { useAnimations } from '@/hooks';
import { galleryHero } from '@/constant';
import { fitTitleSize } from '@/utils';
import {
    portfolioImage11,
    portfolioImage15,
    portfolioImage17,
    portfolioMainImage,
} from '@/assets';

export const GalleryHero = () => {
    const { fadeOut } = useAnimations();
    const { title } = galleryHero;

    const titleSize = {
        '--gallery-hero-title': fitTitleSize(title, 66),
        '--gallery-hero-title-lg': fitTitleSize(title, 62),
    } as React.CSSProperties;

    return (
        <section className='relative w-full overflow-hidden bg-[#eae7dd]'>
            <div
                className='relative mx-auto w-full max-w-[1900px] pb-10 pt-8 lg:h-[60vw] lg:pb-0 lg:pt-10'
                data-aos={fadeOut}
            >
                {/***** BIG TITLE *****/}
                <h1
                    style={titleSize}
                    className='gallery-hero__title display_serif relative z-40 whitespace-nowrap text-center uppercase leading-[0.86] tracking-[0.01em] text-[#2b2723]'
                >
                    {title.map((line) => (
                        <span key={line} className='block'>
                            {line}
                        </span>
                    ))}
                </h1>

                {/**** CENTER ****/}
                <div className='relative z-0 mx-auto -mt-[7vw] aspect-[3/4] w-[86%] overflow-hidden lg:absolute lg:left-[31.5%] lg:top-[26%] lg:mt-0 lg:aspect-auto lg:h-[74%] lg:w-[36%]'>
                    <Image
                        priority
                        src={portfolioImage15}
                        alt='Bodas reales'
                        quality={70}
                        sizes='(max-width: 1024px) 86vw, 36vw'
                        className='h-full w-full object-cover grayscale'
                    />
                </div>

                {/**** LEFT ****/}
                <div className='relative z-10 mt-8 aspect-[4/5] w-[62%] overflow-hidden lg:absolute lg:left-[6.5%] lg:top-[44%] lg:mt-0 lg:aspect-auto lg:h-[56%] lg:w-[20%]'>
                    <Image
                        src={portfolioMainImage}
                        alt='Bodas reales'
                        quality={65}
                        sizes='(max-width: 1024px) 62vw, 20vw'
                        className='h-full w-full object-cover grayscale'
                    />
                </div>

                {/**** RIGHT ****/}
                <div className='relative z-10 -mt-[6vw] ml-auto aspect-[3/4] w-[58%] overflow-hidden lg:absolute lg:left-[75.5%] lg:top-[24%] lg:mt-0 lg:aspect-auto lg:h-[52%] lg:w-[22.5%]'>
                    <Image
                        src={portfolioImage11}
                        alt='Bodas reales'
                        quality={65}
                        sizes='(max-width: 1024px) 58vw, 23vw'
                        className='h-full w-full object-cover grayscale'
                    />
                </div>

                {/**** SMALL DETAIL — the only one in color ****/}
                <div className='relative z-20 mx-auto mt-8 aspect-[16/10] w-[72%] overflow-hidden lg:absolute lg:left-[58.5%] lg:top-[71%] lg:mt-0 lg:aspect-auto lg:h-[17%] lg:w-[17.5%]'>
                    <Image
                        src={portfolioImage17}
                        alt='Bodas reales'
                        quality={65}
                        sizes='(max-width: 1024px) 72vw, 18vw'
                        className='h-full w-full object-cover'
                    />
                </div>
            </div>
        </section>
    );
};
